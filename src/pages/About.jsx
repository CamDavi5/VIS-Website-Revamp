import React from "react"

const About = () => {
    let aboutOne = "Using our combined experience of over 50 years, we provide our customers with personal service, quality products, environmentally compliant products, and on-time deliveries. We do not limit our customers to a catalog of items; rather we identify the exact product and find it at the best possible price. We provide not only our stock materials, but also those we outsource from a network of vendors to meet specific requirements."
    let aboutTwo = "We thrive as a rapid-response supplier—getting our customers the products they need fast. We also recognize the importance of great customer service, which is why someone will always be waiting to receive your call and meet your industrial needs in a timely manner.";
    let aboutThree = "We have built a reputation within the wholesale industrial industry and are authorized factory distributors for various national vendors.";

    return (
        <>
            <h1>About</h1>
            <h3>{aboutOne}</h3>
            <h3>{aboutTwo}</h3>
            <img src="" alt="No fam" />
            <h3>{aboutThree}</h3>
            
        </> 
    )
}

export default About;