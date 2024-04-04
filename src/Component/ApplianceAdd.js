import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../Redux/Action/CartAction";

function ApplianceAdd({ data }) {
  // console.log(data.data);
  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCartAction(data, 1));
  }
  return (
    <>
      <div class="prt-view" onClick={addtocart}>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        &nbsp; Add to cart
      </div>
    </>
  );
}

export default ApplianceAdd;
