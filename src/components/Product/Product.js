import React from 'react';
import './Product.css';
const Product = ({ product, handleAddToCart }) => {
    // console.log(product);
    const { picture, name, company, price, shipping } = product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>Company: {company}</small></p>
            <p>Shipping: {shipping}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;