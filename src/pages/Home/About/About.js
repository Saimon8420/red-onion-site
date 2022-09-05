import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHome, faClock } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import facilities1 from '../../../images/facilities1.png';
import facilities2 from '../../../images/facilities2.png';
import facilities3 from '../../../images/facilities3.png';
const About = () => {
    return (
        <div className='about'>
            <div className='display-about'>
                <h3>Why you choose us</h3>
                <p>We provide hygienic and testy foods. Our motto is to satisfied our beloved customer. Besides all these, we have nice and environment friendly dining facilities, as well as home delivery at minimum time and with minimum delivery cost.</p>
            </div>
            <div className='display-facilities'>
                <div className="facilities">
                    <img src={facilities1} alt="" />
                    <h3><FontAwesomeIcon style={{ color: 'red' }} icon={faTruck} /> Fast Delivery</h3>
                    <p>Our promise is to deliver as soon as possible at your doorstep.</p>
                </div>
                <div className="facilities">
                    <img src={facilities2} alt="" />
                    <h3><FontAwesomeIcon style={{ color: 'red' }} icon={faClock} /> A Good Auto Responder</h3>
                    <p>We have quick response team to communicate with our customer.</p>
                </div>
                <div className="facilities">
                    <img src={facilities3} alt="" />
                    <h3><FontAwesomeIcon style={{ color: 'red' }} icon={faHome} /> Home Delivery</h3>
                    <p>We provide fast and safe home delivery at any location within a short time.</p>
                </div>
            </div>
        </div>
    );
};

export default About;