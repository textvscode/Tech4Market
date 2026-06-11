import React from 'react';
import "./Cart.css"

const Cart = ({ toggleCart, removeFromCart, cart }) => {
const totalPrice = cart.reduce((total, product) => {
    const price = Number(
        product.price.replace(/[^\d]/g, "")
    );
    return total + price;
}, 0);

    return (
        <>
            <div className="cart">
                <div className="cart-container">
                    <button className="cart-button" onClick={toggleCart}>
                        Закрыть
                    </button>
                    <h2>Корзина</h2>
                    {cart.length === 0 ? (
                        <p>Корзина пуста</p>
                    ) : (
                        <ul>
                            {cart.map((product) => (
                                <li key={product.id}>
                                    <span>{product.name}</span>
                                    <span> - {product.price}</span>
                                    <button onClick={() => removeFromCart(product.id)}>
                                        Удалить
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <h3>Итого: {totalPrice} </h3>
                </div>
            </div>
        </>
    );
}

export default Cart;