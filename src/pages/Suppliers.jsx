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
    
    let brightonDesc = "Stocking over 60,000SKUs of industrial and commercial fasteners"

    function buttonTop () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction () {
        let currentURL = window.location.href;
        if (currentURL.includes("/suppliers")) {
            let top = document.getElementById("topBtn");
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                top.style.display = "block";
            } else {
                top.style.display = "none";
            }
        }
        
    }

    function disableNav (invalidHref) {
        let item = document.querySelector("#"+invalidHref);
        item.style.color = "grey";
    }

    return (
        <>
            <nav id="productSpyScroll"className="navbar navbar-light bg-light d-flex justify-content-center mb-1">
                <ul className="nav nav-pills">
                    {alphabetArr.map((char) => (
                        <ScrollSpyNav key={char} letter={char}></ScrollSpyNav>
                    ))}
                </ul>
            </nav>
            <div className="d-flex justify-content-center mb-3">
                <h5>Click any of the suppliers below to learn more!</h5>
            </div>
            <div data-spy="scroll" data-target="#productSpyScroll" data-offset="0">
                {alphabetArr.map((char, indexA) => (
                    <div key={"ul"+indexA.toString()}>
                        {supplierArr.some((supplier) => (
                                supplier[0] === char      
                        )) ? <div className="d-flex ml-4">
                                <h5 id={char}>{char}</h5>
                            </div> : null /*disableNav should go here*/}
                        
                        <ul>
                            {supplierArr.map((supplier, indexS) => (
                                supplier[0] === char
                                ? <ScrollSpySupplier key={"li"+indexS.toString()} name={supplier} image={"./assets/TempSupplierLogo.jpg"} description={"Supplier description goes here"}></ScrollSpySupplier> : null
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