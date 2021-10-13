import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../storage/localstorage';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [displayProducts,setDisplayProducts] = useState([])
    const [cart,setCart] = useState([])
        
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => {setProducts(data);
                    setDisplayProducts(data);})
    },[])

    useEffect(() => {
        if(products.length){
            const getsavedData = getStoredCart();
            const savedincart = [];
            for(const key in getsavedData){
            const addedproduct = products.find(product => product.key === key);
            if(addedproduct){
                const quantity = getsavedData[key];
                addedproduct.quantity = quantity;
                savedincart.push(addedproduct)
            }
            
            }
            setCart(savedincart);
        }
    }, [products])

    const handleProduct = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.key)
    }
    const handleSearch = (event) => {
        const searchtext = event.target.value;
        const matchedproducts = products.filter(product => 
            product.name.toLowerCase().includes(searchtext.toLowerCase()));
            setDisplayProducts(matchedproducts);
    }

    return (
        [
        <div className="search-container">
            <input onChange={handleSearch} type="text" name="" id="" placeholder="search product" />
        </div>,
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h5>total data {products.length}</h5> */}
                {
                    displayProducts.map(product => <Product 
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
        ]
    );
};

export default Shop;