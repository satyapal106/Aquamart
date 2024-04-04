import React from 'react'

function CartServiceTwo() {
  return (
    <div>CartServiceTwo</div>
  )
}

export default CartServiceTwo



// import React, { useEffect, useState } from 'react'
// import { motion } from "framer-motion";
// import { useStateValue } from '../Context/StateProvider';
// import { actionType } from '../Context/reducer';
// import CartServiceTwoAd from './CartServiceTwoAd';
// import BassURl from '../Api/Api';
// import { Link } from 'react-router-dom';

// let CartService = [];

// function CartServiceTwo() {


//     const [showed, setShowed] = useState(false);

//     const [{ cartShowA, cartItems, user, cartItemss }, dispatch] = useStateValue();
//     // const [{ cartItemss, user, cart, total }, dispatch] = useStateValue();
//     const [flag, setFlag] = useState(1);
//     const [tot, setTot] = useState(0);

//     const showCart = () => {
//         dispatch({
//             type: actionType.SET_CART_SHOWA,
//             cartShowA: !cartShowA,
//         });
//     };

//     const cartDispatch = () => {
//         localStorage.setItem("cartItemss", JSON.stringify());
//         dispatch({
//             type: actionType.SET_CARTITEMS,
//             cartItemss: CartService,
//         });
//     };

//     useEffect(() => {
//         let totalPrice = cartItemss.reduce(function (accumulator, item) {
//             return accumulator + item.vendor_id * item.service_price;
//         }, 0);
//         setTot(totalPrice);
//     }, [tot, flag]);



 





















//     return (
//         <>



//             <motion.div initial={{ opacity: 0, x: 300 }}
//                 animate={{ opacity: 2, x: 0 }}
//                 exit={{ opacity: 0, x: 300 }} className="cart-sidebar">
//                 <div className="cart-header">
//                     <div className="cart-total">
//                         <i className="fa fa-shopping-cart" />
//                         <span>total item ({cartItemss.length})</span>
//                     </div>
//                     <button className="cart-close" onClick={showCart}>
//                         <i className="icofont-close" />
//                     </button>
//                 </div>

//                 {
//                     cartItemss && cartItemss?.length > 0 ? (
//                         <>
//                             <ul className="cart-list">
//                                 {
//                                     cartItemss && cartItemss?.map((item) => {
//                                         return (<>
//                                             {/* {console.log(item)} */}

//                                             <CartServiceTwoAd key={item.id}
//                                                 item={item}
//                                                 setFlag={setFlag}
//                                                 flag={flag}

//                                             />
//                                         </>)

//                                     })
//                                 }

//                             </ul>





//                             <div className="cart-footer">
//                                 <button className="coupon-btn" onClick={(e) => setShowed(true)}>Do you have a coupon code?</button>
//                                 <form className="coupon-form" >
//                                     <input type="text" placeholder="Enter your coupon code" />
//                                     <button type="submit">
//                                         <span>apply</span>
//                                     </button>
//                                 </form>
//                                 <a className="cart-checkout-btn" href="/checkout">
//                                     <span className="checkout-label">Proceed to Checkout</span>
//                                     <span className="checkout-price">₹ {tot}</span>
//                                 </a>
                               
//                             </div>

//                         </>






//                     ) : ( <div className="EmptyCart">
//                     <img src="/assets/empty-cart.gif" className="EmptyCartImg" alt="" />
//                     <p className="EmptyCartPara"> Add Some Product To Your Cart</p>
//                 </div>)
//                 }








//             </motion.div>






//         </>
//     )
// }

// export default CartServiceTwo