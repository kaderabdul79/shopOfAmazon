import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    
    let totalquantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalquantity = totalquantity + product.quantity;
        }
    // const reducer = (prev,current) => {prev+current}
    // cart.reduce(reducer,[])
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>{totalquantity}</h3>
            <h3>Total : ${total}</h3>
        </div>
    );
};

export default Cart;