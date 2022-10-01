import React from 'react';
import './Footer.css';
// import { } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fbIcon from '../../../images/svg icons/square-facebook.svg';
import instaIcon from '../../../images/svg icons/square-instagram.svg';
import youtubeIcon from '../../../images/svg icons/square-youtube.svg';
import phoneIcon from '../../../images/svg icons/square-phone-solid.svg';
import locationIcon from '../../../images/svg icons/location-crosshairs-solid.svg';
const Footer = () => {
    const date = new Date().getFullYear();

    // const today1 = new Date();
    // const amPm = today1.getHours() >= 12 ? 'PM' : 'AM';
    // let hours = today1.getHours() % 12;
    // hours = hours ? hours : 12;
    // const time = hours + ':' + today1.getMinutes() + ':' + today1.getSeconds() + ' ' + amPm;
    return (
        <div className='footer'>
            <div className='follow-info'>
                <p>Follow Us On:</p>
                <div className='icons'>
                    <img src={fbIcon} alt="" />
                    <img src={instaIcon} alt="" />
                    <img src={youtubeIcon} alt="" />
                </div>
                <div className='contact-info'>
                    <div className='contact'>
                        <p>Contact:</p>
                        <div className='icons'>
                            <img src={phoneIcon} alt="" />
                            <span><p>01521-333567,0195-7009796</p></span>
                        </div>
                    </div>
                    <div className='address'>
                        <p>Address:</p>
                        <div className='icons'>
                            <img src={locationIcon} alt="" />
                            <span><p>Road:01, Nikunja-2, Khilkhet, Dhaka-1229</p></span>
                        </div>
                    </div>
                </div>
            </div>
            <p>Copyright &copy; {date} Red Onion</p>
        </div>
    );
};

export default Footer;