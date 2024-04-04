import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BassURl from '../Api/Api';
import Navbar from '../Navbar/Navbar';
import { Scrollbars } from 'react-custom-scrollbars';
import parse from 'html-react-parser';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, Button } from 'react-bootstrap';

// or less ideally
// import { Button } from 'react-bootstrap';


function PageAppliances() {
    const params = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        axios.get(`${BassURl}/web-api/all-shop-category`).then((response) => {
            setService(response.data.data);
        })
    }, []);

    // console.log/(service)




    const [appliancesProdduct, setAppliancesProduct] = useState(null)


    useEffect(() => {
        axios.get(`${BassURl}/api/top-product`).then((response) => {
            setAppliancesProduct(response.data.data)
        })
    });

    // make modal state start
    // const [show, setShow] = useState(False);
    // const handleClose = () => setShow(False);
    // const handleShow = () => setShow(True);
    // make modal state end


    const options = {
        replace: (domNode) => {
            if (domNode.attribs && domNode.attribs.class === "remove") {
                return <></>;
            }
        },
    };
    return (
        <>
            <Navbar />

            <div
                className="image-cover hero_banner "
                style={{ background: "url(/assets/img/banner/banner.webp) no-repeat" }}
                data-overlay={4}
            >
                <div className="container">
                    {/* Type */}

                    <div className="simple-search-wrap search-top-wrap  ">
                        <div className="hero_search-2">
                            <div className="search_hero_wrapping">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================ All Property ================================== */}
            <section className="gray pt-4">
                <div className="container">
                    <div className="row m-0">
                        <div className="short_wraping">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-6 col-sm-12  col-sm-6">
                                    <ul className="shorting_grid">
                                        <li className="list-inline-item">

                                            <div className="dropdown">
                                                <a className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: "pointer" }}>
                                                    <span />
                                                    ₹
                                                    Price Filter
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{
                                                    border: "none",
                                                    padding: "15px",
                                                    background: "#ffffff",
                                                    borderRadius: "0.5rem",
                                                    boxShadow: "0px 0px 42px 0px rgb(32 32 32 / 15%)",
                                                }}>
                                                    <a className="dropdown-item" >High to Low</a>
                                                    <a className="dropdown-item" href="#"> Low to Highh</a>                                                   
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">

                                            <div className="dropdown">
                                                <a className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: "pointer" }}>
                                                    <span />
                                                    <i className="fa fa-star" aria-hidden="true" />
                                                    Rating
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{
                                                    border: "none",
                                                    padding: "15px",
                                                    background: "#ffffff",
                                                    borderRadius: "0.5rem",
                                                    boxShadow: "0px 0px 42px 0px rgb(32 32 32 / 15%)",
                                                }}>
                                                    <div className="_rate_stio">
                                                        <a className="dropdown-item" href="#">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" /></a>
                                                    </div>
                                                    <div className="_rate_stio">
                                                        <a className="dropdown-item" href="#"> <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </div>
                                                    <div className="_rate_stio">
                                                        <a className="dropdown-item" href="#"> <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </div>
                                                    <div className="_rate_stio">
                                                        <a className="dropdown-item" href="#"> <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </a>
                                                    </div>
                                                    <div className="_rate_stio">
                                                        <a className="dropdown-item" href="#"> <i className="fa fa-star" />
                                                        </a>
                                                    </div>
                                                </div>



                                            </div>




                                        </li>


                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3 elco_bor col-sm-12">
                                    <div className="shorting_pagination">
                                      
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 order-lg-3 order-md-2 col-sm-6">
                                    <div className="shorting-right">
                                        <label>Filter</label>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* property Sidebar */}
                        <div className="col-lg-8 col-md-12 col-sm-12">

                            <div className="row justify-content-center mycontent-left">
                                {/* Single Property */}

                                <Scrollbars style={{ height: '550px', width: "800px", scrollBehavior: "none" }}>
                                    {
                                        appliancesProdduct?.map((data, index) => {
                                            return (<><div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
                                                <div className="property-listing list_view">
                                                    <div className="listing-img-wrapper">
                                                        {/* <div className="_exlio_125">For Sale</div> */}
                                                        <div className="like_unlike_prt">
                                                            <label className="toggler toggler-danger">
                                                                <input type="checkbox" />
                                                                <i className="fa fa-heart" />
                                                            </label>
                                                        </div>
                                                        <div className="list-img-slide">
                                                            <div className="click">
                                                                <div>
                                                                    <a href="single-property-1.html">
                                                                        <img
                                                                            src={BassURl + data?.product_image}
                                                                            className="img-fluid mx-auto icon_image_width"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list_view_flex">
                                                        <div className="listing-detail-wrapper mt-1">
                                                            <div className="listing-short-detail-wrap">
                                                                <div className="_card_list_flex mb-2">
                                                                    <div className="_card_flex_01">
                                                                        <span className="_list_blickes _netork">
                                                                            6 litre
                                                                        </span>
                                                                        {/* <span className="_list_blickes types">Family</span> */}
                                                                    </div>
                                                                    <div className="_card_flex_last">
                                                                        <h6 className="listing-card-info-price mb-0">
                                                                            ₹ {data?.product_price.toString()
                                                                                .replace(
                                                                                    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                                                                    ","
                                                                                )}
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="_card_list_flex">
                                                                    <div className="_card_flex_01">
                                                                        <h4 className="listing-name verified">
                                                                            <a
                                                                                href="single-property-1.html"
                                                                                className="prt-link-detail"
                                                                            >
                                                                                {data?.product_title}
                                                                            </a>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="_card_list_flex">
                                                                    <div className="_card_flex_01">
                                                                        <p className="listing-name verified">
                                                                            {parse(data?.product_description, options)}

                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="footer-first">
                                                            <div className="foot-rates">
                                                                <span className="elio_rate good">4.2</span>
                                                                <div className="_rate_stio">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="listing-detail-footer pl-0">

                                                            
                                                            <div className="footer-flex">
                                                            <a
                                                               
                                                                data-toggle="modal"
                                                                data-target="#availability"
                                                                className="prt-view theme-bg"
                                                            >
                                                                BUY NOW
                                                            </a>
                                                        </div>

                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div></>)
                                        })
                                    }

                                </Scrollbars>


                            </div>

                        </div>





                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="page-sidebar p-0">

                                <div className="collapse" id="fltbox">
                                    {/* Find New Property */}
                                    <div className="sidebar-widgets p-4">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Neighborhood"
                                                />
                                                <i className="ti-search" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Location"
                                                />
                                                <i className="ti-location-pin" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="simple-input">
                                                <select id="ptype" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value={1}>Apartment</option>
                                                    <option value={2}>Condo</option>
                                                    <option value={3}>Family</option>
                                                    <option value={4}>Houses</option>
                                                    <option value={5}>Villa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="simple-input">
                                                <select id="status" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value={1}>Apartment</option>
                                                    <option value={2}>Condo</option>
                                                    <option value={3}>Houses</option>
                                                    <option value={4}>Villa</option>
                                                    <option value={5}>Land</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="simple-input">
                                                <select id="price" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value={1}>Less Then $1000</option>
                                                    <option value={2}>$1000 - $2000</option>
                                                    <option value={3}>$2000 - $3000</option>
                                                    <option value={4}>$3000 - $4000</option>
                                                    <option value={5}>Above $5000</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="simple-input">
                                                <select id="bedrooms" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="simple-input">
                                                <select id="bathrooms" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="simple-input">
                                                <select id="garage" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value={1}>Any Type</option>
                                                    <option value={2}>Yes</option>
                                                    <option value={3}>No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="simple-input">
                                                <select id="built" className="form-control">
                                                    <option value="">&nbsp;</option>
                                                    <option value={1}>2010</option>
                                                    <option value={2}>2011</option>
                                                    <option value={3}>2012</option>
                                                    <option value={4}>2013</option>
                                                    <option value={5}>2014</option>
                                                    <option value={6}>2015</option>
                                                    <option value={7}>2016</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Min Area"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <div className="simple-input">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Max Area"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
        <button className="btn theme-bg rounded full-width">
            Find New Home
        </button>
    </div>
</div> */}
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar End */}
                        </div>




                    </div>

                </div>
            </section>


            {/* ============================ All Property ================================== */}



        </>





    )
}

export default PageAppliances