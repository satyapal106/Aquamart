import React, { useEffect, useState } from "react";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import { motion } from "framer-motion";
import CartItemsR from "./CartItemR";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CartItem({ hide }) {
  const addtocartreducer = useSelector((state) => state?.addToCartReducer);
  const { cartItems } = addtocartreducer;
  const dispatch = useDispatch();
  //  hide and show add to cart

  function hides() {
    hide(false);
  }
  var subtotal = cartItems?.reduce(
    (acc, item) => acc + item?.product_price * item?.qty,
    0
  );
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

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
            <span>total item ({cartItems.length})</span>
          </div>
          <button className="cart-close" onClick={hides}>
            <i className="icofont-close" />
          </button>
        </div>

        {cartItems && cartItems?.length > 0 ? (
          <>
            <ul className="cart-list">
              {cartItems &&
                cartItems?.map((item) => {
                  return (
                    <>
                      {/* {console.log(item)} */}

                      <CartItemsR key={item.id} item={item} />
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
  );
}

export default CartItem;
