import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from 'react-bootstrap/Carousel';
import { Outlet } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import About from '../About/About';
import CustomLink from '../Food/CustomLink/CustomLink';
import './Home.css';
import BG1 from '../../../images/2e123c1ab1e31167e08ac8a52daa377a.png';
import BG2 from '../../../images/basil-blur-close-up-1437267.png';
import BG3 from '../../../images/burrito-chicken-close-up-461198.png';
import { useState } from 'react';
const Home = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, [])
    return (
        <div className='home-part1'>
            {/* <Helmet>
                <title>Home - Red Onion Site</title>
            </Helmet> */}
            <PageTitle title='Home'></PageTitle>
            {/* <div className='home-part2'>
                <h2>Best food waiting for your belly</h2>
            </div> */}
            <div className='carousel'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BG1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Welcome to Red Onion</h2>
                            <p>Heartily welcome you to our online Restaurant.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BG2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Order Food</h2>
                            <p>Order food, from our wide range of meal section.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BG3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Stay With Us</h2>
                            <p>Stay connected with us, through off-line and online both.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* <Link to={`${'breakfast'}`}>Breakfast</Link>
            <Link to={`${'launch'}`}>Lunch</Link>
            <Link to={`${'dinner'}`}>Dinner</Link> */}
            <p className='current-time'>
                Current Time:-  {date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true
                })}
            </p>
            <marquee scrollamount='4'>
                <p className='open-details'>
                    {'Today is '}
                    {date.toLocaleDateString('en-GB', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })}
                    {'. We are open from 8.00am to 10.00pm.'}
                </p>
            </marquee>
            {/* <span class="blink_text">India's Largest portal</span> */}
            {/* <p>
                {'Today is '}
                {date.toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                })}
                {' .We are open from 8.00am to 10.00pm.'}
            </p> */}
            {/* <p className='open-details'>We are open 8.00am to 10.00pm</p> */}
            <h4>Please Select Your Meal:</h4>
            <div className='link-display'>
                <CustomLink to={`/home/${'breakfast'}`}>Breakfast</CustomLink>

                <CustomLink to={`/home/${'lunch'}`}>Lunch</CustomLink>

                <CustomLink to={`/home/${'dinner'}`}>Dinner</CustomLink>
            </div>
            <Outlet />
            <About />
        </div>
    );
};

export default Home;