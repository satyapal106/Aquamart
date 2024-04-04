import React, { useRef } from "react";
import { useEffect } from "react";
import FooterMenu from "./FooterMenu";
import "./MobileHeader.css";
import { Location_API_endpoint } from '../Api/Api'
import { Location_API_key } from '../Api/Api'
import axios from "axios";
import { useState } from "react";
import ProfileSlidebar from "./ProfileSlidebar";
import MainBody from "./MainBody";
import { json, Link } from "react-router-dom";
import { motion } from "framer-motion";

function MobileHeader() {
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [location, setLocation] = useState('');

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "100%" },
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude)
    });
    axios.get(`${Location_API_endpoint}latlng=${latitude},${longitude}&key=${Location_API_key}`).then((res) => {
      const locationsData = res.data.results[0].formatted_address
      // console.log(locationsData);
      // Save Location in localStorage

      window.localStorage.setItem('location', JSON.stringify(locationsData))
      setLocation(locationsData);

      // window.localStorage.setItem('userLocation',JSON.stringify(res.data.name))
    }).catch((err) => {
      console.log(err)
    });
  }, [latitude, longitude]);


  const [show, setShow] = useState(false);

  //  GetData From LocalStorage

  // const LocationData = JSON.parse(localStorage.getItem('location'));
  // console.log(LocationData);

  const [showResults, setShowResults] = useState(false);
  function onShows() {

    setShowResults(true)

  }
  function onShow() {
    setShow(true)

  }
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const googleUser = JSON.parse(window.localStorage.getItem("googleUser"));

  // alert(currentUser)

  //  user Location
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ["place_id", "geometry", "name", "formatted_address"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }, []);


  // Storeing Data Functionality

  const [storelocation, setStoreLocation] = useState('');
  const onChangeLocaiton = (e) => {
    setStoreLocation(e.target.value);


  }
  console.log(storelocation)




  return (
    <>
      <header className="headers">
        <div className="logo-wraps">
          {
            currentUser ? (
              <>
                <img
                  src="/assets/category.png"
                  alt=""
                  style={{ marginTop: "-4px", width: "24px" }}
                  onClick={onShow}
                />
              </>

            ) : googleUser ? (<>

              <img
                src="/assets/category.png"
                alt=""
                style={{ marginTop: "-4px", width: "24px" }}
                onClick={onShow}
              />
            </>) : (<><a href="/mobile-login"> <img
              src="/assets/category.png"
              alt=""
              style={{ marginTop: "-4px", width: "24px" }}
            /></a></>)
          }

          <a href="/">
            {" "}
            {/* <h4 style={{
              fontSize: "20px", fontFamily: "'Mulish', sans-serif",
              fontWeight: '900'
            }}>Aqua mart</h4> */}
            <img
              className="logos pt-2"
              src="/assets/img/logo.webp"
              alt="logo"
              style={{ width: "40%" }}
            />
          </a>
        </div>
        <div className="avatar-wraps">
          <i className="fa fa-map-marker mb-2" aria-hidden="true" style={{ color: "rgb(0 81 184 / 78%)" }} />
          <div><span className="addressFont font-sm mt-2" style={{ color: "blaack", fontWeight: "900" }} onClick={onShows}>
            {location}
          </span>
          </div>
          {
            currentUser ? (<><a onClick={onShow}>

              <img
                className="avatars"
                src="/assets/img/profile.png"
                alt="avatar"
              />
            </a></>) : googleUser ? (<> <a onClick={onShow}>
              {" "}
              <img
                className="avatars"
                src="/assets/img/profile.png"
                alt="avatar"
              />
            </a></>) : (<><Link to="/mobile-login">
              <i className="avatars"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87743 15.2062C6.03343 15.2062 2.75043 15.7872 2.75043 18.1152C2.75043 20.4422 6.01243 21.0452 9.87743 21.0452C13.7214 21.0452 17.0044 20.4632 17.0044 18.1362C17.0044 15.8092 13.7424 15.2062 9.87743 15.2062Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87745 11.8859C12.4134 11.8859 14.4454 9.85291 14.4454 7.31791C14.4454 4.78191 12.4134 2.74991 9.87745 2.74991C7.34245 2.74991 5.30945 4.78191 5.30945 7.31791C5.30945 9.85291 7.34245 11.8859 9.87745 11.8859Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.2041 8.6691V12.6791" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.25 10.674H17.16" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </i>
            </Link></>)
          }


        </div>
      </header>
      {
        show ? <ProfileSlidebar hide={setShow} /> : null
      }
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
          <h5 className="offcanvas-title "> <i className="fa fa-map-marker mr-2 " aria-hidden="true" />
            Enter Location Manually</h5>
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
        <div className='container bg-white'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="review-box">

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
                    ref={inputRef}
                    type="text"
                    placeholder="Enter Your Location"
                    onChange={onChangeLocaiton}
                    autoComplete="on"
                    value={storelocation}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
        {/* <hr style={{ backgroundColor: "#dad9d9", height: "20px" }} /> */}
        <div className="review-box">
          <section style={{ height: "80vh", overflowY: "hidden" }}>
            <div className=''></div>
          </section>



        </div>




      </motion.div>
      <div className={showResults ? "modal-backdrop fade show" : "modal-backdrop fade "}
        style={{ display: showResults ? "block" : 'none' }}

      />

      <MainBody />
      <FooterMenu />



    </>
  );
}

export default MobileHeader;
