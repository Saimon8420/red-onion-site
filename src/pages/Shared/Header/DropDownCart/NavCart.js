import React from 'react';
import './NavCart.css';
const NavCart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='display-navCart'>
            <img src={cart.img} alt="" />
            <p>{cart.name.slice(0, 10)}...</p>
            <p>Price: {cart.price}</p>
        </div>
    );
};

export default NavCart;