export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    window.localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

export const fetchCartAp = () => {
  const cartInfos =
    localStorage.getItem("cartItemss") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItemss"))
      : localStorage.clear();

  return cartInfos ? cartInfos : [];
};

export const fetchCartServiceItemInfo = () => {
  const cartServiceItemInfo =
    localStorage.getItem("cartServiceItem") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartServiceItem"))
      : localStorage.clear();

  return cartServiceItemInfo ? cartServiceItemInfo : [];
}

export const fetchTotal = () => {
  const total =
    localStorage.getItem("total") !== "undefined"
      ? JSON.parse(localStorage.getItem("total"))
      : localStorage.clear();

  return total;
};




