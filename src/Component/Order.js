import React from 'react'
import '../Mobile/OrderSuccess.css'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'

function Order() {
    return (
        <>
            {/* <Navbar />
            <div
                className="page-title p-0 h-50"
                style={{
                    background:
                        "#f4f4f4 url(/assets/icons/svg/order.svg)",
                    width: "100%",
                    height: "500px !important",
                    backgroundRepeat: " repeat",
                    backgroundSize: " contain !important"

                }}
                data-overlay={5}
            >

            </div> */}
            <main className="main-wrap order-success-page mb-xxl">
                {/* Banner Section Start */}
                <section className="banner-section">
                    <div className="banner-wrap ">
                        <img src="/assets/icons/svg/order.svg" alt="order-success" className='w-25 p-3' />
                    </div>
                    <div className="content-wrap">
                        <h1 className="font-lg title-color">Thank you for your order!</h1>
                        <p className="font-sm content-color">
                            your order has been placed successfully. your order ID is #548475151
                        </p>
                    </div>
                </section>

                <div className='text-center'>
                <button type="button" class="btn btn-primary "><a href="/" style={{color:"white"}}>continue shopping</a> </button>
                </div>
            </main>
            <Footer />



        </>
    )
}

export default Order