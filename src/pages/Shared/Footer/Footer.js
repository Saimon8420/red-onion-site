import React from 'react';
import './Footer.css';
const Footer = () => {
    const date = new Date().getFullYear();

    // const today1 = new Date();
    // const amPm = today1.getHours() >= 12 ? 'PM' : 'AM';
    // let hours = today1.getHours() % 12;
    // hours = hours ? hours : 12;
    // const time = hours + ':' + today1.getMinutes() + ':' + today1.getSeconds() + ' ' + amPm;
    return (
        <div className='footer'>
            <p>Copyright &copy; {date} Red Onion</p>
        </div>
    );
};

export default Footer;