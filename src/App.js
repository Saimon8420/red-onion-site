import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Food from './pages/Home/Food/Food';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Signup from './pages/Login/SignUp/Signup';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/Shared/NotFound/NotFound';

const CartContext = createContext([]);
function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    <CartContext.Provider value={[cartItem, setCartItem]}>
      <div className='display'>
        <Header />

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

          <Route path='*' element={<NotFound />}></Route>

        </Routes>
        <div className='footer-display'>
          <Footer />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export { App, CartContext };
