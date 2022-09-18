import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartFoods.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const CartFoods = ({ cart, removeFromCart }) => {
    return (
        <div className='display-cart'>
            <div className='added-cart'>
                <img src={cart?.img} alt="" />
                <h4>{cart?.name.slice(0, 10)}...</h4>
                <p>{cart?.quantity}*({cart?.price}$)={cart?.quantity * cart?.price}</p>
                <button onClick={() => removeFromCart(cart)}>{<FontAwesomeIcon icon={faTrash} />}</button>
            </div>
        </div>
    );
};

export default CartFoods;