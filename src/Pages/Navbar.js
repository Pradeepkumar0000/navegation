
import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



// make a simple navbar with few menu items
const Navbar = () => {
    return (
        <nav className='navbar'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        </nav>
    );
    }

export default Navbar;







