import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BassURl from "../Api/Api";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./MainBody.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Action/ProductAction";
import Rating from "react-rating";
import { addToCartAction } from "../Redux/Action/CartAction";
import MobileAddtocart from "./MobileAddtocart";

function MainBody() {
  const [offer, setoffer] = useState("");
  useEffect(() => {
    axios.get(`${BassURl}api/offers`).then((res) => {
      setoffer(res.data.data);
    });
  }, []);

  // Appliance api & || function ||

  const [appliance, setappliance] = useState();

  useEffect(() => {
    axios.get(`${BassURl}api/appliances-shop`).then((res) => {
      setappliance(res.data.data);
    });
  }, []);

  const options = {
    margin: 40,
    responsiveClass: true,
    dots: true,

    navText: [
      "<img src='/assets/img/left-arrow.webp' class='nav-buttons  owl-prev'/>",
      " <img src='/assets/img/right-arrow.webp' class='nav-buttons owl-next'/>",
    ],
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,

    // autoWidth:true,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
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

  //   service by catergory api

  const [service, setservice] = useState("");
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

  // slider appliance

  const appliancess = {
    margin: 40,
    responsiveClass: true,
    dots: true,

    navText: [
      "<img src='/assets/img/left-arrow.webp' class='nav-buttons  owl-prev'/>",
      " <img src='/assets/img/right-arrow.webp' class='nav-buttons owl-next'/>",
    ],
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  // Product api || slider function
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );
  const dispatch = useDispatch();
  // call productReducer
  const { loading, products, error } = getAllProductsState;
  //  product Action
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const productss = {
    margin: 40,
    responsiveClass: true,
    dots: true,

    navText: [
      "<img src='/assets/img/left-arrow.webp' class='nav-buttons  owl-prev'/>",
      " <img src='/assets/img/right-arrow.webp' class='nav-buttons owl-next'/>",
    ],
    loop: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  console.log(products);

  return (
    <>
      <main className="main-wrap index-page mb-xxl">
        {/* Search Box Start */}
        <div className="search-boxs mt-2">
          <i className=" icli search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.7666"
                cy="11.7666"
                r="8.98856"
                stroke="#200E32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0183 18.4851L21.5423 22"
                stroke="#200E32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          <input
            className="form-control"
            type="search"
            placeholder="Search here..."
          />
        </div>
        {/* Search Box End */}
        <section
          className="banner-section ratio2_1"
          style={{ padding: "0px !important" }}
        >
          <div className="h-banner-slider">
            {offer && (
              <OwlCarousel {...options}>
                {offer &&
                  offer?.map((data, index) => {
                    return (
                      <div>
                        <div className="banner-box">
                          <img
                            src={`${BassURl}${data?.offer_image}`}
                            alt="banner"
                            className="bg-img"
                          />
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>
            )}
          </div>
        </section>

        {/* service section */}

        <section className="category pt-0 p-0">
          <h3 className="font-md">
            <span className="font-service">Service By Category </span>
            <span className="line" />
            <div className="top-contents">
              {/* <Link to="/mobile-all-service" className="font-theme">
                See all
              </Link> */}
            </div>
          </h3>
          <div className="row gy-sm-4 gy-2">
            {service &&
              service?.slice(0, 12).map((data, index) => {
                return (
                  <>
                    <div className="col-3" key={index}>
                      <div className="category-wrap">
                        <div className=" bg-theme-blue " />
                        <Link to={`/services/${data?.service_url}`}>
                          {" "}
                          <img
                            className="category img-fluid"
                            src={`${BassURl}${data?.service_img}`}
                            alt="category"
                            style={{ width: "100px", height: "100px" }}
                          />{" "}
                        </Link>
                        {/* <span className="title-color" style={{ fontSize: "12px !important" }}>
                            {data?.service_title}
                          </span> */}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </section>
        {/* service section end */}
        {/* Our Appliances */}
        <section className="offer-section pt-0 offer-padding">
          <div className="offer">
            <div className="top-content">
              <div>
                <h4 className="title-color">Our Appliances</h4>
                <p className="content-color">Best price ever of all the time</p>
              </div>
              {/* <Link to="/mobile-all-service" className="font-theme">
                See all
              </Link> */}
            </div>

            <div className="row gy-sm-4 gy-2">
              {appliance &&
                appliance?.map((data, index) => {
                  return (
                    <>
                      <div className="col-4 mb-3">
                        <div className="category-wrap text-center">
                          <div className=" bg-theme-blue " />
                          <a href={`/appliance/${data?.category_url}`}>
                            {" "}
                            <img
                              src={`${BassURl}${data?.image} `}
                              className="img-fluid"
                              alt="product"
                              async
                              style={{
                                backgroundColor: "#1ca3ec33",
                                borderRadius: "11px",
                              }}
                            />{" "}
                          </a>
                          <span
                            className="title-color"
                            style={{
                              fontSize: "12px !important",
                              fontWeight: "900",
                            }}
                          >
                            {data?.category_title}
                            {/* {data?.service_title} */}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}

              {/* {service &&
              service
                ?.slice(0, 12).map((data, index) => {
                  return (
                    <>
                      <div className="col-4" key={index}>
                        <div className="category-wrap">
                          <div className=" bg-theme-blue " />
                          <Link to={`/services/${data?.id}`}>
                            {" "}
                            <img
                              className="category img-fluid"
                              src={`${BassURl}${data?.service_img}`}
                              alt="category"
                            />{" "}
                          </Link>
                          <span className="title-color">
                            {data?.service_title}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })} */}
            </div>

            {/* {

              appliance && <OwlCarousel {...appliancess}>

                {
                  appliance?.map((app, index) => {


                    return (

                      <div key={index}>
                        <div className="product-card">
                          <div className="img-wraps">
                            <Link to={`/appliance/${app.id}`}>
                              <img
                                src={`${BassURl}${app?.image} `}
                                className="img-fluid"
                                alt="product"
                                async
                              />{" "}
                            </Link>
                          </div>
                          <div className="content-wrap text-center">
                            <Link to="/mobile-error" className="font-sm title-color" style={{ textTransform: "capitalize", fontSize: "20px" }}>
                              {app.category_title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </OwlCarousel>

            } */}
          </div>
        </section>

        {/* Our Appliances end */}

        {/* Our Product start */}
        <section className="low-price-section pt-0">
          <div className="top-content">
            <div>
              <h4 className="title-color">Top Product</h4>
              <p className="content-color">Pay less, Get More</p>
            </div>
            {/* <a href="/mobile-error" className="font-theme">
              See all
            </a> */}
          </div>
          <div className="product-slider">
            {products && (
              <OwlCarousel {...productss}>
                {products &&
                  products?.map((productData, index) => {
                    return (
                      <>
                        <div>
                          <div className="product-card">
                            <div className="img-wraps">
                              <Link
                                to={`/mobile-product-detail/${productData?.product_url}`}
                                tabIndex={-1}
                              >
                                <img
                                  src={`${BassURl}${productData.product_image}`}
                                  className="img-fluid"
                                  alt="product"
                                />{" "}
                              </Link>
                            </div>
                            <div className="content-wrap">
                              <Link
                                to={`/mobile-product-detail/${productData?.product_url}`}
                                className="font-sm title-color"
                                tabIndex={-1}
                              >
                                {productData?.product_title}
                              </Link>
                              <span className="content-color font-xs">
                                {" "}
                                <Rating
                                  style={{ color: "orange" }}
                                  initialRating={2}
                                  emptySymbol="fa fa-star-o fa-1x"
                                  fullSymbol="fa fa-star fa-1x"
                                  readonly={true}
                                />
                              </span>
                              <span className="title-color font-sm plus-item">
                                ₹ {productData?.product_price}
                                <span className="plus-minus">
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
                                    className="feather feather-minus sub"
                                  >
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                  </svg>
                                  <input
                                    className="val"
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    max={10}
                                    tabIndex={-1}
                                  />
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
                                    className="feather feather-plus add"
                                  >
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                  </svg>
                                </span>
                                <Link
                                  to={`/mobile-product-detail/${productData?.product_url}`}
                                  className="mt-3"
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.1615 12.0531C15.1615 13.7991 13.7455 15.2141 11.9995 15.2141C10.2535 15.2141 8.8385 13.7991 8.8385 12.0531C8.8385 10.3061 10.2535 8.89108 11.9995 8.89108C13.7455 8.89108 15.1615 10.3061 15.1615 12.0531Z"
                                      stroke="#200E32"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48888 15.806 4.75089 11.998 4.75089H12.002C8.194 4.75089 4.711 7.48888 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
                                      stroke="#200E32"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </OwlCarousel>
            )}
          </div>
        </section>

        {/* Our Product End */}

        {/* End Page */}

        <section className="question-section pt-0 p-0">
          <h5>Didn’t find what you were looking for?</h5>
          <a href="/mobile-error" className="btn-solid">
            Browse Category
          </a>
        </section>

        {/* End Page End */}
      </main>
    </>
  );
}

export default MainBody;
