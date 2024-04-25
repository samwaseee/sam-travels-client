import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


    const links = <>
        <li><NavLink to="/" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#ff4838" : "white",
                backgroundColor: isActive ? "#162b3241" : "",
                borderBottom: isActive ? "solid #ff4838" : "solid #162b3241",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to="/allTouristSpot" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#ff4838" : "white",
                backgroundColor: isActive ? "#162b3241" : "",
                borderBottom: isActive ? "solid #ff4838" : "solid #162b3241",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>All Tourist Spot</NavLink></li>
        <li>
            {
                // user &&
                <NavLink to="/addSpot" className="rounded-sm" style={({ isActive, isTransitioning }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#ff4838" : "white",
                        backgroundColor: isActive ? "#162b3241" : "",
                        borderBottom: isActive ? "solid #ff4838" : "solid #162b3241",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}>Add Tourists Spot</NavLink>
            }
        </li>
        <li>{
            // user &&
            // <NavLink to="/updateProfile" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            //     return {
            //         fontWeight: isActive ? "bold" : "",
            //         color: isActive ? "#452820" : "",
            //         backgroundColor: isActive ? "white" : "",
            //         borderTop: isActive ? "solid #452820" : "solid white",
            //         viewTransitionName: isTransitioning ? "slide" : "",
            //     };
            // }}>Update Profile</NavLink>
        }</li>
    </>

    return (
        <div className="navbar bg-[#162B32E6]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white text-4xl "> <span className='text-[#ff4838]'>SAM</span> Travels </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="btn btn-outline text-[#ff4838]">Log In</a>
                <a className="btn btn-outline text-[#ff4838]">Register</a>
            </div>
        </div>
    );
};

export default Navbar;