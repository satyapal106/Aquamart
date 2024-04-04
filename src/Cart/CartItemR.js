import React, { useState, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, deleteFromCart } from "../Redux/Action/CartAction";
import BassURL from "../Api/Api";
function CartItemsR({ item }) {
  const cartreducerstate = useSelector((state) => state.addToCartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;
  const increaseQuantity = (item, qty) => {
    const newQty = qty + 1;
    console.log(item, newQty);
    if (5 <= qty) {
      return;
    }
    dispatch(addToCartAction(item, newQty));
  };

  const decreaseQuantity = (item, qty) => {
    const newQty = qty - 1;
    if (1 >= qty) {
      return;
    }
    dispatch(addToCartAction(item, newQty));
  };

  // sub total
  var subtotal = cartItems?.reduce(
    (acc, item) => acc + item?.price * item?.qty,
    0
  );

  return (
    <>
      <li className="cart-item">
        <div className="cart-media">
          <a href="#">
            <img src={BassURL + item?.product_image} alt="product" />
          </a>
          <button
            className="cart-delete"
            onClick={() => {
              dispatch(deleteFromCart(item));
            }}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
        <div className="cart-info-group">
          <div className="cart-info">
            <h6 style={{ color: "black" }}>
              <a style={{ textAlign: "justify" }}>{item?.product_title}</a>
            </h6>
            {/* <p>Unit Price - $8.75</p> */}
          </div>

          <div className="cart-action-group">
            <div className="product-action">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="action-minus"
                title="Quantity Minus"
                onClick={() => decreaseQuantity(item, item.qty)}
              >
                <i className="icofont-minus" />
              </motion.button>
              <input
                className="action-input"
                title="Quantity Number"
                type="text"
                name="quantity"
                placeholder={item?.qty}
              />
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="action-plus"
                title="Quantity Plus"
                onClick={() => increaseQuantity(item, item.qty)}
              >
                <i className="icofont-plus" />
              </motion.button>
            </div>
            <h6>{`₹ ${item?.product_price * item?.qty}`}</h6>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItemsR;
