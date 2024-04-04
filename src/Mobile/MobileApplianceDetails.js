import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BassURl from "../Api/Api";
import MobileApplianceDetailChild from "./MobileApplianceDetailChild";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import MobileError from "./MobileError";
import "./MobileError.css";
import FooterMenu from "./FooterMenu";

function MobileApplianceDetails() {
  const param = useParams();
  //   service by catergory api

  const [appliance, setappliance] = useState([]);
  useEffect(() => {
    axios
      .get(`${BassURl}api/appliances-shop`)
      .then((res) => {
        setappliance(res.data.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const cartItemss = JSON.parse(window.localStorage.getItem("cartItems"));
  const addToCartReducer = useSelector((state) => state?.addToCartReducer);
  const { cartItem } = addToCartReducer;

  // active class
  const [activeId, setActiveId] = useState();

  // service by category

  const [applianceByCategory, setApplianceByCategory] = useState("");
  useEffect(() => {
    axios
      .get(`${BassURl}api/product-by-category/${param.id}`)
      .then((res) => {
        setApplianceByCategory(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);
  console.log(applianceByCategory);

  // sub total
  // var subtotal = cartItemService?.reduce(
  //     (acc, item) => acc + item?.service_price * item?.qty,
  //     0
  // );

  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  var subtotal = cartItemss?.reduce(
    (acc, item) => acc + item?.product_price * item?.qty,
    0
  );

  console.log(subtotal);

  return (
    <>
      <header className="header">
        <div className="logo-wrap">
          <a href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.75 7.66591L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66591C21.25 4.63591 19.111 2.74991 16.084 2.74991L7.916 2.74991C4.889 2.74991 2.75 4.63591 2.75 7.66591Z"
                stroke="#200E32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.91406 11.9999L16.0861 11.9999"
                stroke="#200E32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6777 15.7479L7.91373 11.9999L11.6777 8.25192"
                stroke="#200E32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="/">
            {" "}
            <img
              className="fk-logo"
              src="/assets/img/logo.webp"
              alt="logo"
              style={{ width: "35px !important", paddingTop: "10px" }}
            />
          </a>
          <a href="/">
            {" "}
            <img
              className="fk-logo fk-logo-w"
              src="assets/images/logo/fk-logo-w.png"
              alt="logo"
            />
          </a>
        </div>
        {/* <h1 className="content-color font-sms">{param?.id == service?.id ? (service?.service_title) : ""}</h1> */}
        <div className="avatar-wrap">
          <a href="/">
            <lord-icon
              className="lord-icon"
              src="assets/icons/gift.json"
              trigger="loop"
              stroke={70}
              colors="primary:#0baf9a,secondary:#0baf9a"
            />
          </a>
        </div>
      </header>

      {applianceByCategory.code == 200 ? (
        applianceByCategory.data.data?.map((data) => {
          return (
            <>
              {" "}
              <MobileApplianceDetailChild data={data} />
            </>
          );
        })
      ) : (
        <>
          <MobileError />
        </>
      )}
      {cartItemss && cartItemss.length > 0 ? (
        <>
          <motion.footer
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 2, y: 0 }}
            exit={{ opacity: 0, y: 400 }}
            className="footer-wrap shops"
          >
            <ul className="footer footers">
              <li className="footer-item">
                <span className="font-xs">{cartItemss.length} Items</span>{" "}
                <span className="font-sm">₹ {subtotal}</span>
              </li>
              <li className="footer-item">
                {currentUser ? (
                  <>
                    {" "}
                    <Link to="/mobile-cart" className="font-md">
                      View Cart{" "}
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
                        className="feather feather-chevron-right"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </>
                ) : (
                  <>
                    <a href="/mobile-login" className="font-md">
                      View Cart{" "}
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
                        className="feather feather-chevron-right"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </>
                )}
              </li>
            </ul>
          </motion.footer>
        </>
      ) : (
        <FooterMenu />
      )}
    </>
  );
}

export default MobileApplianceDetails;
