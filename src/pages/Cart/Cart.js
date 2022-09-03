import { useState } from 'react';
import { useEffect } from 'react';
import { useContext, useRef } from 'react';
import { CartContext } from '../../App';
import './Cart.css';
import CartFoods from './CartFoods/CartFoods';
const Cart = () => {
    const [cartItem, setCartItem] = useContext(CartContext);
    let totalPrice = 0;
    for (let price of cartItem) {
        totalPrice = totalPrice + (price.price);
    }
    const removeFromCart = (item) => {
        const restCart = cartItem.filter(cart => cart.id !== item.id)
        setCartItem(restCart);
    }
    return (
        <div className='display-cart'>
            <h2>Total Food:{cartItem.length}</h2>
            <hr />
            {cartItem.map(cart => <CartFoods
                key={cart.id}
                cart={cart}
                removeFromCart={removeFromCart}
            ></CartFoods>)}
            <hr />
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;