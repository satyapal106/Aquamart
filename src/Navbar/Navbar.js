import React, { useEffect, useState, useRef } from "react";
// import { actionType } from "../Context/reducer";
// import { useStateValue } from "../Context/StateProvider";
import BassURl from "../Api/Api";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import CryptoJS from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, deleteFromCart } from "../Redux/Action/CartAction";
import CartItem from "../Cart/CartItem";

function Navbar() {
  let navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const addtocartreducer = useSelector((state) => state?.addToCartReducer);
  const { cartItems } = addtocartreducer;
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const onShow = () => setShowCart(true);

  const changeHeader = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeader);
  // / api call
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${BassURl}api/appliances-shop`
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

  // 2 api call for service tab
  const [services, setServices] = useState(null);

  useEffect(() => {
    axios.get(`${BassURl}/api/service-category`).then((response) => {
      setServices(response.data.data);
    });
  }, []);

  const captchaRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  // login function
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    // e.presist();
    // setLogin({ ...loginInput, [e.target.name]: e.target.value });
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    // const token = captchaRef.current.getValue();
    // captchaRef.current.reset();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.post(`http://localhost:8000/api/login`, data).then((res) => {
      if (res.data.code === 200) {
        localStorage.setItem("auth_name", res.data.data.first_name);
        swal("Success", res.data.message, "success");
        navigate("/home");
      } else {
        // swal("Failed", res.data.data.message, "warning");
        console.log("worng");
      }
    });
  };

  const [isActive, setIsActive] = useState(false);
  const handledrop = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  const logout = () => {
    window.localStorage.clear();
    window.location.href = '/';


  };

  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const googleUser = JSON.parse(window.localStorage.getItem("googleUser"));

  //    decrpty data
  const [isHovering, setIsHovering] = useState(false);

  const [isHoveringService, setIsHoveringService] = useState(false);

  const handleServiceOver = () => {
    setIsHoveringService(true);
  };

  const handleServiceOut = () => {
    setIsHoveringService(false);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      {/* Start Navigation */}
      <div
        className={
          navbar
            ? "header  header-transparent change-logo  header-fixed  "
            : "header  header-transparent change-logo "
        }
      >
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand static-logo" href="/">
                <img src="/assets/img/logo-with-tm.png" className="logo" />
              </a>
              <a className="nav-brand fixed-logo" href="/">
                <img src="/assets/img/logo-with-tm.png" className="logo" />
              </a>
              <div className="nav-toggle" />
              <div className="mobile_nav">
                <ul>
                  <li className="_my_prt_list">
                    <a href="#">
                      <span>2</span>My List
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#login">
                      <i className="fas fa-user-circle fa-lg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li className="active">
                  <a href="/">Home</a>
                </li>

                <li
                  className={isHovering ? "nav-submenu-open" : ""}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <a>
                    Shop
                    <span className="submenu-indicator" />
                    <span classname="submenu-indicator">
                      <span></span>
                    </span>
                  </a>
                  <ul
                    className={
                      isHovering
                        ? "nav-dropdown nav-submenu menu-active"
                        : "nav-dropdown nav-submenu "
                    }
                  >
                    {product &&
                      product?.map((item, index) => {
                        return (
                          <>
                            <li>

                              <a href={`/appliances/${item.category_url}`}
                                key={index}
                                style={{ textTransform: "capitalize" }}
                              >
                                {item?.category_title}
                              </a>
                            </li>
                          </>
                        );
                      })}
                  </ul>
                </li>

                <li
                  className={isHoveringService ? "nav-submenu-open" : ""}
                  onMouseOver={handleServiceOver}
                  onMouseOut={handleServiceOut}
                >
                  <a>
                    Service
                    <span className="submenu-indicator" />
                    <span classname="submenu-indicator">
                      <span classname="submenu-indicator-chevron"></span>
                    </span>
                  </a>
                  <ul
                    className={
                      isHoveringService
                        ? "nav-dropdown nav-submenu menu-active"
                        : "nav-dropdown nav-submenu "
                    }
                  >
                    {services &&
                      services?.map((items, index) => {
                        return (
                          <>
                            <li>
                              <a
                                href={`/service/${items?.service_url}`}
                                key={index}
                                style={{ textTransform: "capitalize" }}
                              >
                                {items?.service_title}
                              </a>
                            </li>
                          </>
                        );
                      })}
                  </ul>
                </li>
                <li style={{ coursor: "pointer" }}>
                  <a href="/about">
                    About Us
                    <span className="submenu-indicator" />
                    <span classname="submenu-indicator">
                      <span classname="submenu-indicator-chevron"></span>
                    </span>
                  </a>
                </li>
                <li style={{ coursor: "pointer" }}>
                  <a>
                    Contact Us
                    <span className="submenu-indicator" />
                    <span classname="submenu-indicator">
                      <span classname="submenu-indicator-chevron"></span>
                    </span>
                  </a>
                </li>
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right ">
                <li className="_my_prt_list">
                  <a onClick={onShow}>
                    {cartItems && cartItems.length > 0 && (
                      <span>{cartItems.length}</span>
                    )}
                    <i
                      className="fa fa-shopping-cart"
                      aria-hidden="true"
                      style={{
                        cursor: "pointer",
                        width: "30px",
                        fontSize: "30px !important",
                      }}
                    ></i>
                  </a>
                </li>
                {showCart ? <CartItem hide={setShowCart} /> : null}

                {googleUser ? (
                  <>
                    <li className="">
                      <div
                        className={
                          isActive
                            ? "btn-group account-drop show"
                            : "btn-group account-drop "
                        }
                        onClick={() => handledrop()}
                      >
                        <button
                          type="button"
                          className="btn btn-order-by-filt"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src={googleUser?.photoURL}
                            className="avater-img"
                            alt=""
                          />
                        </button>
                        <div
                          className={
                            isActive
                              ? "dropdown-menu pull-right animated flipInX show"
                              : "dropdown-menu pull-right animated flipInX"
                          }
                          x-placement="bottom-start"
                          style={{
                            position: "absolute",
                            transform: "translate3d(15px, 58px, 0px)",
                            top: 0,
                            left: 0,
                            willChange: "transform",
                          }}
                        >
                          <div className="drp_menu_headr">
                            <h4>Hi' {googleUser?.displayName}</h4>
                          </div>
                          <ul>
                            <li>
                              <a href="/dashboard">
                                <i className="fa fa-tachometer-alt" />
                                Dashboard
                              </a>
                            </li>
                            <li>
                              <a href="my-profile.html">
                                <i className="fa fa-user-tie" />
                                My Profile
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => {
                                  logout();
                                }}
                              >
                                <i className="fa fa-sign-in" />
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </>
                ) : currentUser ? (
                  <>
                    <li className="">
                      <div
                        className={
                          isActive
                            ? "btn-group account-drop show"
                            : "btn-group account-drop "
                        }
                        onClick={() => handledrop()}
                      >
                        <button
                          type="button"
                          className="btn btn-order-by-filt"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                            className="avater-img"
                            alt=""
                          />
                        </button>
                        <div
                          className={
                            isActive
                              ? "dropdown-menu pull-right animated flipInX show"
                              : "dropdown-menu pull-right animated flipInX"
                          }
                          x-placement="bottom-start"
                          style={{
                            position: "absolute",
                            transform: "translate3d(15px, 58px, 0px)",
                            top: 0,
                            left: 0,
                            willChange: "transform",
                          }}
                        >
                          <div className="drp_menu_headr">
                            <h4>Hi' {currentUser?.fristName}</h4>
                          </div>
                          <ul>
                            <li>
                              <a href="/dashboard">
                                <i className="fa fa-tachometer-alt" />
                                Dashboard
                              </a>
                            </li>
                            <li>
                              <a href="my-profile.html">
                                <i className="fa fa-user-tie" />
                                My Profile
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => {
                                  logout();
                                }}
                              >
                                <i className="fa fa-sign-in" />
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a href="/login" className="alio_green">
                        <i className="fa fa-sign-in mr-2" />
                        <span className="dn-lg">Sign In</span>
                      </a>
                    </li>
                    <li className="add-listing">
                      <a href="/registration" className="theme-cl">
                        <i className="fa fa-plus-circle mr-2" />
                        Sign Up
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* End Navigation */}

      {/* Log In Modal */}

      {/* End Modal */}
    </>
  );
}

export default Navbar;
