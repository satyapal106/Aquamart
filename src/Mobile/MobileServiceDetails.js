import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import BassURl from '../Api/Api';
import { addToServiceCartAction } from '../Redux/Action/CartAction';
import './MobileService.css'
import MobileServiceChild from './MobileServiceChild';
import { motion } from 'framer-motion';
import MobileError from './MobileError';



function MobileServiceDetails() {
    const addToServiceCartReducer = useSelector((state) => state?.addToServiceCartReducer);
    const { cartItemService } = addToServiceCartReducer;


    const param = useParams()
    //   service by catergory api

    const [service, setservice] = useState([]);
    useEffect(() => {
        axios
            .get(`${BassURl}api/service-category`)
            .then((res) => {
                setservice(res.data.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);
    // active class
    const [activeId, setActiveId] = useState();

    // service by category 

    const [serviceByCategory, setServiceByCategory] = useState('');
    useEffect(() => {
        axios
            .get(`${BassURl}api/service-by-category/${param.id}`)
            .then((res) => {
                setServiceByCategory(res.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);



    // sub total
    var subtotal = cartItemService?.reduce(
        (acc, item) => acc + item?.service_price * item?.qty,
        0
    );

    const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));


    return (
        <>



            <header className="header">
                <div className="logo-wrap">
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 7.66591L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66591C21.25 4.63591 19.111 2.74991 16.084 2.74991L7.916 2.74991C4.889 2.74991 2.75 4.63591 2.75 7.66591Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.91406 11.9999L16.0861 11.9999" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.6777 15.7479L7.91373 11.9999L11.6777 8.25192" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                    <a href="/">
                        {" "}
                        <img
                            className="fk-logo"
                            src="/assets/img/logo.webp"
                            alt="logo"
                            style={{ width: "35px !important", paddingTop: "10px" }}
                        />
                    </a>
                    <a>
                        {" "}
                        <img
                            className="fk-logo fk-logo-w"
                            src="assets/images/logo/fk-logo-w.png"
                            alt="logo"
                        />
                    </a>
                </div>
                <h1 className="content-color font-sms">{param?.id == service?.id ? (service?.service_title) : ""}</h1>
                <div className="avatar-wrap">
                    <a >
                        <lord-icon
                            className="lord-icon"
                            src="assets/icons/gift.json"
                            trigger="loop"
                            stroke={70}
                            colors="primary:#0baf9a,secondary:#0baf9a"
                        />
                    </a>
                </div>
            </header>

            {/* main content  */}
            <main className="main-wrap shop-page mb-xxl">
                {/* Catagories Tabs Start */}
                <ul
                    className="nav nav-tab nav-pills custom-scroll-hidden"
                    id="pills-tab"
                    role="tablist"
                >

                </ul>
                {/* Catagories Tabs End */}
                {/* Search Box Start */}
                <div className="search-boxs">
                    <div>

                        <i className="search" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0183 18.4851L21.5423 22" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </i>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search here..."
                        />

                    </div>
                    <button
                        className="filter font-md"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#filter"
                        aria-controls="filter"
                    >
                        Filter
                    </button>
                </div>
                {/* Search Box End */}
                {/* Tab Content Start */}
                <div className="tab-content ratio2_1" id="pills-tabContent">
                    {/* Catagories Content Start */}


                </div>
                {/* Tab Content End */}

                {
                    serviceByCategory.code == 200 ? serviceByCategory.data.data?.map((data) => {
                        return (<>  <MobileServiceChild data={data} /></>)
                    }) : (<><MobileError /></>)
                }

                {
                    cartItemService && cartItemService.length > 0 ? (<>

                        <motion.footer initial={{ opacity: 0, y: 400 }}
                            animate={{ opacity: 2, y: 0 }}
                            exit={{ opacity: 0, y: 400 }} className="footer-wrap shops">
                            <ul className="footer footers">
                                <li className="footer-item">
                                    <span className="font-xs">{cartItemService.length} Items</span>{" "}
                                    <span className="font-sm">₹ {subtotal}</span>
                                </li>
                                <li className="footer-item">
                                    {
                                        currentUser ? (<>  <Link to="/mobile-cart" className="font-md">
                                            View Cart{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-chevron-right"
                                            >
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </Link></>) : (<>

                                            <a href="/mobile-login" className="font-md">
                                                View Cart{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-chevron-right"
                                                >
                                                    <polyline points="9 18 15 12 9 6" />
                                                </svg>
                                            </a>



                                        </>)
                                    }

                                </li>
                            </ul>
                        </motion.footer>




                    </>) : null
                }

            </main>




        </>
    )
}

export default MobileServiceDetails