import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav id="Nav" className="navbar navbar-expand-lg navbar-light shadow">
                <img className="mr-3" src="./assets/TempLogo.png" width="120" alt="" ></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav justify-content-center">
                        <NavLink to="/" className="nav-item nav-link text-white">Home</NavLink>
                        <NavLink to="/products" className="nav-item nav-link text-white">Our Products</NavLink>
                        <NavLink to="/suppliers" className="nav-item nav-link text-white">Featured Suppliers</NavLink>
                        <NavLink to="/contact-us" className="nav-item nav-link text-white">Contact Us</NavLink>
                        <NavLink to="/about-us" className="nav-item nav-link text-white">About Us</NavLink>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;