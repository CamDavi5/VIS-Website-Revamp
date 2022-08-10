import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    
    function buttonTop () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    return (
        <>
            <div className="d-flex flex-column align-items-center mt-4">
                <img id="outsideStore" src="./assets/GoogleEarthPic.png" width="700px" alt="" />
                <div className="mt-2">
                    <h1 id="welcomeMsg" className="text-center">Welcome to Vulcan Industrial Supply</h1>
                    <hr></hr>
                    <h5 className="text-center">3110 Pinson Valley Pkwy, Birmingham, AL 35217 | 205-849-7770</h5>
                    <h5 className="text-center">Hours: 8am-4:30pm, Monday-Thursday</h5>
                    <h5 className="text-center mr-5 ml-1">8am-4:00pm, Friday</h5>
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                    <h3 className="homeMotto">"Our goal is to provide our customers with a single vendor for a variety of commodities.</h3>
                    <h3 className="homeMotto"> We strive to meet all of your industrial maintenance needs."</h3>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide mt-4" data-ride="carousel" data-interval="10000"> 
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <NavLink to="/products">
                                <a onClick={buttonTop} href="">
                                    <img className="d-block w-100" src="./assets/TempLogo.png" alt="First slide"/>
                                </a>
                            </NavLink>
                            <div className="carousel-caption">
                                <h5 className="carouselMsg">View Our Products</h5>
                                <h6 className="carouselMsg">We have a variety of tools and parts to meet your needs!</h6>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <NavLink to="/suppliers">
                                <a onClick={buttonTop} href="">
                                    <img className="d-block w-100" src="./assets/TempLogo.png" alt="Second slide"/>
                                </a>
                            </NavLink>
                            <div className="carousel-caption">
                                <h5 className="carouselMsg">Check Our Suppliers</h5>
                                <h6 className="carouselMsg">Learn about suppliers we trust</h6>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <NavLink to="/contact-us">
                                <a onClick={buttonTop} href="">
                                    <img className="d-block w-100" src="./assets/TempLogo.png" alt="Third slide"/>
                                </a>
                            </NavLink>
                            <div className="carousel-caption">
                                <h5 className="carouselMsg">Contact Our Team</h5>
                                <h6 className="carouselMsg">Easy service via cell and email</h6>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>

    )
}

export default Home;