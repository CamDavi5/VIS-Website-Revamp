import React from "react"

const ScrollSpySupplier = ({item}) => {
    
    let thisLi = {supplier: item};

    function getSupplier () {
        alert(thisLi.supplier);
    }

    return (
        <div>
            <li className="suppliersList" onClick={getSupplier}>{item}</li>
        </div>
    );
}

export default ScrollSpySupplier;