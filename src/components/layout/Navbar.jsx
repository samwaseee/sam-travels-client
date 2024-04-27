import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignout = () => {
        logOut()
            .then()
            .catch()
    }

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
                user &&
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
            user &&
            <NavLink to={`/myList/${user.email}/${user.displayName}`} className="rounded-sm" style={({ isActive, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#ff4838" : "white",
                    backgroundColor: isActive ? "#162b3241" : "",
                    borderBottom: isActive ? "solid #ff4838" : "solid #162b3241",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}>My List</NavLink>
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
            <div className="navbar-end grid md:flex">
                {
                    user ?
                        <div className="flex gap-3 items-center">
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                <button className=""> <img src={user.photoURL} alt="No image" className="rounded-badge w-10" /> </button>
                            </a>
                            <Tooltip id="my-tooltip" />
                            <button onClick={handleSignout} className="btn btn-outline text-white bg-[#ff4838]">Log Out</button>
                        </div>
                        :
                        <div>
                            <Link to={'/logIn'}><button className="btn btn-ghost mr-5 text-white bg-[#ff4838]">Log In</button></Link>
                            <Link to={'/signUp'}><button className="btn btn-outline text-[#ff4838]">Sign Up</button></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;