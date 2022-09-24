import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import './CartFoods.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../../App';
const CartFoods = ({ cart, removeFromCart }) => {
    const [cartItem, setCartItem] = useContext(CartContext);
    const cartIncrease = (id) => {
        const exists = cartItem.find(cart => cart.id === id)
        if (exists) {
            const existCart = cartItem.map(cart => cart.id === id ? { ...exists, quantity: exists.quantity + 1 } : cart);
            setCartItem(existCart);
        }
    }

    const cartDecrease = (id) => {
        const exists = cartItem.find(cart => cart.id === id)
        if (exists && exists.quantity > 1) {
            const existCart = cartItem.map(cart => cart.id === id ? { ...exists, quantity: exists.quantity - 1 } : cart);
            setCartItem(existCart);
        }
    }

    return (
        <div className='display-cart'>
            <div className='added-cart'>
                <img src={cart?.img} alt="" />
                <h4>{cart?.name.slice(0, 10)}...</h4>

                <div className='cart-quantity'>
                    <p onClick={() => cartIncrease(cart.id)}>+</p>

                    <p style={{ 'cursor': 'context-menu', 'color': 'black' }}>{cart?.quantity}</p>

                    <p onClick={() => cartDecrease(cart.id)}>-</p>
                </div>

                <p>({cart?.quantity})*({cart?.price})={(cart?.quantity * cart?.price).toFixed(2)}$</p>

                <button onClick={() => removeFromCart(cart)}>{<FontAwesomeIcon icon={faTrash} />}</button>
            </div>
        </div>
    );
};

export default CartFoods;