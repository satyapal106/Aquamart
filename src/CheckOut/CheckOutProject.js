import React from "react";
import NavbarService from "../Navbar/NavbarService";
import Footer from "../Component/Footer";
import BassURl from "../Api/Api";
import Navbar from "../Navbar/Navbar";
import "./checkout.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Mobile/Address.css";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

import { addNewAdress } from "../Redux/Action/UserAction";
import { placeOrder, ServiceplaceOrder } from "../Redux/Action/OrderAction";

function CheckOutProject() {
  const dispatch = useDispatch();
  const addtocartreducer = useSelector((state) => state?.addToCartReducer);
  const { cartItems } = addtocartreducer;
  var subtotal = cartItems?.reduce(
    (acc, item) => acc + item?.product_price * item?.qty,
    0
  );
  // console.log(subtotal)

  const addToServiceCartReducer = useSelector(
    (state) => state?.addToServiceCartReducer
  );
  const { cartItemService } = addToServiceCartReducer;
  var Servicesubtotal = cartItemService?.reduce(
    (acc, item) => acc + item?.service_price * item?.qty,
    0
  );

  const [getAdress, setGetAdress] = useState();
  const address = JSON.parse(window.localStorage.getItem("currentUser"));
  let initialValues = {
    pincode: "",
    address: "",
    city: "",
    state: "",
    country: "null",
    latitude: "null",
    longitude: "null",
    type: "",
    user_id: address?.id,
  };
  useEffect(() => {
    axios
      .get(`${BassURl}/api/user-address/${address.id}`)
      .then((res) => {
        console.log(res.data.data);
        setGetAdress(res.data.data);
      })
      .catch((error) => {
        console.log("somthing went wrong");
      });
  }, []);

  // store Address
  const [activeId, setActiveId] = useState();
  window.localStorage.setItem("address_id", JSON.stringify(activeId));
  // add mew address
  const [showResults, setShowResults] = React.useState(false);
  function onShow() {
    setShowResults(true);
  }
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "100%" },
  };
  const [UserAddress, setUserAddress] = useState(initialValues);
  // const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAddress({ ...UserAddress, [name]: value });
    console.log(UserAddress);
  };
  console.log(UserAddress);
  function postAddress(e) {
    e.preventDefault();

    dispatch(addNewAdress(UserAddress));
  }
  const [PaymentId, setPaymentId] = useState("");
  const [radioValue, setRadioValue] = useState();
  const onChange = (ev) => {
    //save your value here with state variable
    console.log(ev.target.value);
    setRadioValue(ev.target.value);
  };
  const cartItemss = JSON.parse(window.localStorage.getItem("cartItems"));
  const cartItemservice = JSON.parse(
    window.localStorage.getItem("cartServiceItem")
  );

  // get alert while radio select
  function tokenHandler() {
    // alert(radioValue)
    switch (radioValue) {
      case "online":
        let options = {
          key: "rzp_test_jYMYEsyHx3C18V", // Enter the Key ID generated from the Dashboard
          amount: Servicesubtotal * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Digital Nawab",
          description: "Test Transaction",
          image: "http://aquamart.co.in/assets/img/logo.webp",
          // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
          handler: function (response) {
            console.log(response.razorpay_payment_id);
            //   = response.razorpay_payment_id;
            // dispatch(ServiceplaceOrder(Servicesubtotal));
            // window.location.href = '/order-success'

            // history.push('/order-success')
          },
          prefill: {
            name: address.first_name + address.last_name,
            email: address?.email,
            contact: address?.mobile,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        break;
      case "cod":
        dispatch(ServiceplaceOrder(subtotal));
        break;

      default:
        break;
    }
  }
  function productSend() {
    switch (radioValue) {
      case "online":
        let options = {
          key: "rzp_test_jYMYEsyHx3C18V", // Enter the Key ID generated from the Dashboard
          amount: subtotal * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Digital Nawab",
          description: "Test Transaction",
          image: "http://aquamart.co.in/assets/img/logo.webp",
          // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
          handler: function (response) {
            if (response?.razorpay_payment_id != null) {
              setPaymentId({ paymentId: response.razorpay_payment_id });
              dispatch(placeOrder(subtotal, PaymentId));
            }
            console.log(response);
            //   = response.razorpay_payment_id;

            // window.location.href = '/order-success'
            // history.push('/order-success')
          },
          prefill: {
            name: address.first_name + address.last_name,
            email: address?.email,
            contact: address?.mobile,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        break;
      case "cod":
        dispatch(ServiceplaceOrder(Servicesubtotal));
        break;
      default:
        break;
    }
  }
  return (
    <>
      <NavbarService />
      <div
        className="page-title"
        style={{
          background:
            "#f4f4f4 url(https://www.kent.co.in/images/banner/banner-bg.jpg)",
        }}
        data-overlay={5}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="breadcrumbs-wrap">
                <h2 className="breadcrumb-title">Checkout - Checkout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="checkout-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-lg-3">
              {/* Tabs nav */}
              <div
                className="nav flex-column nav-pills nav-pills-custom custom-navtab"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link mb-3 p-3 shadow active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img
                    src="/assets/icons/svg/location.gif"
                    loop="infinite"
                    alt=""
                    className="mr-3"
                    width={30}
                  />
                  <span className="font-weight-bold small text-uppercase">
                    Delivery Address
                  </span>
                </a>
                <a
                  className="nav-link mb-3 p-3 shadow paymentOption"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <img
                    src="/assets/icons/svg/coins.gif"
                    loop="infinite"
                    alt=""
                    className="mr-3"
                    width={30}
                  />
                  <span className="font-weight-bold small text-uppercase">
                    Payment Option
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              {/* Tabs content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade shadow rounded show active p-5"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <h2
                      className="tab-title mb-0"
                      style={{ fontFamily: "Mulish", fontWeight: "700" }}
                    >
                      Delivery Address
                    </h2>
                    <button
                      className="btn btn-animation btn-sm fw-bold ms-auto"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#add-address"
                      style={{
                        fontFamily: "Mulish",
                        fontWeight: 700,
                      }}
                    >
                      {/* <i className="fa-solid fa-plus d-block d-sm-none m-0" />
                      <span className="d-none d-sm-block">+ Add New</span> */}
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
                              Add New Address +
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse "
                          aria-labelledby="headingTwo"
                          data-parent="#accordionsExample"
                        >
                          <div className="accordions-body">
                            <div className="offcanvas-body small w-100">
                              <form
                                className="custom-form w-100"
                                onSubmit={postAddress}
                              >
                                <div className="input-box mb-3">
                                  <input
                                    type="text"
                                    name="pincode"
                                    value={UserAddress.pincode}
                                    onChange={handleChange}
                                    placeholder="postal code"
                                    id="form3Example3"
                                    className="form-control"
                                  />
                                </div>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    name="state"
                                    value={UserAddress.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="form-control"
                                    style={{ marginTop: "17px" }}
                                  />
                                </div>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    name="city"
                                    value={UserAddress.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="form-control"
                                  />
                                </div>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={UserAddress.address}
                                    onChange={handleChange}
                                    className="form-control"
                                    style={{ marginTop: "17px" }}
                                  />
                                </div>
                                <div className="input-box">
                                  <input
                                    type="text"
                                    name="type"
                                    placeholder="Address Type Link: home office other"
                                    value={UserAddress.type}
                                    onChange={handleChange}
                                    className="form-control"
                                    style={{ marginTop: "17px" }}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="offcanvas-footer">
                              <div className="btn-box">
                                <button
                                  className="btn-solid font-md"
                                  data-bs-dismiss="offcanvas"
                                  aria-label="Close"
                                  type="submit"
                                  onClick={postAddress}
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="row">
                    {getAdress &&
                      getAdress?.map((data) => {
                        return (
                          <div className="col-xxl-6 col-lg-6 col-md-6 pb-4">
                            <div
                              className="delivery-address-box pt-3 "
                              onClick={() => setActiveId(data.id)}
                            >
                              <div>
                                <div className="form-check p-3 ">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="jack"
                                    id="flexRadioDefault1"
                                  />
                                </div>
                                <div className="label">
                                  <label>{data?.type}</label>
                                </div>
                                <ul className="delivery-address-detail">
                                  <li>
                                    <h4 className="fw-500">
                                      {address?.first_name +
                                        " " +
                                        address?.last_name}
                                    </h4>
                                  </li>
                                  <li>
                                    <p className="text-content">
                                      <span className="text-title">
                                        Address :{" "}
                                      </span>
                                      {data?.address}
                                    </p>
                                  </li>
                                  <li>
                                    <h6 className="text-content">
                                      <span className="text-title">
                                        Pin Code :
                                      </span>{" "}
                                      {data?.pincode}
                                    </h6>
                                  </li>
                                  <li>
                                    <h6 className="text-content mb-0">
                                      <span className="text-title">
                                        Phone :
                                      </span>{" "}
                                      {address?.mobile}
                                    </h6>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div
                  className="tab-pane fade shadow rounded"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <h2
                    className="tab-title mb-0"
                    style={{ fontFamily: "Mulish", fontWeight: "700" }}
                  >
                    {" "}
                    Payment Option
                  </h2>
                  <div className="row">
                    <div className="col-xxl-6 col-lg-6 col-md-6 pb-4 mt-3">
                      {/* <div className="delivery-address-box">
                        <div>
                          <div className="form-check ">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="upi"
                              onChange={onChange}
                              value="online"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <ul className="delivery-address-detail">
                            <li>
                              <h4
                                className="fw-500"
                                style={{
                                  fontFamily: "Mulish",
                                  fontWeight: "500",
                                }}
                              >
                                Pay With UPI
                              </h4>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      <div className="delivery-address-box mt-3">
                        <div>
                          <div className="form-check ">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="upi"
                              onChange={onChange}
                              value="cod"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <ul className="delivery-address-detail">
                            <li>
                              <h4
                                className="fw-500"
                                style={{
                                  fontFamily: "Mulish",
                                  fontWeight: "500",
                                }}
                              >
                                COD (Cash On Delivery)
                              </h4>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 co-sm-6">
                      <div className="checkout-area">
                        <div className="order-area">
                          <div className="check-pro">
                            <h2 style={{ fontFamily: "Rubik, sans-serif" }}>
                              In Your Cart{" "}
                            </h2>
                            <ul className="check-ul">
                              {cartItemss ? (
                                <>
                                  {cartItemss &&
                                    cartItemss?.map((data, index) => {
                                      return (
                                        <>
                                          <li key={index}>
                                            <div className="check-pro-img">
                                              <a>
                                                <img
                                                  src={
                                                    BassURl +
                                                    data?.product_image
                                                  }
                                                  className="img-fluid"
                                                  alt="image"
                                                />
                                              </a>
                                            </div>
                                            <div className="check-content">
                                              <a>{data?.service_title}</a>
                                              <span className="check-code-blod">
                                                Product Qty:{" "}
                                                <span>{data?.qty}</span>
                                              </span>
                                              <span className="check-price">
                                                Price: ₹{" "}
                                                {data?.product_price *
                                                  data?.qty}
                                              </span>
                                            </div>
                                          </li>
                                        </>
                                      );
                                    })}
                                </>
                              ) : cartItemservice ? (
                                cartItemservice &&
                                cartItemservice?.map((data) => {
                                  return (
                                    <>
                                      <li>
                                        <div className="check-pro-img">
                                          <a>
                                            <img
                                              src={
                                                BassURl + data?.service_image
                                              }
                                              className="img-fluid"
                                              alt="image"
                                            />
                                          </a>
                                        </div>
                                        <div className="check-content">
                                          <a>{data?.service_title}</a>
                                          <span className="check-code-blod">
                                            Product Qty:{" "}
                                            <span>{data?.qty}</span>
                                          </span>
                                          <span className="check-price">
                                            Price: ₹{" "}
                                            {data?.service_price * data?.qty}
                                          </span>
                                        </div>
                                      </li>
                                    </>
                                  );
                                })
                              ) : (
                                ""
                              )}
                            </ul>
                          </div>
                          <h2
                            style={{
                              fontFamily: " 'Rubik', sans-serif",
                              backgroundColor: "#bdbcbc",
                            }}
                          >
                            Your order{" "}
                          </h2>
                          <ul className="order-history">
                            <li className="order-details">
                              <span
                                style={{ fontFamily: " 'Rubik', sans-serif" }}
                              >
                                service:
                              </span>
                              <span
                                style={{ fontFamily: " 'Rubik', sans-serif" }}
                              >
                                Total
                              </span>
                            </li>

                            <li className="order-details">
                              <span
                                style={{ fontFamily: " 'Rubik', sans-serif" }}
                              >
                                Shipping Charge:
                              </span>
                              <span>Free shipping</span>
                            </li>
                            <li className="order-details">
                              <span
                                style={{ fontFamily: " 'Rubik', sans-serif" }}
                              >
                                Total:
                              </span>
                              {cartItemss ? (
                                <>
                                  {" "}
                                  <span
                                    style={{
                                      fontFamily: " 'Rubik', sans-serif",
                                    }}
                                  >
                                    ₹ {subtotal}
                                  </span>
                                </>
                              ) : (
                                <span
                                  style={{ fontFamily: " 'Rubik', sans-serif" }}
                                >
                                  ₹ {Servicesubtotal}
                                </span>
                              )}
                            </li>
                          </ul>

                          {cartItemss ? (
                            <>
                              {" "}
                              <div className="checkout-btn">
                                <a
                                  className="btn-style1"
                                  onClick={productSend}
                                  style={{ cursor: "pointer" }}
                                >
                                  Place order
                                </a>
                              </div>
                            </>
                          ) : (
                            <div className="checkout-btn">
                              <a
                                className="btn-style1"
                                onClick={tokenHandler}
                                style={{ cursor: "pointer" }}
                              >
                                Place order
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        animate={showResults ? "open" : "closed"}
        variants={variants}
        className={
          showResults
            ? "offcanvas all-review-offcanvas offcanvas-bottom show "
            : "offcanvas all-review-offcanvas offcanvas-bottom"
        }
        tabIndex={-1}
        id="all-review"
        aria-labelledby="all-review"
        data-bs-toggle=""
        style={{ visibility: showResults ? "visible" : "hidden" }}
        aria-hidden="true"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Add Address Review</h5>
          <span
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => {
              setShowResults(false);
            }}
          >
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
          <form className="custom-form" onSubmit={postAddress}>
            <div className="input-box mb-3">
              <input
                type="text"
                name="pincode"
                value={UserAddress.pincode}
                onChange={handleChange}
                placeholder="postal code"
                id="form3Example3"
                className="form-control"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="state"
                value={UserAddress.state}
                onChange={handleChange}
                placeholder="State"
                className="form-control"
                style={{ marginTop: "17px" }}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="city"
                value={UserAddress.city}
                onChange={handleChange}
                placeholder="City"
                className="form-control"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={UserAddress.address}
                onChange={handleChange}
                className="form-control"
                style={{ marginTop: "17px" }}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="type"
                placeholder="Address Type Link: home office other"
                value={UserAddress.type}
                onChange={handleChange}
                className="form-control"
                style={{ marginTop: "17px" }}
              />
            </div>
          </form>
        </div>
        <div className="offcanvas-footer">
          <div className="btn-box">
            <button
              className="btn-solid font-md"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              type="submit"
              onClick={postAddress}
            >
              Add
            </button>
          </div>
        </div>
      </motion.div>
      <div
        className={
          showResults ? "modal-backdrop fade show" : "modal-backdrop fade "
        }
        style={{ display: showResults ? "block" : "none" }}
      />

      <Footer />
    </>
  );
}

export default CheckOutProject;
