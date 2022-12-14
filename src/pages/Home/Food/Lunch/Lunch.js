import React, { useContext } from 'react';
import { CartContext } from '../../../../App';
import lunch1 from '../../../../images/lunch/lunch1.png';
import lunch2 from '../../../../images/lunch/lunch2.png';
import lunch3 from '../../../../images/lunch/lunch3.png';
import lunch4 from '../../../../images/lunch/lunch4.png';
import lunch5 from '../../../../images/lunch/lunch5.png';
import lunch6 from '../../../../images/lunch/lunch6.png';
import Meal from '../Meal/Meal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Lunch = () => {
    const { value } = useContext(CartContext);
    const [cartItem, setCartItem] = value;

    const lunch = [
        { id: 13, name: 'Healthy Meal Plan', price: 23.99, img: lunch1 },
        { id: 14, name: 'Fried Chicken Bento', price: 9.99, img: lunch2 },
        { id: 15, name: 'Tarragon Rubbed Salmon', price: 6.99, img: lunch3 },
        { id: 16, name: 'Indian Lunch', price: 8.99, img: lunch4 },
        { id: 17, name: 'Beef Steak', price: 15.99, img: lunch5 },
        { id: 18, name: 'Honey Soy Glazed Salmon with Peppers', price: 7.99, img: lunch6 }
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
                    lunch.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                        handleButton={handleButton}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Lunch;