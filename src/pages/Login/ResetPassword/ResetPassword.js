import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');

    const handlePasswordReset = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            if (!(resetError?.message)) {
                toast.success('Reset email send, please check!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }
    }
    let errorElement;
    if (resetError) {
        errorElement = <p style={{ 'background-color': 'red', color: 'white' }}> {resetError?.message}</p>
    }
    return (
        <div className='login-display'>
            <ToastContainer />
            <PageTitle title='Reset Password'></PageTitle>
            <img src={logo} alt="" />
            <form onSubmit={handlePasswordReset}>
                <label className='label-display' htmlFor="email"><p>Email</p></label>
                <input className='input-display' type="email" name="email" placeholder='Enter email' id="input-id" ref={emailRef} required />
                <button className='login-btn' type="submit">Reset Password</button>
            </form>
            <br />
            {errorElement}
        </div>
    );
};

export default ResetPassword;