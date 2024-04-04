import React from 'react'
import { useState } from 'react';
import FooterMenu from './FooterMenu';
import ProfileSlidebar from './ProfileSlidebar';
import './MobileError.css'

function MobileError() {
    const [show, setShow] = useState(false)
    function onShow() {
        setShow(true)

    }
    const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    const googleUser = JSON.parse(window.localStorage.getItem("googleUser"));
    return (
        <>

         
           

            <main className="main-wrap error-404 mb-xxl">
                {/* Banner Start */}
                <div className="banner-box">
                    <img src="/assets/404.png" className="img-fluid" alt={404} />
                </div>
                {/* Banner End */}
                {/* Error Section Start */}
                <section className="error mb-large">
                    <h2 className="font-lg">Data Not Found</h2>
                    <p className="content-color font-md">
                        We are sorry but the page you are looking there wast no data Please check back later or search again.
                    </p>
                    <a href="/" className="btn-solid">
                        Back to Home
                    </a>
                </section>
                {/* Error Section End */}
            </main>



            <FooterMenu />


        </>
    )
}

export default MobileError