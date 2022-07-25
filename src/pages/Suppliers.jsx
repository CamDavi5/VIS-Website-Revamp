import React from 'react';

import ScrollSpyNav from '../components/ScrollSpyNav';
import ScrollSpySupplier from '../components/ScrollSpySupplier';

const Suppliers = () => {
    let alphabetArr = ["A", "B", "C", "D", "E", "F", 
        "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    
    
    return (
        <>
            <nav id="productSpyScroll"className="navbar navbar-light bg-light d-flex justify-content-center">
                <ul className="nav nav-pills">
                    {alphabetArr.map((char) => (
                        <ScrollSpyNav letter={char}></ScrollSpyNav>
                    ))}
                </ul>
            </nav>
            <div data-spy="scroll" data-target="#productSpyScroll" data-offset="0">
                {alphabetArr.map((char) => (
                    <>
                        <div className="d-flex">
                            <h5 id={char}>{char}</h5>
                            <button className="ml-3">To Top</button>
                        </div>
                        <ul>
                            {alphabetArr.map((char) => (
                                <h6>Poggers</h6>
                            ))}
                        </ul>
                    </>
                ))}
                
            </div>
        </>

    )
}

export default Suppliers;