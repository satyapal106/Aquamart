import React from "react";
import { useDispatch } from "react-redux";
import { addToServiceCartAction } from "../Redux/Action/CartAction";

function ServiceAdd(data) {
  console.log(data.data);
  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToServiceCartAction(data.data, 1));
  }
  return (
    <div class="prt-view" onClick={addtocart} style={{padding:"4px 65px"}}>
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      &nbsp; Add to cart
    </div>
  );
}

export default ServiceAdd;
