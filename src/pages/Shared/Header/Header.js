import React, { useContext } from 'react';
import logo2 from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { CartContext } from '../../../App';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavCart from './DropDownCart/NavCart';
const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    const { value } = useContext(CartContext);
    const [cartItem] = value;

    let quantity = cartItem.map(cart => cart.quantity);

    const initialVal = 0;
    const totalQuantity = quantity.reduce((previousVal, currentVal) => previousVal + currentVal, initialVal);

    return (
        <div className='header-container'>
            <Link to='/'><img src={logo2} alt="" /></Link>

            <div className='link'>

                <div className='cart-dropDown'>

                    <Link className='cart' to='/cart'><FontAwesomeIcon icon={faCartShopping} /><p>{totalQuantity}</p></Link>

                    <NavDropdown title="Selected Food" id="nav-dropdown"
                    >
                        <NavDropdown.Item className='display-dropDown' >
                            {
                                cartItem.map(cart => <NavCart
                                    key={cart.id}
                                    cart={cart}></NavCart>)
                            }
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>

                {user ? <button className='toggle-header' onClick={logout}>Sign Out</button> : <Link className='login' to='/login'>Login</Link>
                }

                {user ? <p title='User name' className='toggle-header'>{user?.displayName}</p> : ''
                }
            </div>
        </div>
    );
};

export default Header;