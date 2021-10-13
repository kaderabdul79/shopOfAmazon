import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name,price,stock,category,star,img,seller} = props.product;
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
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
                <Rating initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color" />
                        <br />
                <button onClick={() => props.handleProduct(props.product)} className="btn-regular">{element} Add to cart</button>
            </div> 
        </div>
    );
};

export default Product;