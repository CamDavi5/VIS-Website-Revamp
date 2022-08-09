import React from "react";

const About = () => {
    let aboutOne = "Using our combined experience of over 50 years, we provide our customers with personal service, quality products, environmentally compliant products, and on-time deliveries. We do not limit our customers to a catalog of items; rather we identify the exact product and find it at the best possible price. We provide not only our stock materials, but also those we outsource from a network of vendors to meet specific requirements.";
    let aboutTwo = "We thrive as a rapid-response supplier—getting our customers the products they need fast. We also recognize the importance of great customer service, which is why someone will always be waiting to receive your call and meet your industrial needs in a timely manner.";
    let aboutThree = "We have built a reputation within the wholesale industrial industry and are authorized factory distributors for various national vendors.";

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <img src="./assets/AboutBannerTest.gif" alt="noppers" />
                <h4>{aboutOne}</h4>
                <h4>{aboutTwo}</h4>
                <img style={{width: 400+"px"}}src="./assets/GroupPlaceholder.jpeg" alt="oopsie" />
                <h4>{aboutThree}</h4>
            </div>
        </> 
    )
}

export default About;