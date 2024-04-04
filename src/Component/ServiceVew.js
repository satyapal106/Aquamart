import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarService from "../Navbar/NavbarService";
import BassURl from "../Api/Api";
import Footer from "./Footer";

import TopProduct from "../Slider/NewTopProduct";
import { useParams } from "react-router-dom";
import NewTopProduct from "../Slider/NewTopProduct";
import { isMobile } from "react-device-detect";

import Navbar from "../Navbar/Navbar";
import CartItem from "../Cart/CartItem";
import CartService from "../Cart/CartService";
import ProductAddButton from "./ProductAddButton";
// import ServiceAdd from './ServiceAdd';
import parse from "html-react-parser";
function ServiceVew() {
    const params = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        axios
            .get(`${BassURl}/web-api/all-service-category`)
            .then((response) => {
                setService(response.data.data);
            });
    }, []);

    // api call
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        axios.get(`${BassURl}web-api/all-testimonial`).then((response) => {
            setTestimonial(response.data.data);
        });
    }, []);
    // const [{ user, cartShow, cartShowToast, cartItems }, dispatch] =
    //     useStateValue();
    const [items, setItems] = useState([]);

    // api call
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`${BassURl}/api/top-product`).then((response) => {
            setProduct(response.data.data);
        });
    }, []);

    // const addtocart = (dt) => {
    //     dispatch({
    //         type: actionType.SET_CARTITEMS,
    //         cartItems: items,
    //     });

    //     localStorage.setItem("cartItems", JSON.stringify(items));
    // };

    // useEffect(() => {
    //     addtocart();
    // }, [items]);
    return (
        <>
            {product?.map((data, index) => {
                if (data?.product_url === params?.product_url) {
                    return (
                        <>
                            <Navbar />
                            <div
                                className="image-cover hero_banner "
                                style={{
                                    background:
                                        "url(/assets/img/banner/banner.webp) no-repeat",
                                }}
                                data-overlay={4}
                                key={index}
                            ></div>
                            <section
                                className="inner-section"
                                style={{ background: "#80808017" }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="details-gallery">
                                                <ul className="details-preview">
                                                    <li>
                                                        <img
                                                            src={
                                                                BassURl +
                                                                data?.product_image
                                                            }
                                                            alt="product"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="details-content">
                                                <h3 className="details-name">
                                                    <a href="#">
                                                        {data?.product_title}
                                                    </a>
                                                </h3>
                                                <div className="details-meta">
                                                    <p>
                                                        SKU:<span>1234567</span>
                                                    </p>
                                                    <p>
                                                        BRAND ID:
                                                        <a href="#">
                                                            {data?.brand_id}
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="details-rating">
                                                    <i className="active icofont-star" />
                                                    <i className="active icofont-star" />
                                                    <i className="active icofont-star" />
                                                    <i className="active icofont-star" />
                                                    <i className="icofont-star" />
                                                    <a href="#">(3 reviews)</a>
                                                </div>
                                                <h3 className="details-price">
                                                    <span>
                                                        ₹ {data?.product_price}
                                                        <small></small>
                                                    </span>
                                                </h3>
                                                <p className="details-desc">
                                                    <ul
                                                        style={{
                                                            listStyle: "disc"
                                                        }}
                                                    >
                                                        {parse(
                                                            data?.short_description.slice(
                                                                0,
                                                                2000
                                                            )
                                                        )}

                                                        <h4 style={{color:"#0e76a8"}}>Key Features:</h4>
                                                        {parse(
                                                            data?.key_features
                                                        )}
                                                        {/* <li>Double Purification Process of UV+UF to make water pure</li>
                                                        <li>Transparent Detachable Tank for easy cleaning</li>
                                                        <li>High Storage Capacity of 8 litres</li>
                                                        <li>High Purification Capacity of 60 L/hr</li>
                                                        <li>Wall Mountable design ideal for Indian homes and offices</li> */}
                                                    </ul>
                                                </p>

                                                <div className="details-list-group">
                                                    <label className="details-list-title">
                                                        Share:
                                                    </label>
                                                    <ul className="details-share-list">
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="icofont-facebook"
                                                                title="Facebook"
                                                            />
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="icofont-twitter"
                                                                title="Twitter"
                                                            />
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="icofont-linkedin"
                                                                title="Linkedin"
                                                            />
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#"
                                                                className="icofont-instagram"
                                                                title="Instagram"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>

                                                <ProductAddButton data={data} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section
                                className="inner-section"
                                style={{
                                    background: "rgba(128, 128, 128, 0.09)",
                                }}
                            >
                                <div className="container desTop">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-tabs">
                                                <li>
                                                    <a
                                                        href="#tab-desc"
                                                        className="tab-link active"
                                                        data-toggle="tab"
                                                    >
                                                        descriptions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#tab-spec"
                                                        className="tab-link"
                                                        data-toggle="tab"
                                                    >
                                                        Specifications
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#tab-reve"
                                                        className="tab-link"
                                                        data-toggle="tab"
                                                    >
                                                        reviews (2)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade show active"
                                        id="tab-desc"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="product-details-frame">
                                                    <div className="tab-descrip">
                                                        {parse(
                                                            data?.product_description
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="tab-spec"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="product-details-frame">
                                                    {/* {parse(data?.key_features)} */}
                                                    {data &&
                                                        data.tech_specification && (
                                                            <div>
                                                                {parse(
                                                                    data.tech_specification
                                                                )}
                                                            </div>
                                                        )}
                                                    {/* <table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Product </th>
                                                                <td>KENT Pristine UV</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Product Code</th>
                                                                <td>11124</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Applications</th>
                                                                <td>Ideal for Tap/Municipal Water Supply</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Purification Production Rate</th>
                                                                <td>60 L/hr. (depending on inlet water pressure)</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Body Material</th>
                                                                <td>ABS Food Grade Plastic</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Mounting</th>
                                                                <td>Wall mounting/Counter-top</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Storage Capacity</th>
                                                                <td>8 L</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Total Power Consumption</th>
                                                                <td>36 W</td>
                                                            </tr>
                                                        </tbody>
                                                    </table> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="tab-reve"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="product-details-frame">
                                                    <ul className="review-list">
                                                        <li className="review-item">
                                                            <div className="review-media">
                                                                <a
                                                                    className="review-avatar text-center"
                                                                    href="#"
                                                                >
                                                                    <img
                                                                        src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                                                                        className="logo"
                                                                    />
                                                                </a>
                                                                <h5 className="review-meta">
                                                                    <a href="#">
                                                                        Navneet
                                                                    </a>
                                                                    <span>
                                                                        June 02,
                                                                        2020
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                            <ul className="review-rating">
                                                                ~
                                                                <li className="icofont-ui-rating" />
                                                                <li className="icofont-ui-rating" />
                                                                <li className="icofont-ui-rating" />
                                                                <li className="icofont-ui-rating" />
                                                                <li className="icofont-ui-rate-blank" />
                                                            </ul>
                                                            <p className="review-desc">
                                                                Lorem ipsum
                                                                dolor sit amet
                                                                consectetur
                                                                adipisicing
                                                                elit. Ducimus
                                                                hic amet qui
                                                                velit, molestiae
                                                                suscipit
                                                                perferendis,
                                                                autem doloremque
                                                                blanditiis
                                                                dolores nulla
                                                                excepturi ea
                                                                nobis!
                                                            </p>
                                                            <form className="review-reply">
                                                                <input
                                                                    type="text"
                                                                    placeholder="reply your thoughts"
                                                                />
                                                                <button>
                                                                    <i className="icofont-reply" />
                                                                    reply
                                                                </button>
                                                            </form>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <Footer />
                            {/* {cartShow && <CartItem />} */}
                        </>
                    );
                }
            })}
        </>
    );
}

export default ServiceVew;
