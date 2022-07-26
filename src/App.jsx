import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Suppliers from './pages/Suppliers'
import Contact from './pages/Contact';
import About from './pages/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/suppliers" element={<Suppliers />}></Route>
                <Route path="/contact-us" element={<Contact />}></Route>
                <Route path="/about-us" element={<About />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;