import React from 'react';

import ProductCard from '../components/ProductCard';

const Products = () => {
    
    let productsArr = ["Fasteners", "Cutting Tools", "Electrical Supplies",
        "Abrasives", "Pipe Fittings", "Brass Fittings", "Chemicals", "Safety Supplies"];
    
    let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {productsArr.map((product, index) => ( 
                    <ProductCard key={index} img={""} name={product} description={lorem}></ProductCard>
                ))}
            </div>
        </> 
    )
}

export default Products;