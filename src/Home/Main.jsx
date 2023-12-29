import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <div className='pb-[100px]'><Navbar/></div>
            <div><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default Main;