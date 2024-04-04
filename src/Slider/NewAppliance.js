import React, { useEffect, useState } from 'react';
import axios from "axios";
import BassURl from "../Api/Api";
// import { useStateValue } from "../Context/StateProvider";
// import { actionType } from "../Context/reducer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function NewAppliance() {



// / api call
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [flag, setFlag] = useState(1);
useEffect(() => {
const getData = async () => {
try {
const response = await axios.get(
`https://dash.aquamart.co.in/web-api/all-shop-category`
);
setProduct(response.data.data);
setError(null);
} catch (err) {
setError(err.message);
setProduct(null);
} finally {
setLoading(false);
}
};
getData();
}, []);

const options = {
margin: 40,
responsiveClass: true,
dots: true,
nav: true,

navText: [
"<img src='/assets/img/left-arrow.webp' class='nav-button  owl-prev'/>",
" <img src='/assets/img/right-arrow.webp' class='nav-button owl-next'/>",
],
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
<section >
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-7 col-md-10 text-center">
        <div className="sec-heading center mb-4">
            <h2>Our Appliances</h2>

        </div>
    </div>
</div>
<div className="row justify-content-center">

    {product && (<OwlCarousel

        className="slider-items owl-theme owl-carousel  "
        {...options}
    >


        {
            product?.map((itemsPro, index) => {
                return (<>
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className="property-listing property-2 productHeight" >
                            <div className="listing-img-wrapper">

                                <div className="list-img-slide">
                                    <div className="click">
                                        <div>
                                            <a href="single-property-1.html">
                                                <img
                                                    src={BassURl + itemsPro?.image}
                                                    className="img-fluid mx-auto"
                                                    alt=""
                                                />
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="listing-detail-wrapper">
                                <div className="listing-short-detail-wrap">

                                    <div className="_card_list_flex">
                                        <div className="_card_flex_01">
                                            <h3 className="listing-name verified">
                                                <a href="single-property-1.html" className="prt-link-detail" style={{
                                                    textTransform: "capitalize",
                                                    textAlign: "center",
                                                    fontize: "25px !important"



                                                }}>
                                                    {itemsPro?.category_title}
                                                </a>
                                            </h3>
                                        </div>
                                        <br />

                                    </div>
                                    {/* <div className="footer-flex">
                                        <a href={`/appliances/${itemsPro.category_url}`} className="prt-view" >


                                            &nbsp; View Details
                                        </a>
                                    </div> */}


                                    <div className="usertr">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <div className="user-infotr">
                                            <a href={`/appliances/${itemsPro.category_url}`}>View </a>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* <div className="listing-detail-footer">
                                <div className="footer-first">

                                    <h6 className="listing-card-info-price mb-0">
                                        ₹ &nbsp;
                                        {itemsPro?.product_price
                                            .toString()
                                            .replace(
                                                /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
                                    </h6>
                                </div>
                                <div className="footer-flex">
                                    <a className="prt-view">
                                        <i className="fa fa-shopping-cart" aria-hidden="true" />

                                        &nbsp; Add to cart
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </>)
            })
        }

    </OwlCarousel>)}
























</div>
</div>
</section>
</>
)
}

export default NewAppliance