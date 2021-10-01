import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useCart(products);
    const [displayProducts,setDisplayProducts] = useState([]);

    const handleEvent = (product) =>{
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exists){
            const remain = cart.filter(pd => pd.key !== product.key);
            exists.quantity += 1;
            newCart = [...remain,product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
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
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn-regular'>Review your order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;