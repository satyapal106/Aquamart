// import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion";
// import { useStateValue } from '../Context/StateProvider';
// import { actionType } from '../Context/reducer';
// import TopProduct from '../Slider/TopProduct';
// import Addtocartbutton from '../Slider/Addtocartbutton';

// function CartInfo({ flag, setTot, tot }) {
//     const [{ user, cartShow, cartShowToast, cartItems }, dispatch] = useStateValue();
//     // const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
//     // const [flag, setFlag] = useState(1);
//     // const [tot, setTot] = useState(0);

//     useEffect(() => {
//         let totalPrice = cartItems.reduce(function (accumulator, data) {
//             return accumulator + data?.vendor_id * data?.product_price;
//         }, []);
//         setTot(totalPrice);
//         console?.log(setTot(totalPrice));
//     }, [tot, flag]);




//     const toastShow = () => {
//         dispatch({
//             type: actionType.SET_CART_SHOW_TOAST,
//             cartShowToast: !cartShowToast
//         })
//     }




//     return (
//         <>
//             <motion.div
//                 initial={{ opacity: 0, x: 200 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 200 }}


//                 className='toasting'><div className='container bg white'>
//                     <div className='row' style={{ maxWidth: "370px" }}>

//                         <div className='col-lg-6'><p
//                             whileTap={{ scale: "0.75" }}
//                             className=" hover:shadow-md "
//                             style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "0.5rem",
//                                 padding: "0.25rem",
//                                 paddingLeft: "0.5rem",
//                                 paddingRight: "0.5rem",
//                                 marginTop: "0.9rem",
//                                 marginBottom: "0.rem",


//                                 color: "black",

//                                 transitionDuration: " 100ms",
//                                 transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//                                 transitionProperty: "all",
//                                 transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//                                 transitionDuration: "150ms",
//                                 fontSize: "1rem" /* 16px */,
//                                 lineHeight: "1.5rem",

//                                 height: "40px",
//                                 marginTop: "10px"

//                             }}
//                         // onClick={clearCart}
//                         >
//                             <div className='row'>
//                                 <h6 class="listing-card-info-price mb-0">{tot}</h6>
//                             </div>







//                         </p></div>
//                         <div className='col-lg-6'><motion.p whileTap={{ scale: "0.75" }}
//                             className=" hover:shadow-md "
//                             style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "0.5rem",
//                                 padding: "0.25rem",
//                                 paddingLeft: "0.5rem",
//                                 paddingRight: "0.5rem",
//                                 marginTop: "0.9rem",
//                                 marginBottom: "0.rem",
//                                 backgroundColor: "#0056b7",
//                                 borderRadius: "0.375rem",
//                                 color: "white",
//                                 cursor: "pointer",
//                                 transitionDuration: " 100ms",
//                                 transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//                                 transitionProperty: "all",
//                                 transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//                                 transitionDuration: "150ms",
//                                 fontSize: "1rem" /* 16px */,
//                                 lineHeight: "1.5rem",
//                             }}

//                             onClick={toastShow}
//                         >View Cart</motion.p>
//                         </div>
//                     </div>

//                 </div></motion.div>

//         </>
//     )
// }

// export default CartInfo