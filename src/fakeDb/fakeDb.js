// data save at local Storage 
const addToDb = (id) => {
    let shippingCart = {};
    const storedCart = localStorage.getItem('shipping-cart');
    if (storedCart) {
        shippingCart = JSON.parse(storedCart);
    }
    // add quentity
    const quentiry = shippingCart[id];
    if (quentiry) {
        const newQuentity = quentiry + 1;
        shippingCart[id] = newQuentity;
    } else {
        shippingCart[id] = 1;
    }
    localStorage.setItem('shipping-cart', JSON.stringify(shippingCart))
}

// call data from database 
const getStoredCart = () => {
    let shippingCart = {};
    const storedCart = localStorage.getItem('shipping-cart');
    if (storedCart) {
        shippingCart = JSON.parse(storedCart);
    }
    return shippingCart;
}

// remove from local Storage 
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shipping-cart');
    if (storedCart) {
        const shippingCart = JSON.parse(storedCart);
        if (id in shippingCart) {
            delete shippingCart[id];
            localStorage.getItem('shipping-cart', JSON.stringify(shippingCart));
        }
    }
}

export { addToDb, removeFromDb, getStoredCart }