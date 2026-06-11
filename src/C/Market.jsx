import React, { useState, useEffect} from "react";
import {db} from "../FireBaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./Market.css"

const Market = ({ addToCart, removeFromCart }) => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "Market"));  
                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));  
                setProducts(productsData);
            }
            catch (error) {
                console.error("Error fetching products: ", error);
            }
        }
        fetchProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );

    return (
        <>
            <div className="market-container">
                <h1>Market</h1>
                <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <ul>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <img src={product.img} alt={product.name}/>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Цена: {product.price}</p>
                            <button className="m-btn" onClick={() => addToCart(product)}>Добавить в корзину</button>
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="footer">
    <div className="footer-logo">
      <span className="footer-logo">© TechMarket</span>
      <p className="footer-text">2026 All rights reserved.</p>
    </div>
    <div className="footer-Company">
      <h3 className="footer-title">Company</h3>
      <ul className="footer-list">
        <li><a href="/" className="footer-link">Location</a></li>
        <li><a href="/" className="footer-link">About Us</a></li>
        <li><a href="/" className="footer-link">Careers</a></li>
      </ul>
    </div>
    <div className="footer-support">
      <h3 className="footer-title">Support</h3>
      <ul className="footer-list">
        <li><a href="/" className="footer-link">Help Center</a></li>
        <li><a href="/" className="footer-link">Contact Us</a></li>
        <li><a href="/" className="footer-link">Returns</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <h3 className="footer-title">Follow Us</h3>
      <ul className="footer-list">
        <li><a href="/" className="footer-link">Facebook</a></li>
        <li><a href="/" className="footer-link">Twitter</a></li>
        <li><a href="/" className="footer-link">Instagram</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h3 className="footer-title">Contact Us</h3>
      <p className="footer-text">Email:TechMarket@gmail.com</p>
      <p className="footer-text">Phone: +7 700 777 77 77</p>
    </div>
    </footer>
        </>
    );
}

export default Market;
