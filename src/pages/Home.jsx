import React from 'react';

const Home = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center ">
                <img id="outsideStore" src="./assets/GoogleEarthPic.png" width="700px" alt="" />
                <div className="mt-2">
                    <h1 id="welcomeMsg" className="text-center">Welcome to Vulcan Industrial Supply</h1>
                    <hr></hr>
                    <h5 className="text-center">3110 Pinson Valley Pkwy, Birmingham, AL 35217 | 205-849-7770</h5>
                    <h5 className="text-center">Hours: 8am-4:30pm, Monday-Thursday</h5>
                    <h5 className="text-center mr-5 ml-1">8am-4:00pm, Friday</h5>
                </div>
            </div>
        </>

    )
}

export default Home;