import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../About/About';
import CustomLink from '../Food/CustomLink/CustomLink';
import './Home.css';
const Home = () => {
    return (
        <div className='home-part1'>
            <div className='home-part2'>
                <h2>Best food waiting for your belly</h2>
            </div>

            {/* <Link to={`${'breakfast'}`}>Breakfast</Link>
            <Link to={`${'launch'}`}>Lunch</Link>
            <Link to={`${'dinner'}`}>Dinner</Link> */}
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