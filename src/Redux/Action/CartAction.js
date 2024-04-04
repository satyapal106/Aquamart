export const addToCartAction = (product, qty) => (dispatch, getState) => {
  const cartItem = {
    product_title: product?.product_title,
    id: product?.id,
    product_price: product?.product_price,
    product_image: product?.product_image,
    qty: 1,
    type:"product"

  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  window.localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer?.cartItems))
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  window.localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().addToCartReducer?.cartItems)
  );
};

// SERVICE CART FUNCTIONLITY

export const addToServiceCartAction = (product, qty) => (dispatch, getState) => {
  console.log(product.service_title);
  const cartItem = {
    service_title: product?.service_title,
    id: product?.id,
    service_price: product?.service_price,
    service_image: product?.service_image,
    qty: 1,
    type:'Services'

  };
  dispatch({ type: "ADD_TO_CART_SERVICE", payload: cartItem });
  window.localStorage.setItem('cartServiceItem', JSON.stringify(getState().addToServiceCartReducer?.cartItemService))
};

export const deleteServiceFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART_SERVICE", payload: item });
  window.localStorage.setItem(
    "cartServiceItem",
    JSON.stringify(getState().addToServiceCartReducer?.cartItemService)
  );
};
