import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OrderSuccess.css';
import { isMobile } from "react-device-detect";
import Footer from '../Component/Footer';
import Navbar from '../Navbar/Navbar';

function OrderSuccess() {
  const [show, setShow] = useState(false);
  function onShow() {
    setShow(true)

  }
  const addToServiceCartReducer = useSelector((state) => state?.addToServiceCartReducer);
  const { cartItemService } = addToServiceCartReducer;
  var subtotal = cartItemService?.reduce(
    (acc, item) => acc + item?.service_price * item?.qty,
    0
  );

  const addToCartReducer = useSelector((state) => state?.addToCartReducer);
  const { cartItems } = addToCartReducer;
  var Productsubtotal = cartItems?.reduce(
    (acc, item) => acc + item?.product_price * item?.qty,
    0
  );
  const cartItemss = JSON.parse(window.localStorage.getItem("cartItems"));

  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderstate;

  const orderSubtotal = JSON.parse(window.localStorage.getItem('orderplace'))

  return (
    <>

      {
        isMobile ? (<>

          <header className="headers">

            <div className="logo-wraps">
              <img
                src="/assets/category.png"
                alt=""
                style={{ marginTop: "-4px", width: "24px" }}
                onClick={onShow}
              />


              <a href="/">
                {" "}
                <h4 style={{
                  fontSize: "20px", fontFamily: "'Mulish', sans-serif",
                  fontWeight: '900'
                }}>Aqua mart</h4>
                {/* <img
      className="logos"
      src="assets/images/logo/logo.png"
      alt="logo"
    /> */}
              </a>
            </div>
            <div className="avatar-wraps">

              <a href='/'>
                {" "}
                <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </i>
              </a>
            </div>
          </header>
          <main className="main-wrap order-success-page mb-xxl">
            {/* Banner Section Start */}
            <section className="banner-section">
              <div className="banner-wrap">
                <img src="/assets/icons/svg/order.svg" alt="order-success" />
              </div>
              <div className="content-wrap">
                <h1 className="font-lg title-color">Thank you for your order!</h1>
                <p className="font-sm content-color">
                  your order has been placed successfully. your order ID is #548475151
                </p>
              </div>
            </section>
          </main>

          <footer className="footer-wrap footer-button">
            <a href="/" className="font-md">Continue Shopping</a>
          </footer>


        </>) : (<>

          {/* <Navbar />
          <div
            className="page-title p-0 h-50"
            style={{
              background:
                "#f4f4f4 url(/assets/icons/svg/order.svg)",
              width: "100%",
              height: "500px !important",
              backgroundRepeat: " repeat",
              backgroundSize: " contain !important"

            }}
            data-overlay={5}
          >

          </div> */}

          <main className="main-wrap order-success-page mb-xxl">
            {/* Banner Section Start */}
            <section className="banner-section">
              <div className="banner-wrap ">
                <img src="/assets/icons/svg/order.svg" alt="order-success" className='w-25 p-3' />
              </div>
              <div className="content-wrap">
                <h1 className="font-lg title-color">Thank you for your order!</h1>
                <p className="font-sm content-color">
                  your order has been placed successfully. your order ID is #548475151
                </p>
              </div>
            </section>

            <div className='text-center'>
              <button type="button" class="btn btn-primary "><a href="/" style={{ color: "white" }}>continue shopping</a> </button>



            </div>




          </main>
          <Footer />




        </>)
      }







    </>
  )
}

export default OrderSuccess