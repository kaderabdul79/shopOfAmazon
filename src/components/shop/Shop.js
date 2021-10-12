import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../storage/localstorage';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
        
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const getsavedData = getStoredCart();
        for(const key in getsavedData){
            const addedproduct = products.find(product => product.key === key);
            console.log(addedproduct,key);
        }
    }, [])

    const handleProduct = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.key)
    }
    

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h5>total data {products.length}</h5> */}
                {
                    products.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleProduct={handleProduct}></Product>)
                }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;