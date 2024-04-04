// import React, { useEffect, useState } from 'react'
// import { actionType } from '../Context/reducer';
// import { useStateValue } from '../Context/StateProvider';
// import { motion } from "framer-motion";
// import BassURl from '../Api/Api';
// let CartItems = []

// function CartServiceTwoAd({ item, setFlag, flag }) {
//     const [qty, setqty] = useState(item?.vendor_id);
//     const [{ cartShowA, cartItemss, user, cart, total }, dispatch] = useStateValue();
//     const [items, setitems] = useState([]);



//     const showCarts = () => {
//         dispatch({
//             type: actionType.SET_CART_SHOWA,
//             cartShowA: !cartShowA,
//         });
//     };

//     const cartDispatch = () => {
//         localStorage.setItem("cartItemss", JSON.stringify());
//         dispatch({
//             type: actionType.SET_CARTITEMSA,
//             cartItemss: CartItems,
//         });
//     };

//     const clearCart = () => {
//         dispatch({
//             type: actionType.SET_CARTITEMSA,
//             cartItemss: [],
//         });

//         localStorage.setItem("cartItemss", JSON.stringify([]));
//     };
//     const updateQty = (action, id) => {
//         if (action == "add") {
//             setqty(qty + 1);
//             cartItemss.map((item) => {
//                 if (item.id === id) {
//                     item.vendor_id += 1;
//                     setFlag(flag + 1);
//                 }
//             });

//             cartDispatch();
//         } else {
//             //  inital state value is one so you need to check if 1 then remove it

//             if (qty == 1) {
//                 CartItems = cartItemss.filter((item) => item.id !== id);
//                 setFlag(flag + 1);
//                 cartDispatch();
//             } else {
//                 setqty(qty - 1);
//                 cartItemss.map((item) => {
//                     if (item.id === id) {
//                         item.vendor_id -= 1;
//                         setFlag(flag + 1);
//                     }
//                 });

//                 cartDispatch();
//             }
//         }
//     };

//     useEffect(() => {
//         CartItems = cartItemss;
//     }, [qty, CartItems]);


//     // const remove_item = (id) => {
//     //    return dispatch({

//     //     type:"SET_REMOVE",
//     //     cartItemss: id




//     //    })
//     // };

//     const remove_item = (id) => {
//         // cartItemss:action.cartItemss.filter((item)=>{

//         // }

//         dispatch({
//             type: actionType.SET_CARTITEMSA,
//             cartItemss: cartItemss.filter((item) => item.id !== id)
//         })
//         // alert( id)
//     }


//     // total





//     return (
//         <>

//             <li className="cart-item">
//                 <div className="cart-media">
//                     <a href="#">
//                         <img src={BassURl + item?.service_image} alt="product" />
//                     </a>
//                     <button className="cart-delete" >
//                         <i className="fa fa-trash" onClick={() => remove_item(item.id)} />
//                     </button>
//                 </div>
//                 <div className="cart-info-group">
//                     <div className="cart-info">
//                         <h6>
//                             <a >{item?.service_title}</a>
//                         </h6>
//                         {/* <p>Unit Price - $8.75</p> */}
//                     </div>





//                     <div className="cart-action-group">
//                         <div className="product-action">
//                             <motion.button
//                                 whileTap={{ scale: 0.75 }}
//                                 className="action-minus" title="Quantity Minus"
//                                 onClick={() => updateQty("remove", item?.id)}

//                             >
//                                 <i className="icofont-minus" />
//                             </motion.button>

//                             {/* <p className='action'>{qty}</p> */}


//                             <input
//                                 className="action-input"
//                                 title="Quantity Number"
//                                 type="text"
//                                 name="quantity"
//                                 value={qty}
//                             />
//                             <motion.button
//                                 whileTap={{ scale: 0.75 }} className="action-plus" title="Quantity Plus"

//                                 onClick={() => updateQty("add", item?.id)}


//                             >
//                                 <i className="icofont-plus" />
//                             </motion.button>
//                         </div>
//                         <h6>{`₹ ${item?.service_price * qty}`}</h6>
//                     </div>
//                 </div>
//             </li>















//         </>
//     )
// }

// export default CartServiceTwoAd