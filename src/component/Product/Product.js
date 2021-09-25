import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = props => {
    const {name,img,stock,price,seller,star} = props.product;
    return (
        <div className='product'>
            <img src = {img} alt=""/>
            <div className='product-details'>
                <h2 className='product-name'>{name}</h2>
                <p>by: {seller}</p>
                <p className='star'>
                    <Rating
                        readonly
                        initialRating = {star}
                        emptySymbol='far fa-star'
                        fullSymbol='fas fa-star'
                    />
                </p>
                <p className='price'>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleEvent(props.product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;