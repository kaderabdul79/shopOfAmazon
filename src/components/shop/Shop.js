import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h5>total data {products.length}</h5> */}
                {
                    products.map(product => <Product key={product.key} product={product}></Product>)
                }
                </div>
                <div className="cart-container">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;