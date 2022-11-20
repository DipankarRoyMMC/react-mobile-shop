import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    // console.log(cart);

    let price = 0;
    let shipping = 0;
    let quentity = 0
    for (const product of cart) {
        quentity = quentity + product.quentity;
        price = price + product.price * product.quentity;
        shipping = shipping + product.shipping;
    }
    const tax = price * .10;
    const grandTotal = price + shipping + tax;
    return (
        <div className="cart">
            <h1>Order Summary</h1>
            <h3>Selected Items: {quentity}</h3>
            <p><strong>Price: ${price}</strong></p>
            <p><strong>Shipping: ${shipping}</strong></p>
            <p><strong>Tax: ${tax.toFixed(2)}</strong></p>
            <p><strong>Grand Total: ${grandTotal.toFixed(2)}</strong></p>
        </div>
    );
};

export default Cart;