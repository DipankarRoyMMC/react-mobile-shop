import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../fakeDb/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const getStored = getStoredCart();
        const saveCart = [];
        for (const id in getStored) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quentity = getStored[id];
                addedProduct.quentity = quentity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart);
        }
    }, [products]);


    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quentity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quentity = exists.quentity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);

        addToDb(selectedProduct.id);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop; 