import React from "react";
import { useState } from "react"; 
import SupplierPopup from "../components/SupplierPopup";

const ScrollSpySupplier = ({name, img, description}) => {
    
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <li className="suppliersList" onClick={() => setButtonPopup(true)}>{name}</li>
            <SupplierPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3 className="pt-5" style={{textAlign: "center"}}>{name}</h3>
                    <img src={img} alt="image should be here" style={{maxWidth: 60+"%"}}/>
                <div style={{width: 310+"px"}}>
                    <p>{description}</p>
                </div>
            </SupplierPopup>
        </div>
    );
}

export default ScrollSpySupplier;