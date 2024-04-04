import React from "react";

import Navbar from "../Navbar/Navbar";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { app } from "../firebase.config";
import jwt_decode from "jwt-decode";
import { gapi } from "gapi-script";
// import { useStateValue } from "../Context/StateProvider";
// import { actionType } from "../Context/reducer";
import { async } from "@firebase/util";
import axios from "axios";
import BassURl from "../Api/Api";
import { loginUser } from "../Redux/Action/UserAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const dispatch = useDispatch();
  const [isMenu, setIsMenu] = useState(false);

  // Google login function

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const facebookprovider = new FacebookAuthProvider();

  // const login = async () => {
  //   const {
  //     user: { refreshToken, providerData },
  //   } = await signInWithPopup(firebaseAuth, provider);
  //   dispatch({
  //     type: actionType.SET_USER,
  //     user: providerData[0],
  //   });

  //   localStorage.setItem("googleUser", JSON.stringify(providerData[0]));
  //   window.location.href = "/";
  // };

  // facebook login function

  const facebook = async () => {
    await signInWithPopup(firebaseAuth, facebookprovider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const logout = () => {
  //   localStorage.clear();

  //   dispatch({
  //     type: actionType.SET_USER,
  //     user: null,
  //   });
  // };

  // From login function

  let initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  let handleSubmit = (e) => {
    axios
      .post(`${BassURl}/api/login`, formValues)
      .then((res) => {
        dispatch(loginUser(formValues));
        // window.location.href = "/";
      })
      // catch error if their is any error
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };
  const userss = {
    name: "shubham",
    age: "12",
  };
  // Decrypt

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="log-in-section background-image-2 section-b-space mt-5">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="/assets/img/log-in.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 me-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Aquamart</h3>
                  <h4>Log In Your Account</h4>
                </div>
                <div className="input-box">
                  <form>
                    <div className="form">
                      <div className="form-item">
                        <input
                          type="email"
                          id="username"
                          autoComplete="off"
                          value={formValues.email}
                          onChange={handleChange}
                          name="email"
                          required
                        />
                        <label htmlFor="username">Email</label>
                      </div>

                      <div className="form-item">
                        <input
                          type="password"
                          id="password"
                          autoComplete="off"
                          name="password"
                          value={formValues.password}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="password">Password</label>
                      </div>

                      {/* <div className="form-item">
                        <input
                          type="password"
                          name="password"
                          value={formValues.password}
                          onClick={handleChange}
                          id="password"
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="password">Password</label>
                      </div> */}
                    </div>

                    <div className="col-12 text-center">
                      <a
                        className="btn btn-login "
                        style={{ color: "white" }}
                        onClick={handleSubmit}
                      >
                        Log In
                      </a>
                    </div>
                  </form>
                </div>
                <div className="other-log-in">
                  <h6>or</h6>
                </div>
                <div className="log-in-button">
                  {/* <ul>
                    <li style={{ padding: "10px" }}>
                      <a
                        className="btn google-button w-100"
                      // onClick={() => {
                      //   // login();
                      // }}
                      >
                        <img
                          src="/assets/img/google.png"
                          className="blur-up lazyloaded"
                          alt=""
                        />{" "}
                        <h6>Log In with Google</h6>
                      </a>
                    </li>

                    <li style={{ padding: "10px" }}>
                      <a
                        className="btn google-button w-100"
                        onClick={() => {
                          facebook();
                        }}
                      >
                        <img
                          src="/assets/img/facebook.png"
                          className="blur-up lazyloaded"
                          alt=""
                        />{" "}
                        <h6>Log In with Facebook</h6>
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="other-log-in">
                  <h6 />
                </div>
                <div className="sign-up-box">
                  <h4>Don't have an account?</h4>
                  <a href="/registration">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
