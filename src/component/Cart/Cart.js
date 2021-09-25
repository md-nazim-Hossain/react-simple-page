import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){ 
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        console.log(product.quantity)
    }
    const shipping = total > 0 ? 15:0;
    const tax = (total + shipping) * 0.10;
    const totalMoney = total + shipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {totalQuantity}</p>
            <div className='order-details'>
                <p><small>Items: ${total.toFixed(2)}</small> </p>           
                <p><small>Shipping and Handlling : ${shipping}</small></p>          
                <p><small>Total before Tax : ${(total + shipping).toFixed(2)}</small></p>           
                <p> <small>Estimate Tax : ${tax.toFixed(2)}</small> </p>         
                <h2 className='order-total'>Order Total: ${totalMoney.toFixed(2)}</h2>
            </div>
            <button className='btn-regular'>Review your order</button>
        </div>
    );
};

export default Cart;