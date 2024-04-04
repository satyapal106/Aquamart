import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BassURl from "../Api/Api";
import NavbarService from "../Navbar/NavbarService";
import { addToServiceCartAction } from "../Redux/Action/CartAction";
import "./Service.css";
import ServiceAdd from "./ServiceAdd";
import parse from "html-react-parser";

function Service() {
  const param = useParams();
  const [GetServiceCatgory, setGetServiceCatgory] = useState();
  useEffect(() => {
    axios
      .get(`${BassURl}api/service-category`)
      .then((res) => {
        setGetServiceCatgory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [serviceByCategory, setServiceByCategory] = useState("");
  useEffect(() => {
    axios
      .get(`${BassURl}api/service-by-category/${param.service_id}`)
      .then((res) => {
        setServiceByCategory(res.data.data.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);


  const [CategoryDetail, setCategoryDetail] = useState(null);
  useEffect(() => {
    axios
      .get(`${BassURl}api/service-category-details/${param.service_id}`)
      .then((res) => {
        setCategoryDetail(res.data);
        console.log(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const addToServiceCartReducer = useSelector(
    (state) => state?.addToServiceCartReducer
  );
  const { cartItemService } = addToServiceCartReducer;
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  };
  function removeNonBreakingSpaces(inputString) {
    return inputString.replace(/&nbsp;/g, " ");
  }
  const formatNumberWithCommas = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <>
      <NavbarService />
      
      <div>
    {CategoryDetail && (
      // Render actual data when CategoryDetail is truthy
      <img
        src={`${BassURl}${CategoryDetail.data.service_background}`}
        width="100%"
        alt="Category Image"
      />
    )}
  </div>
  
      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-lg-3">
              <div
                className="left-box wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="shop-left-sidebar">
                  <div className="back-button">
                    {/* <h3>
                      <i className="fa-solid fa-arrow-left" /> Back
                    </h3> */}
                  </div>
                  <div className="accordions" id="accordionsExample">
                    <div className="accordions-item">
                      <div className="" id="headingOne">
                        <h2 className="accordions-header" id="headingThree">
                          <button
                            className="font-md title-color text-left accordions-button w-100"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Rating
                            <i className="float-right">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-right"
                              >
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordionsExample"
                      >
                        <div className="accordions-body">
                          <ul className="category-lists custom-padding">
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                />
                                <div className="form-check-label">
                                  <ul className="rating">
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                  </ul>
                                  <span className="text-content">(5 Star)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                />
                                <div className="form-check-label">
                                  <ul className="rating">
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                  </ul>
                                  <span className="text-content">(4 Star)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                />
                                <div className="form-check-label">
                                  <ul className="rating">
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                  </ul>
                                  <span className="text-content">(3 Star)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                />
                                <div className="form-check-label">
                                  <ul className="rating">
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                  </ul>
                                  <span className="text-content">(2 Star)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                />
                                <div className="form-check-label">
                                  <ul className="rating">
                                    <li>
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
                                        className="feather feather-star fill"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                    <li>
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
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </li>
                                  </ul>
                                  <span className="text-content">(1 Star)</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordions-item">
                      <div className="" id="headingTwo">
                        <h2 className="accordions-header" id="headingThree">
                          <button
                            className="font-md title-color text-left accordions-button w-100"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            Sort By
                            <i className="float-right">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevron-right"
                              >
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionsExample"
                      >
                        <div className="accordions-body">
                          <ul className="category-lists custom-padding custom-height">
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="fruit"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fruit"
                                >
                                  <span className="name">Low - High Price</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="cake"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="cake"
                                >
                                  <span className="name">High - Low Price</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="behe"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="behe"
                                >
                                  <span className="name">A - Z Order</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="form-check ps-0 m-0 category-lists-box">
                                <input
                                  className="checkbox_animated"
                                  type="checkbox"
                                  id="snacks"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="snacks"
                                >
                                  <span className="name">Z - A Order</span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-lg-9">
              <div className="show-button">
                <div className="filter-button-group mt-0">
                  <div className="filter-button d-inline-block d-lg-none">
                    <a>
                      <i className="fa-solid fa-filter" /> Filter Menu
                    </a>
                  </div>
                </div>
                <div className="top-filter-menu"></div>
              </div>
              <div className="row product-list-section list-style">
                {serviceByCategory &&
                  serviceByCategory?.map((data) => {
                    return (
                      <>
                        <div className="col-lg-4">
                          <div className="property-listing property-2 productHeight items applicanceDivBorder">
                            <div className="listing-img-wrapper">
                              <div className="list-img-slide">
                                <div className="click">
                                  <div>
                                    <a href={`/product/${data?.service_url}`}>
                                      <img
                                        src={`${BassURl}${data?.service_image}`}
                                        className="img-fluid imgProduct mx-auto"
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
                                    <h4 className="listing-name verified">
                                      <a
                                        href={`/product/${data?.service_url}`}
                                        className="prt-link-detail"
                                      >
                                        {data?.service_title}
                                      </a>
                                    </h4>
                                    <div
                                      className="proudctCardDes"
                                      style={{ color: "#fff" }}
                                    >
                                      {parse(
                                        removeNonBreakingSpaces(
                                          data?.description
                                        )
                                      )}
                                    </div>

                                    {/* <p className=""> </p> */}
                                  </div>
                                  <br />
                                </div>
                                <div
                                  className="footer-first"
                                  style={{
                                    display: "flex",
                                    marginTop: "12px",
                                  }}
                                >
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

                                  <div className="footer-first">
                                    <h6 className="listing-card-info-price mb-0  price-style">
                                      ₹ &nbsp;
                                      {formatNumberWithCommas(
                                        data?.service_price
                                      )}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="listing-detail-footer">
                              <div className="footer-flex ">
                                <ServiceAdd data={data} />
                                {/* <div className="prt-view" onClick={addtocart}>
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              &nbsp; Add to cart
            </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {
    GetServiceCatgory && GetServiceCatgory?.map((data)=>{
      if(data?.service_url === param?.service_url){

      }
    })
   } */}
    </>
  );
}

export default Service;
