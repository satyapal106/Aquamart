import React from 'react'
import NavbarService from '../Navbar/NavbarService'
import Banner from './Banner'
import './About.css'
import Footer from './Footer'

function About() {
    return (
        <>
            <NavbarService />
            <div
                className="image-cover hero_banner "
                style={{ background: "url(/assets/img/uni-banner.jpg) no-repeat" }}
                data-overlay={4}
            ></div>
            <div className="about ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="about-img-area about-inner-img pr-20">
                                <img
                                    className="inner-about-main-img w-100"
                                    src="/assets/img/roAbout.jpg"
                                    alt="image"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="about-text-area">
                                <div className="default-section-title">
                                    <h6>About Our Aquamart </h6>
                                    <h3>On-Delivery And Best Quality RO Repair Service Center</h3>
                                    <p>
                                        Our On-Delivery and Best Quality RO Repair Service Center is dedicated to ensuring that your water remains pure and safe for your family. We understand the importance of clean, healthy water in your home, which is why we offer a comprehensive range of services to keep your RO (Reverse Osmosis) water purification system in optimal condition.
                                    </p>
                                </div>
                                <div className="about-card">
                                    <i className="fa fa-shipping-fast"></i>
                                    <h4>On-Delivery Services</h4>
                                    <p>Need a new RO system or replacement parts? We provide prompt and reliable delivery services to your doorstep, ensuring you have access to high-quality RO systems and components.
                                    </p>

                                </div>
                                <div className="about-card">
                                    <i className="fa fa-wrench"></i>
                                    <h4>RO Repair</h4>
                                    <p>
                                        s your RO system showing signs of wear and tear? Our expert technicians are just a call away. They will diagnose, repair, and maintain your RO system to restore it to peak performance.
                                    </p>
                                </div>
                                <div className="about-card">
                                    <i className="fa fa-check" />
                                    <h4>Quality Assurance:</h4>
                                    <p>
                                        We pride ourselves on delivering the best quality products and services. Our team of experienced technicians is well-trained and equipped to handle a wide range of RO systems, ensuring your water remains pure and free of contaminants.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service area start */}
            <div className="service bg-fdfdfd ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-middle">
                        <h6>Explore Our Service</h6>
                        <h3>Delivering Excellence in RO Service Work ?</h3>
                        <p className='text-justify'>
                            Our commitment to providing exceptional RO service work sets us apart as your trusted water purification partner. We take pride in ensuring that your RO (Reverse Osmosis) system functions flawlessly to deliver pure and safe drinking water. With a team of skilled technicians and a dedication to quality, our RO service work guarantees optimal performance, water purity, and your peace of mind. Experience excellence in water purification with us.
                        </p>
                    </div>
                    <div className="section-content service-content service-slider-area">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="serviceBox green">
                                    <div className="service-icon">
                                        <span>
                                            <i className="fa fa-wrench" style={{ color: 'rgb(16 124 196)' }} />
                                        </span>
                                    </div>
                                    <h3 className="title">Maintenance and Repairs</h3>
                                    <p className="description" style={{ color: '#000' }}>
                                        RO service work involves regular maintenance and repairs of your water purification system. This includes cleaning, changing filters, and fixing any issues to ensure your RO system operates at its best, providing clean and safe drinking water.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="serviceBox green">
                                    <div className="service-icon">
                                        <span>
                                            <i className="fa fa-refresh" style={{ color: 'rgb(16 124 196)' }} />
                                        </span>
                                    </div>
                                    <h3 className="title">Extended Lifespan</h3>
                                    <p className="description" style={{ color: '#000' }}>
                                        Regular RO service work can extend the lifespan of your water purification system. By addressing any wear and tear or issues promptly, you not only enjoy pure water but also maximize the longevity of your RO system, making it a cost-effective choice in the long run.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="serviceBox green">
                                    <div className="service-icon">
                                        <span>
                                            <i className="fa fa-check" style={{ color: 'rgb(16 124 196)' }} />
                                        </span>
                                    </div>
                                    <h3 className="title">Quality Assurance</h3>
                                    <p className="description" style={{ color: '#000' }}>
                                        Professional RO service work ensures that your water remains free from contaminants. Technicians check the system's components to maintain its high-quality performance, giving you confidence in the purity of the water you consume.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service area end */}
            <Footer />
        </>
    )
}

export default About