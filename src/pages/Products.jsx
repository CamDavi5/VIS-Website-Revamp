import React from 'react';

import ProductCard from '../components/ProductCard';

const Products = () => {
    
    let productsArr = ["Fasteners", "Cutting Tools", "Electrical Supplies",
        "Abrasives", "Pipe Fittings", "Brass Fittings", "Chemicals", "Safety Supplies"];
    
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {productsArr.map((product) => ( 
                    <ProductCard img={""} name={product} description={"Honestly idk"}></ProductCard>
                ))}
            </div>
        </> 
    )
}

export default Products;