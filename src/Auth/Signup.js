import React, { useState } from "react";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";
import axios from "axios";
import { useEffect } from "react";
import BassURl from "../Api/Api";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { app } from "../firebase.config";


function Signup() {
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);


  let initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    salt_password: "",
    photoURL: "null"
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      // let alldata={
      //   formValues, dropdata
      // }
      // console.log(alldata)
      axios
        .post(`${BassURl}api/signup`, formValues)
        .then((res) => {
          if (res.data.code == 200) {
            localStorage.setItem("currentUser", JSON.stringify(res.data.data));
            window.location.href = "/";
          } else {
            alert(res.data.msg);
            window.location.href = "/login";
          }
        })
        // catch error if their is any error
        .catch((err) => {
          console.log(err);
        });

      // console.log(alldata)

      // console.log(formValues);
    }
  }, [formErrors]);

  let handleSubmit = (e) => {
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const phregex = /^[0-9]{10}$/;
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.mobile) {
        errors.mobile = "Phone Number is required";
      } else if (!phregex.test(values.mobile)) {
        errors.mobile = "Enter 10 Digit Phone Number  ";
      }
      return errors;
    };

    e.preventDefault();

    setFormErrors(validate(formValues));

    setIsSubmit(true);
  };

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

  return (
    <>
      <section className="log-in-section background-image-2 section-b-space mt-5">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img
                  src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?w=826&t=st=1663679874~exp=1663680474~hmac=62b504847ba4ea5107a6dc7cb07f344b4f7ff13347a66a1a366fd2abd7d8b5f4"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 me-auto">
              <div className="log-in-box">
                <div className="log-in-title text-center">
                  <a href="/">
                    <img
                      src="/assets/img/logo.webp"
                      className="logo text-center"
                    />




                  </a>

                  <h3>Welcome To Aquamart</h3>

                  <h4>Sign Up Your Account</h4>
                </div>
                <div className="input-box">
                  <form onSubmit={handleSubmit}>
                    <div className="form">
                      <div className="form-item">
                        <input
                          type="text"
                          id="username"
                          autoComplete="off"
                          name="first_name"
                          value={formValues.first_name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="username">First Name</label>
                      </div>

                      <div className="form-item">
                        <input
                          type="text"
                          id="username"
                          autoComplete="off"
                          name="last_name"
                          value={formValues.last_name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="username">Last Name</label>
                      </div>
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
                      <p>{formErrors.email}</p>
                      <div className="form-item">
                        <input
                          type="tel"
                          id="username"
                          autoComplete="off"
                          name="mobile"
                          value={formValues.mobile}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="username">Phone Number</label>
                      </div>
                      <p>{formErrors.mobile}</p>
                      <div className="form-item">
                        <input
                          type={isRevealPwd ? "text" : "password"}
                          // onChange={(e) => setPassword(e.target.value)}
                          value={formValues.password}
                          onChange={handleChange}
                          // value={password}
                          name="password"
                          id="password"
                          autoComplete="off"
                          required
                        />

                        <label htmlFor="password">Password</label>
                        <img
                          style={{
                            width: "30px",
                            position: "relative",
                            left: "450px",
                            top: "-46px",
                            cursorr: "pointer",
                          }}
                          title={
                            isRevealPwd ? "Hide password" : "Show password"
                          }
                          src={isRevealPwd ? hidePwdImg : showPwdImg}
                          onClick={() =>
                            setIsRevealPwd((prevState) => !prevState)
                          }
                        />
                      </div>
                      <div className="form-item">
                        <input
                          type="password"
                          id="password"
                          autoComplete="off"
                          name="salt_password"
                          value={formValues.salt_password}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="password">Confirm password</label>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        className="btn btn-login "
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Sign Up
                      </button>
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
                        //   login();
                        // }}
                      >
                        <img
                          src="/assets/img/google.png"
                          className="blur-up lazyloaded"
                          alt=""
                        />{" "}
                        <h6>Sign Up with Google</h6>
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
                        <h6>Sign Up with Facebook</h6>
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="other-log-in">
                  <h6 />
                </div>
                <div className="sign-up-box">
                  <h4>You have an account?</h4>
                  <a href="/Login">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
