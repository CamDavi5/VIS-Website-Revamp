import React from 'react';

import ScrollSpyNav from '../components/ScrollSpyNav';
import ScrollSpySupplier from '../components/ScrollSpySupplier';

const Suppliers = () => {
    let alphabetArr = ["A", "B", "C", "D", "E", "F", 
        "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let supplierArr = ["ALFA CUTTING TOOLS",
        "AUVECO PRODUCTS",
        "BOSS GLOVE",
        "BRIGHTON BEST INTERNATIONAL",
        "CAMEL GRINDING WHEELS",
        "CHAMPION CUTTING TOOLS",
        "COILHOSE PNEUMATICS",
        "CORDOVA SAFETY PRODUCTS",
        "DRILLCO, INC.",
        "DURHAM MANUFACTURING",
        "G.L. HUYETT",
        "GLOBAL ABRASIVE PRODUCTS",
        "IFASTGROUPE",
        "INTERNATIONAL FASTENERS",
        "JET LUBE, INC.",
        "LINDSTROM METRIC",
        "NORD-LOCK WASHER",
        "RADIAN SAFETY PRODUCTS",
        "SAS SAFETY",
        "SMITH COOPER/SHARPE VALVE",
        "STAR STAINLESS SCREW CO.",
        "UNITED ABRASIVES",
        "WARRENSVILLE FILE",
        "WESTERN WIRE",
        "WROUGHT WASHER",
        "XL SCREW CORP"];
    
    function buttonTop () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        let top = document.getElementById("topBtn");
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            top.style.display = "block";
        } else {
            top.style.display = "none";
        }
    }

    return (
        <>
            <nav id="productSpyScroll"className="navbar navbar-light bg-light d-flex justify-content-center mb-3">
                <ul className="nav nav-pills">
                    {alphabetArr.map((char) => (
                        <ScrollSpyNav letter={char}></ScrollSpyNav>
                    ))}
                </ul>
            </nav>
            <div data-spy="scroll" data-target="#productSpyScroll" data-offset="0">
                {alphabetArr.map((char, indexA) => (
                    <div>
                        {supplierArr.some((supplier) => (
                                supplier[0] === char      
                        )) ? <div className="d-flex ml-2">
                                <h5 key={indexA} id={char}>{char}</h5>
                            </div> : null}  
                        
                        <ul>
                            {supplierArr.map((supplier, indexS) => (
                                supplier[0] === char
                                ? <ScrollSpySupplier key={indexS} item={supplier}></ScrollSpySupplier> : null
                            ))}
                        </ul>
                    </div>
                ))}
                
            </div>
            <button onClick={buttonTop} id="topBtn" title="Go to top">Top</button>
        </>

    );
}

export default Suppliers;