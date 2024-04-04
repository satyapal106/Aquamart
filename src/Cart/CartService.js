import React, { useEffect, useState } from "react";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import { motion } from "framer-motion";
import CartServiceR from "./CartServiceR";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartService({ hide }) {
    // const addtocartreducer = useSelector((state) => state?.addToCartReducer);
    // const { cartItems } = addtocartreducer;
    // const dispatch = useDispatch();
    const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

    const addToServiceCartReducer = useSelector((state) => state?.addToServiceCartReducer);
    const { cartItemService } = addToServiceCartReducer;

    var subtotal = cartItemService?.reduce(
        (acc, item) => acc + item?.service_price * item?.qty,
        0
    );

    function hides() {
        hide(false);
    }



    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 2, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                className="cart-sidebar"
            >
                <div className="cart-header">
                    <div className="cart-total">
                        <i className="fa fa-shopping-cart" />
                        <span>total item ({cartItemService.length})</span>
                    </div>
                    <button className="cart-close" onClick={hides}>
                        <i className="icofont-close" />
                    </button>
                </div>

                {cartItemService && cartItemService?.length > 0 ? (
                    <>
                        <ul className="cart-list">
                            {cartItemService &&
                                cartItemService?.map((item) => {
                                    return (
                                        <>
                                            {/* {console.log(item)} */}

                                            <CartServiceR key={item.id} item={item} />
                                        </>
                                    );
                                })}
                        </ul>

                        <div className="cart-footer">
                            {/* <button className="coupon-btn" >Do you have a coupon code?</button> */}
                            <form className="coupon-form">
                                <input type="text" placeholder="Enter your coupon code" />
                                <button type="submit">
                                    <span>apply</span>
                                </button>
                            </form>
                            {
                                currentUser ? (<><Link className="cart-checkout-btn" to="/check-out-product">
                                    <span className="checkout-label">Proceed to Checkout</span>
                                    <span className="checkout-price">₹ {subtotal}</span>
                                </Link></>) : (<> <Link className="cart-checkout-btn" to="/login">
                                    <span className="checkout-label">Login To Check Out</span>
                                    <span className="checkout-price">₹ {subtotal}</span>
                                </Link>    </>)
                            }

                        </div>
                    </>
                ) : (
                    <div className="EmptyCart">
                        <img src="/assets/empty-cart.gif" className="EmptyCartImg" alt="" />
                        <p className="EmptyCartPara"> Add Some Product To Your Cart</p>
                    </div>
                )}
            </motion.div>









        </>
    )
}

export default CartService