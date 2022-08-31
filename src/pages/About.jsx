import React from "react";

const About = () => {
    let aboutOne = "Using our combined experience of over 50 years, we provide our customers with personal service, quality products, environmentally compliant products, and on-time deliveries. We do not limit our customers to a catalog of items; rather we identify the exact product and find it at the best possible price. We provide not only our stock materials, but also those we outsource from a network of vendors to meet specific requirements.";
    let aboutTwo = "We thrive as a rapid-response supplier—getting our customers the products they need fast. We also recognize the importance of great customer service, which is why someone will always be waiting to receive your call and meet your industrial needs in a timely manner.";
    let aboutThree = "We have built a reputation within the wholesale industrial industry and are authorized factory distributors for various national vendors.";

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="mt-4"style={{width: 800+"px", height: 200+"px", backgroundColor: "red", maxWidth: 100+"%", textAlign: "center"}}>IMAGE</div>
                <h4 className="mb-4">{aboutThree}</h4>
            </div>
                <div className="aboutContent" style={{backgroundColor: "rgb(75, 77, 71, 0.85)"}}>
                        <h4 style={{color: "white", maxWidth: 720+"px"}}>{aboutOne}</h4>
                        <div style={{width: 400+"px", height: 200+"px", backgroundColor: "red", maxWidth: 100+"%", textAlign: "center"}}>IMAGE</div>
                </div>
            <div className="aboutContent">
                <div className="leftRoundCorners aboutImageSizing">
                    <div style={{width: 400+"px", height: 200+"px", backgroundColor: "red", maxWidth: 100+"%", textAlign: "center"}}>IMAGE</div>
                </div>
                <div className="rightRoundCorners" style={{backgroundColor: "rgb(75, 77, 71, 0.85)"}}>
                    <div className="pr-4">
                        <h4 style={{color: "white", maxWidth: 750+"px"}}>{aboutTwo}</h4>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default About;