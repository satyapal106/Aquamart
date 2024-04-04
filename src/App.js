import React from "react";
import Home from "./Home/Home";
import Service from "./Pages/Service";
import AppliancesDetails from "./Component/AppliancesDetails";
import MobileHeader from "./Mobile/MobileHeader";
import MobileLogin from "./Mobile/MobileLogin";
import MobileServiceDetails from "./Mobile/MobileServiceDetails";
import MobileCart from "./Mobile/MobileCart";
import MobileError from "./Mobile/MobileError";
import Payment from "./Mobile/Payment";
import OrderSuccess from "./Mobile/OrderSuccess";
import MobileApplianceDetails from "./Mobile/MobileApplianceDetails";
import MobileProductDetalis from "./Mobile/MobileProductDetalis";
import Address from "./Mobile/Address";
import MobileProductCart from "./Mobile/MobileProductCart";

import { isMobile } from "react-device-detect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOutProject from "./CheckOut/CheckOutProject";
import ServiceVew from "./Component/ServiceVew";
import Login from "./Auth/Login";  
import Signup from "./Auth/Signup";

import CartServiceTwo from "./Cart/CartServiceTwo";
import AppliancesItemDetailPage from "./Component/AppliancesItemDetailPage";
import UserLocation from "./Mobile/Userlocation";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<UserLocation />} />
          <Route path="/mobile-login" element={<MobileLogin />} />
          <Route path="/services/:id" element={<MobileServiceDetails />} />
          <Route path="/mobile-cart" element={<MobileCart />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/mobile-error" element={<MobileError />} />
          <Route
            path="/mobile-all-service"
            element={<MobileServiceDetails />}
          />
          <Route path="/appliance/:id" element={<MobileApplianceDetails />} />
          <Route
            path="/mobile-product-detail/:product_url"
            element={<MobileProductDetalis />}
          />
          <Route path="/mobile-product-cart" element={<MobileProductCart />} />

          {/* desktop */}

          <Route path="/service/:service_id" element={<Service />} />
          <Route path="/check-out-product" element={<CheckOutProject />} />
          <Route path="/appliances/:id" element={<AppliancesDetails />} />
          <Route
            path="/appliances/:id/:product_url"
            element={<AppliancesItemDetailPage />}
          />
          <Route path="/product/:product_url" element={<ServiceVew />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/registration" element={<Signup />} />
        </Routes>
      </Router>

      {/* <Route path="/ser" element={<CartServiceTwo />} />
          <Route path="/service/:service_id" element={<Service />} />
          <Route path="/appliances/:id" element={<AppliancesDetails />} />
          <Route
            path="/appliances/:category_url"
            element={<PageAppliances />}
          />
          <Route path="/check-out-product" element={<CheckOutProject />} />



          <Route path="/product/:product_url" element={<ServiceVew />} />
          <Route path="/order" element={<Order />} />

          <Route path="/login" element={<Login />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/address" element={<Address />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testing" element={<Testing />} /> */}
    </>
  );
}

export default App;
