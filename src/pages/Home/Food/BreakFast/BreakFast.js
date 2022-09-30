import React, { useContext } from 'react';
import breakfast1 from '../../../../images/breakfast/breakfast1.png';
import breakfast2 from '../../../../images/breakfast/breakfast2.png';
import breakfast3 from '../../../../images/breakfast/breakfast3.png';
import breakfast4 from '../../../../images/breakfast/breakfast4.png';
import breakfast5 from '../../../../images/breakfast/breakfast5.png';
import breakfast6 from '../../../../images/breakfast/breakfast6.png';
import './BreakFast.css';
import Meal from '../Meal/Meal';
import { CartContext } from '../../../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreakFast = () => {
    const { value } = useContext(CartContext);
    const [cartItem, setCartItem] = value;
    const breakFast = [
        { id: 1, name: 'Bagel and cream cheese', price: 6.99, img: breakfast1 },
        { id: 2, name: 'Breakfast Sandwich', price: 9.99, img: breakfast2 },
        { id: 3, name: 'Baked Chicken', price: 10.99, img: breakfast3 },
        { id: 4, name: 'Eggs Benedict', price: 8.99, img: breakfast4 },
        { id: 5, name: 'Toast Croissant Fried egg', price: 19.99, img: breakfast5 },
        { id: 6, name: 'Full Breakfast Fried Egg Toast Brunch', price: 3.99, img: breakfast6 }
    ]
    const handleButton = (item) => {
        const exists = cartItem.find(cart => cart.id === item.id)
        if (exists) {
            // toast.success('Already added!', {
            //     position: toast.POSITION.TOP_CENTER
            // });
            const existCart = cartItem.map(cart => cart.id === item.id ? { ...exists, quantity: exists.quantity + 1 } : cart);
            setCartItem(existCart);

            // setCartItem(cartItem.map(cart => cart.id === item.id ? { ...exists, quantity: exists.quantity + 1 } : cart));
        }
        else {
            const newCart = [...cartItem, { ...item, quantity: 1 }];
            setCartItem(newCart);
        }
    }
    return (
        <div>
            <ToastContainer />
            <div className='food-display'>
                {
                    breakFast.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                        handleButton={handleButton}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default BreakFast;