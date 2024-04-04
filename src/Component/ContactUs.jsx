import React from 'react'
import Footer from './Footer'
import NavbarService from '../Navbar/NavbarService'
import './Contact.css'

function ContactUs() {
    return (
        <>
            <NavbarService />
            <div
                className="image-cover hero_banner "
                style={{ background: "url(/assets/img/uni-banner.jpg) no-repeat" }}
                data-overlay={4}
            ></div>
            <div className="contact ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-page-form">
                                <h4>Feel Free To Make A Call Request Now</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea
                                                rows={6}
                                                className="form-control"
                                                placeholder="Message"
                                                required=""
                                                defaultValue={""}
                                            />
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-text-area pl-20 pt-30">
                                <h3>We Are Here For Help You! </h3>
                                <p>
                                    Aquamart  Company may specialize in the sale, installation, maintenance, and servicing of RO water purification systems. The tagline implies a customer-centric approach, indicating that the company is dedicated to helping customers with their water purification needs. It conveys a sense of reliability, customer support, and a focus on delivering solutions for clean and safe drinking water.
                                </p>
                                <h5>Opening Hours</h5>
                                <ul>
                                    <li>
                                        <span>Mon - Fri</span> <span>8:00am - 8:00pm</span>
                                    </li>
                                    <li>
                                        <span>Saturday</span> <span>9:00am - 6:00pm</span>
                                    </li>
                                    <li>
                                        <span>Sunday</span> <span>9:00am - 6:00pm</span>
                                    </li>
                                </ul>
                                <h5>Address</h5>
                                <p></p>
                                <h5>Customer Support</h5>
                                <a href="tel:880369525423">(880) 3695 25423</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />




        </>
    )
}

export default ContactUs