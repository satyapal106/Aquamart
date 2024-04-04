import React from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import './MobileProductDetails.css'
import { motion } from "framer-motion";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import BassURl from '../Api/Api';
import { addToCartAction } from '../Redux/Action/CartAction';
import { useDispatch } from 'react-redux';
import MobileProductChild from './MobileProductChild';
import parse from 'html-react-parser';

function MobileProductDetalis() {
    const dispatch = useDispatch();
    const params = useParams();
    const [showResults, setShowResults] = React.useState(false);
    function onShow() {

        setShowResults(true)

    }
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "100%" },
    }

    // product api 
    const [product, setProduct] = useState('');
    useEffect(() => {
        axios.get(`${BassURl}/api/top-product`).then((response) => {
            setProduct(response.data.data)
        })
    }, []);
    return (
        <>
            <header className="header bg-theme-grey-light">
                <div className="logo-wrap">
                    <Link to="/">
                        <i className=" icli">

                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.75 7.66591L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66591C21.25 4.63591 19.111 2.74991 16.084 2.74991L7.916 2.74991C4.889 2.74991 2.75 4.63591 2.75 7.66591Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.91406 11.9999L16.0861 11.9999" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.6777 15.7479L7.91373 11.9999L11.6777 8.25192" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </i>
                    </Link>
                </div>
                <div className="avatar-wrap">
                    <a
                        href="javascript:void(0)"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#share-grid"
                    >
                        <i data-feather="share-2">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8554 8.12111L10.1916 13.8227L3.56064 9.74147C2.69176 9.20657 2.86787 7.88697 3.8467 7.60287L19.5022 3.04743C20.3925 2.78978 21.2156 3.62446 20.949 4.51889L16.304 20.1582C16.013 21.1369 14.7082 21.3064 14.1809 20.4325L10.1916 13.8227" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </i>
                    </a>
                </div>
            </header>

            {product && product?.map((data) => {
                if (data?.product_url === params?.product_url) {
                    return (<>

                        <main className="main-wrap product-page mb-xxl">
                            {/* Banner Section Start */}
                            <div className="banner-box product-banner">
                                <div className="banner">
                                    <img src={`${BassURl}${data?.product_image}`} alt="veg" />
                                </div>
                            </div>
                            {/* Banner Section End */}
                            {/* Product Section Section Start */}
                            <section className="product-section">
                                <h1 className="font-md">{data?.product_title}</h1>
                                <div className="rating">
                                    <Rating
                                        style={{ color: "orange", width: "" }}
                                        initialRating={2}
                                        emptySymbol="fa fa-star-o fa-1x"
                                        fullSymbol="fa fa-star fa-1x"
                                        readonly={true}
                                    />
                                </div>

                                <div className='price'>
                                    <span>
                                        ₹{data?.product_price}


                                    </span>
                                </div>

                                {/* Select Group Start */}

                                {/* Select Group End */}
                                {/* Product Detail Start */}
                                <div className="product-detail section-p-t">
                                    <div className="product-detail-box">
                                        <h2 className="title-color">Product Details</h2>
                                        <p className="content-color font-base">
                                        {parse(data?.product_description.slice(0, 2000))}
                                        </p>
                                    </div>
                                    {/* Product Detail Accordian Start */}
                                    <div className="accordions" id="accordionsExample">                                                                     
                                        <div className="accordions-item">
                                            <div className="" id="headingThree">
                                                <h2 className="accordions-header" id='headingThree'>
                                                    <button
                                                        className="font-md title-color text-left accordions-button w-100 collapsed"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target="#collapseThree"
                                                        aria-expanded="true"
                                                        aria-controls="collapseThree"
                                                    >
                                                        Features & details

                                                        <i className='float-right'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></i>
                                                    </button>

                                                </h2>
                                            </div>
                                            <div
                                                id="collapseThree"
                                                className="collapse"
                                                aria-labelledby="headingThree"
                                                data-parent="#accordionsExample"
                                            >
                                                <div className="accordions-body">
                                                    <p className="content-color font-base">
                                                    {parse(data?.key_features)}
                                                    </p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Product Detail Accordian End */}
                                </div>
                                {/* Product Detail End */}
                            </section>
                            {/* Product Section Section End */}
                            {/* Product Review Section Start */}
                            <section className="product-review pb-0">
                                <div className="top-content">
                                    <h3 className="title-color">Product Review(15)</h3>
                                    <a

                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#all-review"
                                        className="font-xs"
                                        onClick={onShow}
                                    >
                                        See all
                                    </a>
                                </div>
                                <div className="review-wrap">

                                    <div className="review-box">
                                        <div className="media">
                                            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt="avatar" />
                                            <div className="media-body">
                                                <h4 className="font-sm title-color">Andrea Joanne</h4>
                                                <div className="rating">
                                                    <Rating
                                                        style={{ color: "orange", width: "" }}
                                                        initialRating={2}
                                                        emptySymbol="fa fa-star-o fa-1x"
                                                        fullSymbol="fa fa-star fa-1x"
                                                        readonly={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="font-sm content-color">
                                            It's a really cute skirt! I didn't expect to feel so good in a
                                            polyester material. The print is slightly
                                        </p>
                                    </div>
                                    <div className="review-box">
                                        <div className="media">
                                            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt="avatar" />
                                            <div className="media-body">
                                                <h4 className="font-sm title-color">Andrea Joanne</h4>
                                                <div className="rating">
                                                    <Rating
                                                        style={{ color: "orange", width: "" }}
                                                        initialRating={2}
                                                        emptySymbol="fa fa-star-o fa-1x"
                                                        fullSymbol="fa fa-star fa-1x"
                                                        readonly={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="font-sm content-color">
                                            It's a really cute skirt! I didn't expect to feel so good in a
                                            polyester material. The print is slightly
                                        </p>
                                    </div>
                                </div>
                            </section>
                            {/* Product Review Section End */}

                            {/* Lowest Price 2 Start */}

                            {/* Lowest Price 2 End */}
                        </main>
                        <MobileProductChild product={data} />
                        <motion.div

                            animate={showResults ? "open" : "closed"}
                            variants={variants}



                            className={showResults ? "offcanvas all-review-offcanvas offcanvas-bottom show " : "offcanvas all-review-offcanvas offcanvas-bottom"}

                            tabIndex={-1}
                            id="all-review"
                            aria-labelledby="all-review"
                            data-bs-toggle=""
                            style={{ visibility: showResults ? "visible" : 'hidden' }}
                            aria-hidden="true"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title">All Review</h5>
                                <span data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { setShowResults(false) }}>
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
                                        className="feather feather-x"
                                    >
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </span>
                            </div>
                            <div className="offcanvas-body small">
                                <div className="review-box">
                                    <div className="media">
                                        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt="avatar" />
                                        <div className="media-body">
                                            <h4 className="font-sm title-color">Andrea Joanne</h4>
                                            <div className="rating">
                                                <Rating
                                                    style={{ color: "orange", width: "" }}
                                                    initialRating={2}
                                                    emptySymbol="fa fa-star-o fa-1x"
                                                    fullSymbol="fa fa-star fa-1x"
                                                    readonly={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-sm content-color">
                                        It's a really cute skirt! I didn't expect to feel so good in a
                                        polyester material. The print is slightly
                                    </p>
                                </div>
                                <div className="review-box">
                                    <div className="media">
                                        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt="avatar" />
                                        <div className="media-body">
                                            <h4 className="font-sm title-color">Andrea Joanne</h4>
                                            <div className="rating">
                                                <Rating
                                                    style={{ color: "orange", width: "" }}
                                                    initialRating={2}
                                                    emptySymbol="fa fa-star-o fa-1x"
                                                    fullSymbol="fa fa-star fa-1x"
                                                    readonly={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-sm content-color">
                                        It's a really cute skirt! I didn't expect to feel so good in a
                                        polyester material. The print is slightly
                                    </p>
                                </div>
                                <div className="review-box">
                                    <div className="media">
                                        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt="avatar" />
                                        <div className="media-body">
                                            <h4 className="font-sm title-color">Andrea Joanne</h4>
                                            <div className="rating">
                                                <Rating
                                                    style={{ color: "orange", width: "" }}
                                                    initialRating={2}
                                                    emptySymbol="fa fa-star-o fa-1x"
                                                    fullSymbol="fa fa-star fa-1x"
                                                    readonly={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-sm content-color">
                                        It's a really cute skirt! I didn't expect to feel so good in a
                                        polyester material. The print is slightly
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <div className={showResults ? "modal-backdrop fade show" : "modal-backdrop fade "}
                            style={{ display: showResults ? "block" : 'none' }}

                        />







                    </>)

                }

            })}






            {/* main content start */}



            {/* main content end */}
        </>
    )
}

export default MobileProductDetalis