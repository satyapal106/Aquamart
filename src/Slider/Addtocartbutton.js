// import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion";
// import { FaPlus } from 'react-icons/fa'
// import { FaMinus } from 'react-icons/fa';
// import { useStateValue } from '../Context/StateProvider';
// import { actionType } from '../Context/reducer';
// import axios from 'axios';
// import CartInfo from '../Cart/CartInfo';



// let Items = [];


// function Addtocartbutton({ item, setFlag, flag }) {
//   const [qty, setqty] = useState(1);

//   const [isActive, setIsActive] = useState(false);
//   const [Addtocart, setAddToCart] = useState(true);
//   const [hidden, setHidden] = useState([]);
//   const handleClick = index => {
//     setHidden({ ...hidden, [index]: !hidden[index] });
//     setIsActive(current => !current);
//     // setAddToCart(current => !current);
//     setButtonText("1")


//   }
//   // const [flag, setFlag] = useState(1);
//   const [{ user, cartShow, cartShowToast, cartItems }, dispatch] = useStateValue();
//   const [items, setItems] = useState([]);


//   // const [qtystyle, SetQtyStyle] = useState(false);

//   const toastShows = () => {
//     dispatch({
//       type: actionType.SET_CART_SHOW_TOAST,
//       cartShowToast: !cartShowToast
//     })

//   }









//   const text = "Add to cart";
//   const [buttonText, setButtonText] = useState(text)
//   // add to cart  end

//   // qty script start

//   // qty script end

//   // console.log(x1);

//   // jquery
//   // api call
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get(
//           `http://3.110.38.250/web-api/top-product`
//         );
//         setProduct(response.data.data);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, []);
//   const cartDispatch = () => {
//     localStorage.setItem("cartItems", JSON.stringify());
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: Items,
//     });
//   };



//   const updateQty = (action, id) => {
//     if (action == "add") {
//       setqty(qty + 1);
//       cartItems.map((data) => {
//         if (data.id === id) {
//           data.vendor_id += 1;
//           setFlag(flag + 1);
//         }
//       });

//       cartDispatch();
//     } else {
//       //  inital state value is one so you need to check if 1 then remove it

//       if (qty == 1) {
//         Items = cartItems.filter((item) => item.id !== id);
//         setFlag(flag + 1);
//         cartDispatch();
//       } else {
//         setqty(qty - 1);
//         cartItems.map((item) => {
//           if (item.id === id) {
//             item.vendor_id -= 1;
//             setFlag(flag + 1);
//           }
//         });

//         cartDispatch();
//       }
//     }
//   };

//   useEffect(() => {
//     Items = cartItems;
//   }, [qty, Items]);


//   return (
//     <>

//       <motion.div
//         initial={{ opacity: 0, x: 200 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: 200 }}

//         className="qty-input">
//         <button className="qty-count qty-count--minus" data-action="minus" type="button" onClick={() => updateQty("remove", item?.id)}>-</button>
//         {/* <p  className="product-qty">{qty}</p> */}
//         <input className="product-qty" type="number" name="product-qty" min={0} max={10} Value={qty} />
//         <button className="qty-count qty-count--add" data-action="add" type="button" onClick={() => updateQty("add", item?.id)}>+</button>
//       </motion.div>



















//     </>

//   )
// }

// export default Addtocartbutton