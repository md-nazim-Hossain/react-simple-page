import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [displayProducts,setDisplayProducts] = useState([]);

    const handleEvent = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key);
    }

    useEffect(() =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>{
             setProducts(data)
             setDisplayProducts(data)
            });
    },[]);

    useEffect(() =>{
        const saveCart = getStoredCart();
        if(products.length){
            const findItems = [];
            for(const key in saveCart){
                const getItem = products.find(product => product.key === key);
                
                if(getItem){
                    const quantity = saveCart[key];
                    getItem.quantity = quantity;
                    findItems.push(getItem);
                }
            }
            setCart(findItems);
        }
       
    },[products]);

    const handleDisplay = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <div className='search'>
                <input 
                    onChange = {handleDisplay}
                    type='text' 
                    placeholder='Search Products'
                />
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                {
                    displayProducts.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleEvent={handleEvent}
                        >   
                        </Product>)
                }
                </div>
                <div className='cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;