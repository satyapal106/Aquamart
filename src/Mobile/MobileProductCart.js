import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BassURl from '../Api/Api';
import { deleteFromCart, deleteServiceFromCart } from '../Redux/Action/CartAction';

import './MobileCart.css'

function MobileProductCart() {
    const dispatch = useDispatch();
    const addToCartReducer = useSelector((state) => state?.addToCartReducer);
    const { cartItems } = addToCartReducer;
    var subtotal = cartItems?.reduce(
        (acc, item) => acc + item?.product_price * item?.qty,
        0
    );
    
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
                        </i></a>
                    <h6 className="title-color font-md font-weight-bold">My Cart <span className="font-sm content-color">({cartItems?.length} Items)</span></h6>
                </div>
                <div className="avatar-wrap">
                    <a>
                        <i className=" icli">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </i>
                    </a>
                </div>
            </header>


            {/* cartItem */}
            <main className="main-wrap cart-page mb-xxl">
                {/* Cart Item Section Start  */}
                <div className="cart-item-wrap pt-0">
                    {

                        cartItems && cartItems?.map((data) => {
                            return (<>

                                <div className="swipe-to-show">
                                    <div className="product-list media cart-item">
                                        <div className="cart-media">
                                            <a>
                                                <img src={`${BassURl}${data.product_image}`} alt="product" />
                                            </a>
                                            <button
                                                className="cart-delete"
                                                onClick={() => {
                                                    dispatch(deleteFromCart(data));
                                                }}
                                            >
                                                <i className="fa fa-trash" />
                                            </button>
                                        </div>
                                        <div className="media-body">
                                            <a  className="font-sm">
                                                {data?.product_title}
                                            </a>
                                            <span className="content-color font-xs">Qty :{data?.qty}</span>
                                            <span className="title-color font-sm">
                                                ₹ {data?.product_price}{" "}

                                            </span>
                                            <div className="plus-minus">
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
                                                    className="feather feather-minus sub"
                                                >
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                </svg>
                                                <input type="number" defaultValue={1} min={0} max={10} />
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
                                                    className="feather feather-plus add"
                                                >
                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </>)
                        })




                    }



                </div>
                {/* Cart Item Section End  */}
                {/* Coupons Section Start */}
                <section className="pt-0 coupon-ticket-wrap">
                    <div
                        className="coupon-ticket"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offer-1"
                        aria-controls="offer-1"
                    >
                        <div className="media">
                            <div className="off">
                                <span>50</span>
                                <span>
                                    <span>%</span>
                                    <span>OFF</span>{" "}
                                </span>
                            </div>
                            <div className="media-body">
                                <h2 className="title-color">on your first order</h2>
                                <span className="content-color">on order above $250.00</span>
                            </div>
                            <div className="big-circle">
                                <span />
                            </div>
                            <div className="code">
                                <span className="content-color">Use Code: </span>
                                <a href="javascript:void(0)">SCD450</a>
                            </div>
                        </div>
                        <div className="circle-5 left">
                            <span className="circle-shape" />
                            <span className="circle-shape" />
                        </div>
                        <div className="circle-5 right">
                            <span className="circle-shape" />
                            <span className="circle-shape" />
                        </div>
                    </div>
                </section>
                {/* Coupons Section End  */}
                {/* Order Detail Start */}
                <section className="order-detail pt-0">
                    <h3 className="title-2">Order Details</h3>
                    {/* Detail list Start */}
                    <ul>
                        <li>
                            <span>Bag total</span>
                            <span>$220.00</span>
                        </li>
                        <li>
                            <span>Bag savings</span>
                            <span className="font-theme">-$20.00</span>
                        </li>
                        <li>
                            <span>Coupon Discount</span>
                            <a className="font-danger">
                                Apply Coupon
                            </a>
                        </li>
                        <li>
                            <span>Delivery</span>
                            <span>$50.00</span>
                        </li>
                        <li>
                            <span>Total Amount</span>
                            <span>₹ {subtotal}</span>
                        </li>
                    </ul>
                    {/* Detail list End */}
                </section>
                {/* Order Detail End */}

                <footer className="footer-wrap footer-button">
                    <a href="/address" className="font-md">Proceed to Checkout</a>
                </footer>

            </main>


        </>
    )
}

export default MobileProductCart