import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price,stock,category,star,img,seller} = props.product;
    // console.log(props.product.name)
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="product image" />
            </div>
            <div className="product-desc">
                <h4>{name}</h4>
                <h4>Price: {price}</h4>
                <h6>Rating: {star}</h6>
                <p>Seller: {seller}</p>
                <button className="btn-regular">Add to cart</button>
            </div> 
        </div>
    );
};

export default Product;