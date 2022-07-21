import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav id="Nav" className="navbar navbar-expand-lg shadow mb-4">
                <img className="mr-3" src="./assets/TempLogo.png" width="120" alt="" ></img>
                <div className="navbar-nav justify-content-center">
                    <NavLink to="/" className="nav-item nav-link text-white">Home</NavLink>
                    <NavLink to="/products" className="nav-item nav-link text-white">Our Products</NavLink>
                    <NavLink to="/suppliers" className="nav-item nav-link text-white">Featured Suppliers</NavLink>
                    <NavLink to="/contact-us" className="nav-item nav-link text-white">Contact Us</NavLink>
                </div>
            </nav>
    );
}

export default Navbar;