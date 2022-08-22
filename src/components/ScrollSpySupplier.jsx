import React from "react";
import { useState } from "react"; 
import SupplierPopup from "../components/SupplierPopup";

const ScrollSpySupplier = ({name, image, description}) => {
    
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <li className="suppliersList" onClick={() => setButtonPopup(true)}>{name}</li>
            <SupplierPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 className="mt-4">{name}</h3>
                <img src={image} alt="image should be here" />
                <p>{description}</p>
            </SupplierPopup>
        </div>
    );
}

export default ScrollSpySupplier;