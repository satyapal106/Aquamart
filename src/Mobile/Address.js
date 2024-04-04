import React from 'react';
import { Link } from 'react-router-dom';
import AddAddress from './AddAddress';
import './Address.css';
import { motion } from "framer-motion";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addNewAdress } from '../Redux/Action/UserAction';

function Address() {
    const dispatch = useDispatch();
    const [showResults, setShowResults] = React.useState(false);
    function onShow() {

        setShowResults(true)

    }
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "100%" },
    }

    const address = JSON.parse(window.localStorage.getItem('currentUser'));
    const getAddress = address.address;

    const [activeId, setActiveId] = useState();
    window.localStorage.setItem('address_id', JSON.stringify(activeId));
    let initialValues = {
        pincode: "",
        address: "",
        city: "",
        state: "",
        country: "null",
        latitude: "null",
        longitude: "null",
        type: "",

        user_id: address?.id


    }

    const [UserAddress, setUserAddress] = useState(initialValues);
    // const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserAddress({ ...UserAddress, [name]: value });
        console.log(UserAddress);
    };

    console.log(UserAddress);

    // Address post
    const addNewAddressReducer = useSelector(state => state.addNewAdressReducer);
    const { loading, error } = addNewAddressReducer;
    function postAddress(e) {
        e.preventDefault()

        dispatch(addNewAdress(UserAddress))
    }


    const [getAdress, setGetAdress] = useState();
    useEffect(() => {
        axios.get(`https://dash.aquamart.co.in/api/user-address/${address?.id}`).then((res) => {
            console.log(res.data.data)
            setGetAdress(res.data.data)
        }).catch((error) => {
            console.log('somthing went wrong')
        })

    }, [])





    return (
        <>

            <header className="header">
                <div className="logo-wrap">
                    <a href="/">
                        <i className="icli">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.75 7.66591L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66591C21.25 4.63591 19.111 2.74991 16.084 2.74991L7.916 2.74991C4.889 2.74991 2.75 4.63591 2.75 7.66591Z" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.91406 11.9999L16.0861 11.9999" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.6777 15.7479L7.91373 11.9999L11.6777 8.25192" stroke="#200E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </i>
                    </a>
                    <h6 className="title-color font-md">Select delivery address</h6>
                </div>
            </header>

            <main className="main-wrap address2-page mb-xxl">
                {/* Address Section Start */}
                <section className="pt-0">
                    <button

                        className="d-block btn-outline-grey"
                        onClick={onShow}
                    // data-bs-toggle="offcanvas"
                    // data-bs-target="#add-address"    
                    // aria-controls="add-address"

                    >
                        + Add New Address
                    </button>
                    <div className="address-wrap">
                        {/* Address Star */}
                        {
                            getAdress && getAdress?.map((data, index) => {
                                return (<>
                                    <div className={activeId === data.id ? "address-box active" : 'address-box'} style={{ height: "130px" }} onClick={() => setActiveId(data.id)}>
                                        <div className="conten-box">
                                            <div className="heading">
                                                <i className="icli">

                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.80408 15.477C2.80408 15.477 2.94608 17.215 2.97908 17.763C3.02308 18.498 3.30708 19.319 3.78108 19.889C4.45008 20.697 5.23808 20.982 6.29008 20.984C7.52708 20.986 16.5221 20.986 17.7591 20.984C18.8111 20.982 19.5991 20.697 20.2681 19.889C20.7421 19.319 21.0261 18.498 21.0711 17.763C21.1031 17.215 21.2451 15.477 21.2451 15.477" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.49597 5.32949V4.95849C8.49597 3.73849 9.48397 2.75049 10.704 2.75049H13.286C14.505 2.75049 15.494 3.73849 15.494 4.95849L15.495 5.32949" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M11.995 16.6782V15.3842" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.74988 8.38909V11.8561C4.66788 13.1211 6.96588 14.0071 9.48788 14.3581C9.78988 13.2571 10.7829 12.4501 11.9899 12.4501C13.1779 12.4501 14.1909 13.2571 14.4729 14.3681C17.0049 14.0171 19.3119 13.1311 21.2399 11.8561V8.38909C21.2399 6.69509 19.8769 5.33109 18.1829 5.33109H5.81688C4.12288 5.33109 2.74988 6.69509 2.74988 8.38909Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </i>
                                                <h2 className="title-color font-md">{data.type}</h2>
                                                <span className="badges-round font-white bg-theme-theme font-xs">
                                                    Default
                                                </span>
                                            </div>
                                            <h3 className="title-color font-sm">{data?.city}</h3>
                                            <p className="content-color font-sm">
                                                {data?.address}
                                            </p>
                                        </div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14229.957144260019!2d80.97605485!3d26.919698949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665083623011!5m2!1sen!2sin"
                                            width={100}
                                            height={100}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />

                                    </div>


                                </>)

                            })
                        }


                        {/* Address End */}
                        {/* Address Star */}

                        {/* Address End */}
                    </div>
                </section>
                {/* Address Section End */}
                <footer className="footer-wrap footer-button">
                    <Link to="/payment" className="font-md">
                        Proceed to Payment
                    </Link>
                </footer>
            </main>

            <motion.div

                animate={showResults ? "open" : "closed"}
                variants={variants}



                className={showResults ? "offcanvas all-review-offcanvas offcanvas-bottom show " : "offcanvas all-review-offcanvas offcanvas-bottom"}

                tabIndex={-1}
                id="all-review"
                aria-labelledby="all-review"
                data-bs-toggle=""
                style={{ visibility: showResults ? "visible" : 'hidden' }}
                aria-hidden="true"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Add Address Review</h5>
                    <span data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { setShowResults(false) }}>
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
                                name='state'
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
                                name='city'
                                value={UserAddress.city}
                                onChange={handleChange}

                                placeholder="City"
                                className="form-control"
                            />

                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name='address'
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
                                name='type'
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
                            type='submit'
                            onClick={postAddress}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </motion.div>
            <div className={showResults ? "modal-backdrop fade show" : "modal-backdrop fade "}
                style={{ display: showResults ? "block" : 'none' }}

            />

        </>
    )
}

export default Address