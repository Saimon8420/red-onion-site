import React from 'react';
import './NavCart.css';
const NavCart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='display-navCart'>
            <img src={cart.img} alt="" />
            <p>{cart.name.slice(0, 10)}...</p>
            <p><small style={{
                'backgroundColor': 'orange',
                'borderRadius': '5px',
                'padding': '2px'
            }}>Qty:{cart.quantity}</small></p>
            <p>Price:{cart.price * cart.quantity}$</p>
        </div>
    );
};

export default NavCart;