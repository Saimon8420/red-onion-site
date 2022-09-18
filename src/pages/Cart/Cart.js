import { useContext } from 'react';
import { CartContext } from '../../App';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Cart.css';
import CartFoods from './CartFoods/CartFoods';
const Cart = () => {
    const [cartItem, setCartItem] = useContext(CartContext);
    let subTotal = 0;
    for (let price of cartItem) {
        subTotal = subTotal + (price.price * price.quantity);
    }
    const removeFromCart = (item) => {
        const restCart = cartItem.filter(cart => cart.id !== item.id)
        setCartItem(restCart);
    }
    const roundOfSubTotal = subTotal.toFixed(4);
    return (
        <div className='display-cart1'>
            <PageTitle title='Cart'></PageTitle>
            <h2>Total Food:{cartItem.length}</h2>
            <div className='ScrollStyle'>
                {cartItem.map(cart => <CartFoods
                    key={cart.id}
                    cart={cart}
                    removeFromCart={removeFromCart}
                ></CartFoods>)}
            </div>
            <h3>Total Price: ${roundOfSubTotal}</h3>
        </div>
    );
};

export default Cart;