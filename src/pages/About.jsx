import React from "react";

const About = () => {
    let aboutOne = "Using our combined experience of over 50 years, we provide our customers with personal service, quality products, environmentally compliant products, and on-time deliveries. We do not limit our customers to a catalog of items; rather we identify the exact product and find it at the best possible price. We provide not only our stock materials, but also those we outsource from a network of vendors to meet specific requirements.";
    let aboutTwo = "We thrive as a rapid-response supplier—getting our customers the products they need fast. We also recognize the importance of great customer service, which is why someone will always be waiting to receive your call and meet your industrial needs in a timely manner.";
    let aboutThree = "We have built a reputation within the wholesale industrial industry and are authorized factory distributors for various national vendors.";

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <img className="mt-4" style={{width: 400+"px"}}src="./assets/GroupPlaceholder.jpeg" alt="oopsie" />
                <h4 className="mb-4">{aboutThree}</h4>
            </div>
            <div className="mb-4 d-flex justify-content-center">
                <div className="pr-2" style={{width: 750+"px"}}>
                    <h4>{aboutOne}</h4>
                </div>
                <div style={{width: 400+"px", height: 200+"px", backgroundColor: "red"}}></div>
            </div>
            <div className="d-flex justify-content-center">
                <div style={{width: 400+"px", height: 200+"px", backgroundColor: "red"}}></div>
                <div className="pl-2" style={{width: 750+"px"}}>
                    <h4>{aboutTwo}</h4>
                </div>
            </div>
        </> 
    )
}

export default About;