import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import google_logo from '../../../images/google_logo.png';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [checkPass, setCheckPass] = useState(true);

    let errorElement;
    let googleErrorElement;
    let errorElement2;

    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/login');
    }

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const ConfirmPasswordRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setCheckPass(false);
        }
        else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            navigate('/home');
        }
    }

    if (error) {
        errorElement = <p style={{
            color: 'white',
            'background-color': 'red',
            width: '50%',
            'border-radius': '5px',
            margin: '10px auto'
        }}>{error?.message}</p>
    }
    if (updateError) {
        errorElement = <p style={{
            color: 'white',
            'background-color': 'red',
            width: '50%',
            'border-radius': '5px',
            margin: '10px auto'
        }}> {updateError?.message}</p>
    }

    if (!checkPass) {
        errorElement2 = <p style={{
            color: 'white',
            'background-color': 'red',
            width: '50%',
            'border-radius': '5px',
            margin: '10px auto'
        }}>Password doesn't match</p>;
    }
    return (
        <div className='login-display'>
            <img src={logo} alt="" />
            <h2>Please Sign-Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">User name</label>
                <input className='input-display' type="text" name="name" placeholder='Enter name' id="" ref={nameRef} required />
                <br />
                <label htmlFor="email">Email</label>
                <input className='input-display' type="email" name="email" placeholder='Enter email' id="email" ref={emailRef} required />
                <br />
                <label htmlFor="password">Password</label>
                <input className='input-display' type="password" name="password" placeholder='Enter password' id="password" ref={passwordRef} required />
                <br />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input className='input-display' type="password" name="confirm-password" placeholder='Re-enter password' id="confirm-password" ref={ConfirmPasswordRef} required />
                <br />
                {errorElement2}
                <button type="submit">Sign-up</button>
            </form>
            {errorElement}
            <div>
                <hr />
                <p style={{ 'font-weight': 'bold' }}>or</p>
            </div>
            <div style={{ 'text-align': 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input onChange={navigateRegister} type="checkbox" name="login" id="" />
                <label htmlFor="login">Already have an account? Then Log-in</label>
            </div>
        </div>
    );
};

export default Signup;