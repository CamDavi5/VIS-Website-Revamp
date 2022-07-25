import React from 'react';

import ContactCard from "../components/ContactCard"

const Contact = () => {
    return (
        <>
            <h3 className="d-flex justify-content-center mt-4">President</h3>
            <div className="d-flex justify-content-center mb-5">
                <ContactCard image={""} name={"John Rutledge"} email={""} cell={""}/>
            </div>
            <h3 className="d-flex justify-content-center">Sales</h3>
            <div className="d-flex justify-content-center mb-5">
                <div className="mr-5">
                    <ContactCard className="mr-3" image={""} name={"Tony Metcalf"} email={""} cell={"205-369-7158"}/>    
                </div>
                <ContactCard image={""} name={"Corey Calvert"} email={""} cell={"205-296-7381"}/>
                <div className="ml-5">
                    <ContactCard image={""} name={"Nick Parker"} email={""} cell={"205-542-0240"}/>
                </div>
            </div>
            <h3 className="d-flex justify-content-center">Office AP/AR</h3>
            <div className="d-flex justify-content-center mb-4">
                <ContactCard image={""} name={"Tina Layne"} email={"sales@vulcanindustrial.com"} cell={"205-849-7770"}/>
            </div>
        </>

    )
}

export default Contact;