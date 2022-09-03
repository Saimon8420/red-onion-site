import React, { useContext } from 'react';
import { CartContext } from '../../../../App';
import lunch1 from '../../../../images/lunch/lunch1.png';
import lunch2 from '../../../../images/lunch/lunch2.png';
import lunch3 from '../../../../images/lunch/lunch3.png';
import lunch4 from '../../../../images/lunch/lunch4.png';
import lunch5 from '../../../../images/lunch/lunch5.png';
import lunch6 from '../../../../images/lunch/lunch6.png';
import Meal from '../Meal/Meal';

const Lunch = () => {
    const [cartItem, setCartItem] = useContext(CartContext);

    const lunch = [
        { id: 13, name: 'Healthy Meal Plan', price: 23.99, img: lunch1 },
        { id: 14, name: 'Fried Chicken Bento', price: 9.99, img: lunch2 },
        { id: 15, name: 'Tarragon-Rubbed-Salmon', price: 6.99, img: lunch3 },
        { id: 16, name: 'Indian Lunch', price: 8.99, img: lunch4 },
        { id: 17, name: 'Beef Steak', price: 15.99, img: lunch5 },
        { id: 18, name: 'Honey-Soy-Glazed Salmon with Peppers', price: 7.99, img: lunch6 }
    ]
    const handleButton = (item) => {
        const exists = cartItem.find(cart => cart.id === item.id)
        if (exists) {
            alert('already added');
        }
        else {
            const newCart = [...cartItem, item]
            setCartItem(newCart);
        }
    }
    return (
        <div className='food-display'>
            {
                lunch.map(meal => <Meal
                    key={meal.id}
                    meal={meal}
                    handleButton={handleButton}
                ></Meal>)
            }
        </div>
    );
};

export default Lunch;