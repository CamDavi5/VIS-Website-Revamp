import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-secondary shadow">
                <span className="navbar-brand text-white">Vulcan Industrial Supply</span>
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