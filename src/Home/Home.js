import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import MobileHeader from '../Mobile/MobileHeader';
import Banner from "../Component/Banner";
import Content from "../Component/Content";
import TopProduct from "../Slider/TopProduct";
import EndContent from "../Component/EndContent";
import Footer from "../Component/Footer";

import { isMobile } from "react-device-detect";
function Home() {
  //   const [{ cartShow, cartShowA, cartShowToast }, dispatch] = useStateValue();
  //   const [scrollValue, setScrollValue] = useState(0);

  //   useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <>
    {
      isMobile?(<><MobileHeader/></>):(<>    
      <div id="main-wrapper">
      <Navbar />
      <Banner/>
      <Content />
      <TopProduct />
      <EndContent />
      <Footer />
      </div></>)
    }
    </>

  );
}

export default Home;
