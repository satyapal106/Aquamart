import axios from "axios";
import BassURl from "../../Api/Api";

export const placeOrder = (subtotal, PaymentId) => (dispatch, getState) => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const address_id = JSON.parse(window.localStorage.getItem("address_id"));

  const cartItems = getState().addToCartReducer.cartItems;
  const userFilter = {
    id: currentUser.id,
    name: currentUser.first_name + currentUser.last_name,
    email: currentUser.email,
    mobile: currentUser.mobile,
    address_id: address_id,
    total_amount: subtotal,
    ProductInCart: cartItems,
    // payment_id: PaymentId,
    payment_mode: "online",
  };
  console.log(currentUser, "orderplace");
  console.log(cartItems, "order place");
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const sendGetRequest = async () => {
    try {
      const resp = await axios
        .post(`${BassURl}/api/checkout`, {
          userFilter,
        })
        .then((res) => {
          dispatch({ type: "PLACE_ORDER_SUCCESS" });
          if (res.status === 200) {
            window.localStorage.removeItem("cartServiceItem");
            window.localStorage.removeItem("cartItems");
            setTimeout(() => {
              window.location.href = "/order-success";
            }, 1000);
          } else {
            alert(res.msg);
          }
          console.log(res);
        });
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  sendGetRequest();
  window.localStorage.removeItem("cartItems");
  // window.location.href = "/order-success";
  dispatch({ type: "PLACE_ORDER_FAILED" });
  console.log("come froom reducer");
};

export const ServiceplaceOrder = (subtotal) => (dispatch, getState) => {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const address_id = JSON.parse(window.localStorage.getItem("address_id"));
  const cartItemss = JSON.parse(localStorage.getItem("cartItems"));
  const cartServiceItems = JSON.parse(localStorage.getItem("cartServiceItem"));

  let type;

  if (!cartItemss) {
    type = "service";
  } else if (!cartServiceItems) {
    type = "product";
  } else {
    // Handle the case when both 'cartItems' and 'cartServiceItem' are present.
    // You can set a default value for 'type' or handle it based on your specific needs.
  }
  const cartServiceItem = JSON.parse(
    window.localStorage.getItem("cartServiceItem")
  );

  const cartItems = getState().addToCartReducer.cartItems;
  const userFilter = {
    userId: currentUser.id,
    type: type,
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    email: currentUser.email,
    mobile: currentUser.mobile,
    address_id: address_id,
    ProductItem: cartItems,
    ServiceItemInCart: cartServiceItem,
    total_amount: subtotal,
    delivery_fee: 50,
    payment_method: "COD",
  };
  console.log(userFilter);
  console.log(currentUser, "orderplace");
  console.log(cartItems, "order place");
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const sendGetRequest = async () => {
    try {
      console.log(userFilter);
      const resp = await axios
        .post(`${BassURl}/api/checkout`, userFilter)
        .then((res) => {
          dispatch({ type: "PLACE_ORDER_SUCCESS" });
          if (res.status === 200) {
            window.localStorage.removeItem("cartServiceItem");
            window.localStorage.removeItem("cartItems");
            setTimeout(() => {
              window.location.href = "/order-success";
            }, 1000);
          } else {
            alert(res.msg);
          }

          //
          console.log(res);
        });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  sendGetRequest();

  dispatch({ type: "PLACE_ORDER_SUCCESS" });
  localStorage.removeItem("cartServiceItem");
  // window.location.href = "/order-success";
  dispatch({ type: "PLACE_ORDER_FAILED" });
  console.log("come froom reducer");

  //   axios
  //     .post(`${BassURl}api/orders/placeorder`, {
  //       token,
  //       subtotal,
  //       currentUser,
  //       cartItems,
  //     })
  //     .then((res) => {
  //       dispatch({ type: "PLACE_ORDER_SUCCESS" });
  //
  //       window.location.href = "/order-success";

  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       dispatch({ type: "PLACE_ORDER_FAILED" });
  //       console.log(err, "come froom reducer");
  //     });
};

// export const getOrderByUserId = () => (dispatch, getState) => {
//     const userid = JSON.parse(localStorage.getItem("currentUser"));
//     dispatch({ type: "GET_ORDERBYUSERID_REQUEST" });
//     axios.post('/api/orders/getordersbyuserid', { userid: userid?._id }).then(res => {
//         dispatch({ type: 'GET_ORDERBYUSERID_SUCCESS', payload: res.data })
//         console.log(res?.data)
//     }).catch(err => {
//         dispatch({ type: 'GET_ORDERBYUSERID_FAILED', payload: err })
//     })
// };
