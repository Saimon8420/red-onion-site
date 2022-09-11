import { useState } from 'react';
import { useEffect } from 'react';
import { useContext, useRef } from 'react';
import { CartContext } from '../../App';
import PageTitle from '../Shared/PageTitle/PageTitle';
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
        <div className='display-cart1'>
            <PageTitle title='Cart'></PageTitle>
            <h2>Total Food:{cartItem.length}</h2>
            {cartItem.map(cart => <CartFoods
                key={cart.id}
                cart={cart}
                removeFromCart={removeFromCart}
            ></CartFoods>)}
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;