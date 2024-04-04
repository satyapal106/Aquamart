// import React from 'react'
// import Home from "./Home/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PageAppliances from "./Pages/PageAppliances";
// import Modalbutton from "./Model/Modalbutton";
// import CartServiceTwo from "./Cart/CartServiceTwo";
// import ServiceVew from './Component/ServiceVew';


// import Login from "./Auth/Login";
// import Signup from "./Auth/Signup";
// import Dashboard from "./Component/Dashboard";
// import Testing from "./Component/Testing";
// import ProctedRoutes from "./Routes/RoutesProcted";
// import CheckOutProject from "./CheckOut/CheckOutProject";
// import MobileServiceDetails from "./Mobile/MobileServiceDetails";
// import MobileCart from "./Mobile/MobileCart";
// import Address from "./Mobile/Address";
// import Payment from "./Mobile/Payment";
// import OrderSuccess from "./Mobile/OrderSuccess";
// import MobileLogin from "./Mobile/MobileLogin";
// import MobileSingup from "./Mobile/MobileSingup";
// import MobileError from "./Mobile/MobileError";
// import MobileAllService from "./Mobile/MobileAllService";
// import MobileProductDetalis from "./Mobile/MobileProductDetalis";
// import MobileProductCart from "./Mobile/MobileProductCart";
// import Order from "./Component/Order";
// import MobileApplianceDetails from "./Mobile/MobileApplianceDetails";
// import AppliancesDetails from "./Component/AppliancesDetails";
// import Service from './Pages/Service';
// import { isMobile } from "react-device-detect";
// import MobileHeader from "./Mobile/MobileHeader";
// function App() {


//   return (
//     <>
//       {isMobile ? (<>  <Router>
//         <Routes>
//           <Route path="/" element={<MobileHeader />} />
//           <Route path="/services/:id" element={<MobileServiceDetails />} />
//           <Route path="/mobile-cart" element={<MobileCart />} />
//           <Route path="/mobile-login" element={<MobileLogin />} />
//           <Route path="/mobile-product-cart" element={<MobileProductCart />} />
//           <Route path="/appliance/:id" element={<MobileApplianceDetails />} />
//           <Route path="/mobile-signup" element={<MobileSingup />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/mobile-product-detail/:product_url" element={<MobileProductDetalis />} />
//           <Route path="/order-success" element={<OrderSuccess />} />
//           <Route path="/address" element={<Address />} />
//           <Route path="/mobile-error" element={<MobileError />} />
//           <Route path="/mobile-all-service" element={<MobileAllService />} />
//         </Routes>
//       </Router></>) : (<>  <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
      

//           <Route path="/ser" element={<CartServiceTwo />} />
//           <Route path="/service/:service_id" element={<Service />} />
//           <Route path="/appliances/:id" element={<AppliancesDetails />} />
//           <Route
//             path="/appliances/:category_url"
//             element={<PageAppliances />}
//           />
//           <Route path="/check-out-product" element={<CheckOutProject />} />



//           <Route path="/product/:product_url" element={<ServiceVew />} />
//           <Route path="/order" element={<Order />} />

//           <Route path="/login" element={<Login />} />

//           <Route path="/payment" element={<Payment />} />
//           <Route path="/order-success" element={<OrderSuccess />} />
//           <Route path="/address" element={<Address />} />
//           <Route path="/registration" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/testing" element={<Testing />} />



//         </Routes>
//       </Router></>)}
//     </>
//   )
// }

// export default App