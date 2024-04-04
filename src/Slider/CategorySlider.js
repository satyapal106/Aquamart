import React, { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BaseURL from "../Api/Api"
import axios from 'axios';

function CategorySlider() {
  const options = {

    responsiveClass: true,
    dots: true,
    nav: true,

    navText: ["<img src='/assets/img/left-arrow.webp' class='nav-button  owl-prev'/>", " <img src='/assets/img/right-arrow.webp' class='nav-button owl-next'/>"],
    loop: true,
    autoplay: false,
    // autoWidth:true, 

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };


  // Api call





  return (
    <>
     

    </>
  )
}

export default CategorySlider