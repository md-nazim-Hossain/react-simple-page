import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,key} = props.product;
    // const {handleRemoveItem} = props.handleRemoveItem;
    return (
        <div className='product'>
            <div className='product-details'>
                <h2 className='product-name'>{name}</h2>
                <p>Quantity: {quantity}</p>
                <p className='price' style={{margin:'4px 0px'}}>Price: {price}</p>
                <button onClick={() => props.handleRemoveItem(key)} className='btn-regular' >Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;