import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Meal.css';

const Meal = ({ meal, handleButton }) => {
    return (
        <div className='meal-display'>
            <img src={meal.img} alt="" />
            <h4>{meal.name}</h4>
            <p>Price: ${meal.price}</p>
            <button onClick={() => handleButton(meal)}>Add To <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Meal;