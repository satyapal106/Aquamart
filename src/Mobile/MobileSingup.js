import React from 'react';
import './MobileLogin.css';
import showPwdImg from "../Auth/show-password.svg";
import hidePwdImg from "../Auth/hide-password.svg";
import { useState } from 'react';
import { app } from "../firebase.config";
import { googleLoginUser, loginUser } from '../Redux/Action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import { useEffect } from 'react';
import BassURl from '../Api/Api';
import axios from 'axios';

function MobileSingup() {
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

    let initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        password: "",
        salt_password: "",
        photoURL:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
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
            axios
                .post(`${BassURl}api/signup`, formValues)
                .then((res) => {
                    if (res.data.code == 200) {
                        window.localStorage.setItem("currentUser", JSON.stringify(res.data.data));
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
                <img className="logos" src="http://aquamart.co.in/assets/img/logo.webp" alt="logos" />
                <img className="logos logos-w" src="http://aquamart.co.in/assets/img/logo.webp" alt="logos" />
                <h1 className='logo' style={{ fontFamily: "Mulish", fontWeight: "bold" }}>Aquamart</h1>
                <p className="font-sm content-color">
                    Online Supermarket for all your daily needs. you are just One Click away
                    from your all needs at your door step.
                </p>
                {/* Login Section Start */}
                <section className="login-section p-0">
                    {/* Login Form Start */}

                    {error && (<><div className="alert alert-danger" role="alert">
                        Something Went Worng
                    </div></>)}
                    {loading && (<div className="spinner-border" />
                    )}
                    <form

                        className="custom-form"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="font-md title-color fw-600">Create Account</h1>
                        {/* Email Input start */}


                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Firest Name"
                                name='first_name'
                                value={formValues.first_name}
                                onChange={handleChange}
                                required=""
                                className="form-control"
                            />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5789" cy="7.27803" r="4.77803" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Last name"
                                name='last_name'
                                value={formValues.last_name}
                                onChange={handleChange}
                                required=""
                                className="form-control"
                            />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5789" cy="7.27803" r="4.77803" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 18.7014C3.99873 18.3655 4.07385 18.0337 4.2197 17.7311C4.67736 16.8158 5.96798 16.3307 7.03892 16.111C7.81128 15.9462 8.59431 15.836 9.38217 15.7815C10.8408 15.6533 12.3079 15.6533 13.7666 15.7815C14.5544 15.8367 15.3374 15.9468 16.1099 16.111C17.1808 16.3307 18.4714 16.77 18.9291 17.7311C19.2224 18.3479 19.2224 19.064 18.9291 19.6808C18.4714 20.6419 17.1808 21.0812 16.1099 21.2918C15.3384 21.4634 14.5551 21.5766 13.7666 21.6304C12.5794 21.7311 11.3866 21.7494 10.1968 21.6854C9.92221 21.6854 9.65677 21.6854 9.38217 21.6304C8.59663 21.5773 7.81632 21.4641 7.04807 21.2918C5.96798 21.0812 4.68652 20.6419 4.2197 19.6808C4.0746 19.3747 3.99955 19.0401 4.00002 18.7014Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>




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
                            >
                                <circle cx={12} cy={12} r={4} />
                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                            </svg>
                        </div>
                        <div className="input-box">
                            <input
                                type="tel"
                                placeholder="Phone number"
                                name='mobile'
                                value={formValues.mobile}
                                onChange={handleChange}
                                required=""
                                className="form-control"
                            />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.98995 4.87351C3.30627 4.34875 5.05018 2.44377 6.2929 2.50127C6.66469 2.53311 6.99334 2.75698 7.26037 3.01783H7.2614C7.87351 3.61756 9.62974 5.88094 9.72834 6.35745C9.97175 7.52611 8.57806 8.19978 9.00428 9.37769C10.0909 12.0364 11.9632 13.9086 14.6232 14.994C15.8002 15.4212 16.4739 14.0287 17.6427 14.2711C18.1192 14.3707 20.3839 16.1257 20.9826 16.7388V16.7388C21.2425 17.0048 21.4684 17.3344 21.4992 17.7062C21.5454 19.0155 19.5222 20.7829 19.1278 21.0088C18.1973 21.6753 16.9833 21.663 15.5034 20.975C11.3737 19.2569 4.77391 12.782 3.02384 8.49657C2.35421 7.02496 2.30902 5.8029 2.98995 4.87351Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.5654 2.75C18.2674 3.161 21.1904 6.081 21.6064 9.782" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.5654 6.293C16.3354 6.638 17.7184 8.021 18.0634 9.791" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                                    left: "170px",
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
                        <div className="input-box">
                            <input
                                type={isRevealPwd ? "text" : "password"}
                                placeholder="Password"
                                name='salt_password'
                                value={formValues.salt_password}
                                onChange={handleChange}
                                required=""
                                className="form-control"
                            />

                            <img className='showHidePassword'
                                style={{
                                    width: "30px",
                                    position: "relative",
                                    left: "170px",
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
                            Sign Up
                        </button>
                        <span className="content-color font-sm d-block text-center fw-600">
                            If you Have Account ,{" "}
                            <a href="/mobile-login" className="underline">
                                Login{" "}
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

export default MobileSingup