import React from 'react';

import ProductCard from '../components/ProductCard';

const Products = () => {
    
    let productsArr = ["Fasteners", "Cutting Tools", "Electrical Supplies",
        "Abrasives", "Pipe Fittings", "Brass Fittings", "Chemicals", "Safety Supplies"];
    
    let productImgArr = [
        "./assets/FastenersTest.jpg",
        "./assets/CuttingToolsTest.jpg",
        "./assets/ElectricalSuppliesTest.jpg",
        "./assets/AbrasivesTest.jpg",
        "./assets/PipeFittingsTest.jpg",
        "./assets/BrassFittingsTest.jpg",
        "./assets/ChemicalsTest.jpg",
        "./assets/SafetySuppliesTest.jpg"];

    let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {productsArr.map((product, index) => ( 
                    <ProductCard key={index} img={productImgArr[index]} name={product} description={lorem}></ProductCard>
                ))}
            </div>
        </> 
    )
}

export default Products;