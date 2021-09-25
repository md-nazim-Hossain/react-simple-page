/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
const Header = () => {
    return (
        <div>
            <img className='header-img' src={logo}/>
            <div className='menu'>
                <span><a href='/shop'>Shop</a></span>
                <span><a href='/order'>Order Review</a></span>
                <span><a href='/inventory'>Manage Inventory here</a></span>
            </div>
        </div>
    );
};

export default Header;