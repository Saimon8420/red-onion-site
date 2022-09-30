import React, { useContext } from 'react';
import { CartContext } from '../../../../App';
import dinner1 from '../../../../images/dinner/dinner1.png';
import dinner2 from '../../../../images/dinner/dinner2.png';
import dinner3 from '../../../../images/dinner/dinner3.png';
import dinner4 from '../../../../images/dinner/dinner4.png';
import dinner5 from '../../../../images/dinner/dinner5.png';
import dinner6 from '../../../../images/dinner/dinner6.png';
import Meal from '../Meal/Meal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dinner = () => {
    const { value } = useContext(CartContext);
    const [cartItem, setCartItem] = value;

    const dinner = [
        { id: 7, name: 'Salmon with Grapefruit and Lentil Salad', price: 9.99, img: dinner1 },
        { id: 8, name: 'Lemony Salmon Piccata', price: 10.99, img: dinner2 },
        { id: 9, name: 'Pork Tenderloin With Quinoa Pilaf', price: 12.99, img: dinner3 },
        { id: 10, name: 'French Fries with cheese', price: 8.99, img: dinner4 },
        { id: 11, name: 'Garlic Butter Baked Salmon', price: 6.99, img: dinner5 },
        { id: 12, name: 'Baked Chicken', price: 9.99, img: dinner6 }
    ]
    const handleButton = (item) => {
        const exists = cartItem.find(cart => cart.id === item.id)
        if (exists) {
            // toast.success('Already added!', {
            //     position: toast.POSITION.TOP_CENTER
            // });
            const existCart = cartItem.map(cart => cart.id === item.id ? { ...exists, quantity: exists.quantity + 1 } : cart);
            setCartItem(existCart);
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
                    dinner.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                        handleButton={handleButton}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Dinner;