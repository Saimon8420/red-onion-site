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
    const deliveryCharge = 10;

    const roundOfSubTotal = subTotal.toFixed(2);

    const withDelivery = (deliveryCharge + subTotal).toFixed(2);

    const handleClick = (option) => {
        if (option === 'home') {
            document.getElementById('self').style.display = 'none';
            document.getElementById('home-delivery').style.display = 'block';
            document.getElementById('checkout-btn').style.display = 'inline';
        }
        else {
            document.getElementById('home').style.display = 'none';
            document.getElementById('self-collect').style.display = 'block';
            document.getElementById('checkout-btn').style.display = 'inline';
        }
    }
    return (
        <div className='display-cart1'>
            <PageTitle title='Cart'></PageTitle>
            <div className='ScrollStyle'>
                <h2>Added Foods</h2>
                {cartItem.map(cart => <CartFoods
                    key={cart.id}
                    cart={cart}
                    removeFromCart={removeFromCart}
                ></CartFoods>)}
            </div>
            <div className='cart-summary'>
                <h2>Cart Summary</h2>
                <h5>Delivery Option:</h5>
                <div className='option' id='home'>
                    <input type="checkbox" name="" id=""
                        onClick={() => handleClick('home')} />
                    <label>Home Delivery?</label>
                </div>
                <div className='option' id='self'>
                    <input type="checkbox" name="" id="" onClick={() => handleClick('Self')} />
                    <label>Self Collect?</label>
                </div>
                <div id='home-delivery' className='summary-display'>
                    <div className='summary-price'>
                        <h3>Sub Total:</h3>
                        <h3>${roundOfSubTotal}</h3>
                    </div>
                    <div className='summary-price'>
                        <h3>Delivery Cost:</h3>
                        <h3>${deliveryCharge}</h3>
                    </div>
                    <div className='summary-price'>
                        <h3>Total:</h3>
                        <h3>${withDelivery}</h3>
                    </div>
                </div>
                <div id='self-collect' className='summary-display'>
                    <div className='summary-price'>
                        <h3>Sub Total:</h3>
                        <h3>${roundOfSubTotal}</h3>
                    </div>
                    <div className='summary-price'>
                        <h3>Delivery Cost:</h3>
                        <h3>0$</h3>
                    </div>
                    <div className='summary-price'>
                        <h3>Total:</h3>
                        <h3>${roundOfSubTotal}</h3>
                    </div>
                </div>
                <button id='checkout-btn'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;