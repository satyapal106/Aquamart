import React from 'react';
import './MobileLogin.css';
import showPwdImg from "../Auth/show-password.svg";
import hidePwdImg from "../Auth/hide-password.svg";
import { useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";

import { app } from "../firebase.config";
import { googleLoginUser, loginUser } from '../Redux/Action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MobileLogin() {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const loginreducer = useSelector(state => state.loginUserReducer);
    const { loading, error } = loginreducer;
    const dispatch = useDispatch();

    // Google Login
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();



    const handleGoogleSignIn = async () => {
        const { user: { accessToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
        dispatch(googleLoginUser(providerData[0]))


    }

    let initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    function Fromlogin(e) {
        e.preventDefault()

        dispatch(loginUser(formValues))
    };

    return (
        <>
            <div className="bg-pattern-wrap ratio2_1">
                {/* Background Image */}
                <div
                    className="bg-patter bg-size"

                >
                    <img
                        src="https://stormwater.pca.state.mn.us/images/f/f0/Water_gif_test.gif"
                        className="bg-img"
                        alt="pattern"
                        height={200}
                        style={{ visibility: "hidden" }}

                    />
                </div>
            </div>


            <main className="main-wrap login-page mb-xxl">
                <Link to="/"> <img className="logos" src="/assets/img/logo2.webp" alt="logos" /></Link>

                <img className="logos logos-w" src="/assets/img/logo2.webp" alt="logos" />
                <h1 className='logo' style={{ fontFamily: "Mulish", fontWeight: "bold" }}>Aquamart</h1>
                <p className="font-sm content-color">
                    Online Supermarket for all your daily needs. you are just One Click away
                    from your all needs at your door step.
                </p>
                {/* Login Section Start */}
                <section className="login-section p-0">
                    {/* Login Form Start */}

                    {error && (<><div className="alert alert-danger" role="alert">
                       Please Check Email or Password
                    </div></>)}
                    {loading && (<div className="spinner-border" />
                    )}
                    <form

                        className="custom-form"
                        onSubmit={Fromlogin}
                    >
                        <h1 className="font-md title-color fw-600">Login Account</h1>
                        {/* Email Input start */}
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email Address"
                                name='email'
                                value={formValues.email}
                                onChange={handleChange}
                                required=""
                                className="form-control"
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
                                className="feather feather-at-sign"

                                style={{position:"relative",top:"-40px",left:"135px"}}
                            >
                                <circle cx={12} cy={12} r={4} />
                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                                
                            </svg>
                        </div>
                        {/* Email Input End */}
                        {/* Password Input start */}
                        <div className="input-box">
                            <input
                                type={isRevealPwd ? "text" : "password"}
                                placeholder="Password"
                                name='password'
                                value={formValues.password}
                                onChange={handleChange}
                                required=""
                                className="form-control"
                            />

                            <img className='showHidePassword'
                                style={{
                                    width: "30px",
                                    position: "relative",
                                    left: "140px",
                                    top: "-46px",
                                    cursor: "pointer",
                                }}
                                title={
                                    isRevealPwd ? "Hide password" : "Show password"
                                }
                                src={isRevealPwd ? showPwdImg : hidePwdImg}
                                onClick={() =>
                                    setIsRevealPwd((prevState) => !prevState)
                                }
                            />
                        </div>
                        {/* Password Input End */}
                        <a                       
                            className="content-color font-sm forgot mb-3"
                        >
                            Forgot Password ?
                        </a>
                        <button type="submit" className="btn-solid">
                            Sign in
                        </button>
                        <span className="content-color font-sm d-block text-center fw-600">
                            If you are new,{" "}
                            <a href="/mobile-signup" className="underline">
                                Create Now
                            </a>
                        </span>
                    </form>
                    {/* Login Form End */}
                    {/* Social Section Start */}
                    <div className="socila-section">
                        <span>
                            <span className="font-sm fw-600 font-theme"> Or login with </span>
                        </span>
                        <div className="social-wrap">
                            <a href="javascript:void(0)" className="font-md title-color fw-600">
                                <img src="/assets/icons/svg/phone.png" alt="phone" /> Continue with
                                Phone{" "}
                            </a>
                            <a
                                className="font-md title-color fw-600"
                                onClick={() => { handleGoogleSignIn() }}

                            >
                                <img src="/assets/icons/svg/google.png" alt="phone" /> Continue with
                                Google{" "}
                            </a>
                        </div>
                    </div>
                    {/* Social Section End */}
                </section>
                {/* Login Section End */}
            </main>




        </>
    )
}

export default MobileLogin