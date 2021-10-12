import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    // const reducer = (prev,current) => {prev+current}
    // cart.reduce(reducer,[])
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>{props.cart.length}</h3>
            <h3>Total : ${total}</h3>
        </div>
    );
};

export default Cart;