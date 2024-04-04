
import { addToCartReducer, addToServiceCartReducer } from "./Reducer/CartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getAllApplianceByIdRreducer, getAllProductsReducer } from "./Reducer/ProductReducer";
import { loginUserReducer, googleLoginReducer, addNewAdressReducer } from "./Reducer/UserReducer";
//   import { googleLoginReducer, googleRegisterReducer, loginUserReducer, registerNewUserReducer } from "./reducers/UserReducer";
import { placeOrderReducer, ServiceplaceOrderReducer } from "./Reducer/OrderReducer";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getAllApplianceByIdRreducer:getAllApplianceByIdRreducer,
  // getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer,
  addToServiceCartReducer: addToServiceCartReducer,
  addNewAdressReducer: addNewAdressReducer,


  // registerNewUserReducer: registerNewUserReducer,
  loginUserReducer: loginUserReducer,
  // googleRegisterReducer: googleRegisterReducer,
  googleLoginReducer: googleLoginReducer,
  placeOrderReducer: placeOrderReducer,
  ServiceplaceOrderReducer: ServiceplaceOrderReducer
  // getOrderByUserIdReducer:getOrderByUserIdReducer,
  // addProductReviewReducer:addProductReviewReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
var cartItemService = localStorage.getItem('cartServiceItem') ? JSON.parse(localStorage.getItem('cartServiceItem')) : [];
//   // var cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

let currnetUser = localStorage.getItem('currnetUser') ? JSON.parse(localStorage.getItem('currnetUser')) : [];
let orderplace = localStorage.getItem('orderplace') ? JSON.parse(localStorage.getItem('orderplace')) : []
//   let googleUser = localStorage.getItem('googleUser') ? JSON.parse(localStorage.getItem('googleUser')) : []
// initile state

const initialState = {
  // addToCartReducer:{cartItems:cartItems},
  addToCartReducer: { cartItems: cartItems },
  addToServiceCartReducer: { cartItemService: cartItemService },
  loginUserReducer: { currnetUser: currnetUser },
  googleLoginReducer: { currnetUser: currnetUser },
  placeOrderReducer: { orderplace: orderplace },


  // loginUserReducer: { currnetUser: currnetUser },
  // googleLoginReducer: { googleUser: googleUser }
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
