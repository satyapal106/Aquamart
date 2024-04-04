import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BestofferSlider from '../Slider/BestofferSlider';


import BassURl from '../Api/Api';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


function Content() {

    const [service, setService] = useState([]);
    const [appliances, setAppliances] = useState([]);
    useEffect(() => {
        axios.get(`${BassURl}api/appliances-shop`).then((response) => {
            setAppliances(response.data.data)
        })

    }, []);
    // console.log(banner)
    const [Bestofferservices, setbestofferservices] = useState([]);
    useEffect(() => {
        axios.get(`${BassURl}api/offers`).then((response) => {
            if (response.data.code == 200) {
                setbestofferservices(response.data.data);
            } else {
                console.log("Offer Not Found");
            }
        });
    }, []);

    const options = {

        responsiveClass: true,
        dots: true,
        nav: true,

        navText: ["<img src='/assets/img/left-arrow.webp' class='nav-button  owl-prev'/>", " <img src='/assets/img/right-arrow.webp' class='nav-button owl-next'/>"],
        loop: true,
        autoplay: false,
        // autoWidth:true, 

        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            },
        },
    };




    return (
        <>

            {/* ============================ Property Type Start ================================== */}
            <section className="gray-simple min">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="sec-heading center">
                                <h2>Our Appliances</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {appliances?.map((item, index) => {
                            return (<>
                                <div className="col-lg col-md-4">
                                    {/* Single Category */}
                                    <div className="property_cats_boxs">
                                        <a href={`/appliances/${item.category_url}`} className="category-box">
                                            <div className="property_category_short">
                                                <div className="category-icon clip-1">
                                                    <img src={BassURl + item?.image} alt="" className='appliances-img' />
                                                </div>
                                                <div className="property_category_expand property_category_short-text">
                                                    <h4>{item?.category_title}</h4>

                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </>)
                        })
                        }
                    </div>
                </div>
            </section>
            {/* ============================ Property Type End ================================== */}
            {/* ============================ Latest Property For Sale Start ================================== */}
            {
             Bestofferservices && Bestofferservices?.length != 0 ? (<>
                    <section className="gray p-0" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-md-10 text-center">
                                    <div className="sec-heading center mb-4">
                                        <h2>Best Offer</h2>

                                    </div>
                                </div>
                            </div>
                            <BestofferSlider />
                        </div>
                    </section>
                </>) : ''

            }
            {/* ============================ Latest Property For Sale End ================================== */}
            <div className="shadow-lg p-3  bg-white rounded">

                <div className=' shadow p-3  bg-white rounded'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">


                            <div className="carousel-item active" >
                                <img className="d-block w-100" src="/assets/img/ro.webp" alt="First slide" style={{ height: "230px", marginTop: "30px !important" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content