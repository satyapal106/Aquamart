import React from 'react'

function Footer() {
    return (
        <>
            {/* ============================ Footer Start ================================== */}
            <footer className="dark-footer skin-dark-footer style-2">
            
                {/*Header ends*/}
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="footer_widget">
                                    <img
                                        src="assets/img/logo.webp"
                                        className="img-footer small mb-2"
                                        alt=""
                                    />

                                    <p className='text-light'>
                                    Water purifiers are essential appliances that ensure that our drinking water is clean and safe. However, even the best water purifiers can break down over time. That's where AQUAMART comes in. AQUAMART is one of the Trusted & Independent Water Purifier Service Provider. We offer Ro Installation, Repair & comprehensive water purifier repair services for all Major brands and models.
                                    </p>
                                    <div className="foot-news-last">
                                        {/* <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email Address"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    type="button"
                                                    className="input-group-text theme-bg b-0 text-light"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7 ml-auto">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">Quick Link</h4>
                                            <ul className="footer-menu">
                                                <li>
                                                    <a href="#">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#">Shop</a>
                                                </li>
                                                <li>
                                                    <a href="#">Service</a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>



                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">Appliances</h4>
                                            <ul className="footer-menu">
                                                <li>
                                                    <a href="#">Water Purifiers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Water Softeners</a>
                                                </li>
                                                <li>
                                                    <a href="#">Kitchen</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Air Purifiers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Vacuum Cleaners</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">Quick Link</h4>
                                            <ul className="footer-menu">
                                                <li>
                                                    <a href="#">Sign In</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sign Up</a>
                                                </li>
                                                <li>
                                                    <a href="#">My Order</a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 text-center">
                                <p className="mb-0">
                                    © 2022  Designd By     {" "}
                                    <a href="https://www.digitalnawab.com/"><i className='fa fa-heart'></i> </a>
                                    Digital Nawab
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ============================ Footer End ================================== */}
        </>
    )
}

export default Footer