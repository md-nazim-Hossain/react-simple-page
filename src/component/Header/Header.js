/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';
const Header = () => {
    const activeStyle={
        backgroundColor:'lightgray'
    }
    return (
        <div>
            <img className='header-img' src={logo}/>
            <div className='menu'>
                <span><NavLink activeStyle={activeStyle} to='/shop'>Shop</NavLink></span>
                <span><NavLink activeStyle={activeStyle} to='/review'>Order Review</NavLink></span>
                <span><NavLink activeStyle={activeStyle} to='/inventory'>Manage Inventory here</NavLink></span>
            </div>
        </div>
    );
};

export default Header;