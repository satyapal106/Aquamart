import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
// import { actionType } from "../Context/reducer";
// import { useStateValue } from "../Context/StateProvider";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";
import CartService from "../Cart/CartService";
import BassURl from "../Api/Api";
// import CartService from "../Cart/CartService";
// import CartServiceTwo from "../Cart/CartServiceTwo";

function NavbarService() {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const googleUser = JSON.parse(window.localStorage.getItem("googleUser"));
  const [isActive, setIsActive] = useState(false);
  const handledrop = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
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

  let navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  // const [{ user, cartShowA, cartItemss }, dispatch] = useStateValue();

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
        const response = await axios.get(`${BassURl}api/appliances-shop`);
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

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.post(`http://localhost:8000/api/login`, data).then((res) => {
      if (res.data.code === 200) {
        window.localStorage.setItem("auth_name", res.data.data.first_name);
        swal("Success", res.data.message, "success");
        navigate("/home");
      } else {
        // swal("Failed", res.data.data.message, "warning");
        console.log("worng");
      }
    });
  };
  window.addEventListener("scroll", changeHeader);

  const addToServiceCartReducer = useSelector(
    (state) => state?.addToServiceCartReducer
  );
  const { cartItemService } = addToServiceCartReducer;
  const [showCart, setShowCart] = useState(false);
  const onShow = () => setShowCart(true);

  function logout() {
    window.localStorage.removeItem("currentUser");
    window.localStorage.removeItem("cartServiceItem");
    window.localStorage.removeItem("cartItems");
    // dispatch({ type: "USER_LOGOUT" })

    window.location.href = "/";
  }

  return (
    <>
      {/* {isShown && <CartServiceTwo />} */}

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
                      <span classname="submenu-indicator-chevron"></span>
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
                              <a
                                href={`/appliances/${item.category_url}`}
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
                  <a>
                    About Us
                    <span className="submenu-indicator" />
                    <span classname="submenu-indicator">
                      <span classname="submenu-indicator-chevron"></span>
                    </span>
                  </a>
                </li>
                <li style={{ coursor: "pointer" }}>
                  <a href="/contact-us">
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
                  <a>
                    {cartItemService && cartItemService?.length > 0 && (
                      <span>{cartItemService?.length}</span>
                    )}
                    <i
                      className="fa fa-shopping-cart"
                      aria-hidden="true"
                      onClick={() => onShow()}
                      style={{
                        cursor: "pointer",
                        width: "30px",
                        fontSize: "30px !important",
                      }}
                    ></i>
                  </a>
                </li>
                {showCart ? <CartService hide={setShowCart} /> : null}

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
      <div
        className="modal fade"
        id="login"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="registermodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl login-pop-form" role="document">
          <div className="modal-content overli" id="registermodal">
            <div className="modal-body p-0">
              <div className="resp_log_wrap">
                <div
                  className="resp_log_thumb"
                  style={{ background: "url(assets/img/Signin.webp)no-repeat" }}
                />
                <div className="resp_log_caption">
                  <span
                    className="mod-close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    <i className="ti-close" />
                  </span>
                  <div className="edlio_152">
                    <ul
                      className="nav nav-pills tabs_system center"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-login-tab"
                          data-toggle="pill"
                          href="#pills-login"
                          role="tab"
                          aria-controls="pills-login"
                          aria-selected="true"
                        >
                          <i className="fa fa-sign-in mr-2" />
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-signup-tab"
                          data-toggle="pill"
                          href="#pills-signup"
                          role="tab"
                          aria-controls="pills-signup"
                          aria-selected="false"
                        >
                          <i className="fa fa-user-plus mr-2" />
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="pills-login-tab"
                    >
                      <div className="login-form">
                        <form onSubmit={loginSubmit}>
                          <div className="form-group">
                            <label>Email</label>
                            <div className="input-with-icon">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={loginInput.email}
                                onChange={handleInput}
                              />
                              <i className="ti-user" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Password</label>
                            <div className="input-with-icon">
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={loginInput.password}
                                onChange={handleInput}
                              />
                              <i className="ti-unlock" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="eltio_ol9">
                              <div className="eltio_k1">
                                <input
                                  id="dd"
                                  className="checkbox-custom"
                                  name="dd"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="dd"
                                  className="checkbox-custom-label"
                                >
                                  Remember Me
                                </label>
                              </div>
                              <div className="eltio_k2">
                                <a href="#">Lost Your Password?</a>
                              </div>
                            </div>
                          </div>
                          <ReCAPTCHA
                            sitekey="6LfnTJkgAAAAAJYAjhpL66_RdkRvV918sq3j27wJ"
                            ref={captchaRef}
                          />
                          <div className="form-group">
                            <button
                              type="submit"
                              onClick={loginSubmit}
                              className="btn btn-md full-width pop-login"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-signup"
                      role="tabpanel"
                      aria-labelledby="pills-signup-tab"
                    >
                      <div className="login-form">
                        <form>
                          <div className="form-group">
                            <label>Full Name</label>
                            <div className="input-with-icon">
                              <input type="text" className="form-control" />
                              <i className="ti-user" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Email ID</label>
                            <div className="input-with-icon">
                              <input type="email" className="form-control" />
                              <i className="ti-user" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Password</label>
                            <div className="input-with-icon">
                              <input type="password" className="form-control" />
                              <i className="ti-unlock" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="eltio_ol9">
                              <div className="eltio_k1">
                                <input
                                  id="dds"
                                  className="checkbox-custom"
                                  name="dds"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="dds"
                                  className="checkbox-custom-label"
                                >
                                  By using the website, you accept the terms and
                                  conditions
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-md full-width pop-login"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {cartShowA && <CartServiceTwo />} */}
      {/* End Modal */}
    </>
  );
}

export default NavbarService;
