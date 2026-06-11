import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../C/Home";
import Contact from "../C/Contact";
import Market from "../C/Market";
import "./AppRouter.css";
import Cart from "../C/Cart"

function AppRouter() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    }

    return (
        <Router>
        <nav>
            <Link className="n1" to="/">Home</Link>
            <Link className="n2" to="/contact">Contact</Link>
            <Link className="n3" to="/market">Market</Link>
            <button className="n4" onClick={toggleCart}>
                🛒({cart.length})
            </button>
        </nav>
        {isCartOpen && <Cart toggleCart={toggleCart} removeFromCart={removeFromCart} cart={cart} />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/market" element={<Market addToCart={addToCart} removeFromCart={removeFromCart} />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;