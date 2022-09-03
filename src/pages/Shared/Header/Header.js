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
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    const [cartItem] = useContext(CartContext);
    return (
        <div className='header-container'>
            <Link to='/'><img src={logo2} alt="" /></Link>

            <div className='link'>
                <Link className='cart' to='/cart'><FontAwesomeIcon icon={faCartShopping} /><p>{cartItem?.length}</p></Link>

                {user ? <p title='Click for logout' className='toggle-header' onClick={logout}>Sign Out</p> : <Link to='/login'>Login</Link>
                }

                {user ? <p title='User name' className='toggle-header'>{user?.displayName}</p> : <Link to='/signup'>Sign Up</Link>
                }
            </div>
        </div>
    );
};

export default Header;