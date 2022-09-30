import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/Cart/CheckOut/CheckOut';
import Food from './pages/Home/Food/Food';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ResetPassword from './pages/Login/ResetPassword/ResetPassword';
import Signup from './pages/Login/SignUp/Signup';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';

const CartContext = createContext([]);
function App(props) {
  const [cartItem, setCartItem] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  return (
    <CartContext.Provider value={{ value: [cartItem, setCartItem], value2: [grandTotal, setGrandTotal] }}>
      {props.children}
      <div className='display'>

        <div className='header-display'>
          <Header />
        </div>

        <div className='route-display'>
          <Routes>
            <Route path='/login' element={<Login />}
            ></Route>

            <Route path='/signup' element={<Signup />}
            ></Route>

            <Route path='/' element={<Home />}>
              {/* <Route path=':idFood' element={<Food />}
          ></Route> */}
            </Route>

            <Route path='/home' element={<Home />}>
              <Route path=':idFood' element={<Food />}
              ></Route>
            </Route>

            <Route path='/cart' element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
            ></Route>

            <Route path='/cart/checkOut' element={<CheckOut />}></Route>

            <Route path='/reset_password' element={<ResetPassword />}></Route>

            <Route path='*' element={<NotFound />}></Route>

          </Routes>
        </div>

        <div className='footer-display'>
          <Footer />
        </div>

      </div>
    </CartContext.Provider>
  );
}

export { App, CartContext };
