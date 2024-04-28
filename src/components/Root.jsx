import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            // console.log('dark');
        } else {
            setTheme('light');
        }
    };


    return (
        <div className={`font-barlow ${theme === 'light' ? 'bg-white' : 'bg-[#162b32] text-white'}`}>
            <Navbar toggleTheme={toggleTheme}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;