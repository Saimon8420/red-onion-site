import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import google_logo from '../../../images/google_logo.png';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';
    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = () => {
        navigate('/signup');
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    let errorElementGoogle;
    let errorElement;
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const handlePasswordReset = () => {
        navigate('/reset_password');
    }

    if (errorGoogle) {
        errorElementGoogle = <p style={{ 'background-color': 'red', color: 'white' }}> {errorGoogle?.message}</p>
    }
    if (error) {
        errorElement = <p style={{ 'background-color': 'red', color: 'white' }}> {error?.message}</p>
    }

    return (
        <div className='login-display'>
            {/* <Helmet>
                <title>Login - Red Onion Site</title>
            </Helmet> */}
            <PageTitle title='Login'></PageTitle>
            <img src={logo} alt="" />
            <h4>Please login</h4>
            <form onSubmit={handleSubmit}>
                <label className='label-display' htmlFor="email"><p>Email</p> </label>
                <input className='input-display' type="email" name="email" placeholder='Enter email' id="email" ref={emailRef} required />
                <br />
                <label className='label-display' htmlFor="password">
                    <p>Password</p>
                </label>
                <input className='input-display' type="password" name="password" placeholder='Enter password' id="password" required ref={passwordRef} />
                <br />
                <button className='login-btn' type="submit">Login</button>
            </form>
            {errorElement}

            <button onClick={handlePasswordReset} className='forget-btn'>Forget Password?</button>

            <div>
                <hr />
                <p style={{ 'font-weight': 'bold' }}>or</p>
            </div>
            <button className='login-btn' onClick={() => signInWithGoogle()}><img src={google_logo} alt="" /><p> Login with Google</p></button>
            {errorElementGoogle}
            <br />
            <br />
            <div style={{
                'text-align': 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <input onChange={navigateRegister} type="checkbox" name="login" id="" />
                <label htmlFor="login">Haven't any account? Then Sing-up</label>
            </div>
        </div>
    );
};

export default Login;