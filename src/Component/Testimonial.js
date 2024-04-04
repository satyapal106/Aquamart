
import axios from 'axios';
import BassURl from '../Api/Api';
import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "react-elastic-carousel";


function Testimonial() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
       { autoplay: true},
    ];

    const addItem = () => {
        const nextItem = Math.max(1, testimonial.length + 1);
        setTestimonial([...testimonial, nextItem]);
    };

    const removeItem = () => {
        const endRange = Math.max(0, testimonial.length - 1);
        setTestimonial(testimonial.slice(0, endRange));
    };
    // api call
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        axios.get(`${BassURl}api/all-testimonial`).then((response) => {
            setTestimonial(response.data.data)
        })
    }, []);

    const options = {
        margin: 40,
        responsiveClass: true,
        dots: true,
        nav: true,

        navText: [
            "<img src='/assets/img/left-arrow.webp' class='nav-buttons  owl-prev'/>",
            " <img src='/assets/img/right-arrow.webp' class='nav-buttons owl-next'/>",
        ],
        loop: true,
        autoplay: true,
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
            <section className="light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center">
                                <h2>Good Reviews By Clients</h2>

                            </div>
                        </div>
                    </div>

                 



                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="item-slide space">


                                <Carousel breakPoints={breakPoints}>


                                    {
                                        testimonial?.map((data, index) => {
                                            return (<>

                                                <div className="single_items items" key={index}>
                                                    <div className="_testimonial_wrios">
                                                        <div className="_testimonial_flex">
                                                            <div className="_testimonial_flex_first">
                                                                <div className="_tsl_flex_thumb">
                                                                    <img
                                                                        src={BassURl + data?.image}
                                                                        className="img-fluid"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="_tsl_flex_capst">
                                                                    <h5>{data?.name}</h5>
                                                                    <div className="_ovr_posts">
                                                                        <span>{data?.designation}</span>
                                                                    </div>
                                                                    <div className="_ovr_rates">
                                                                        <span>
                                                                            <i className="fa fa-star" />
                                                                        </span>
                                                                        {data?.ratting}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="_testimonial_flex_first_last">
                                                                        <div className="_tsl_flex_thumb">
                                                                            <img
                                                                                src="assets/img/c-1.png"
                                                                                className="img-fluid"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div> */}
                                                        </div>
                                                        <div className="facts-detail">
                                                            <p>
                                                                {data?.message}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>




                                            </>)
                                        })
                                    }





                                </Carousel>






                               












                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial