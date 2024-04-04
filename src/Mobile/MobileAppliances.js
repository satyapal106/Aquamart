import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import BaseURL from "../Api/Api";
import CategorySlider from "../Slider/CategorySlider";
import BassURl from "../Api/Api";
import { Link } from "react-router-dom";

function MobileAppliances() {
  const [appliances, setAppliances] = useState([]);
  useEffect(() => {
    axios.get(`api/appliances-shop`).then((response) => {
      setAppliances(response.data.data);
    });
  }, []);

  const settings = {
    margin: 40,
    responsiveClass: true,
    dots: true,
    nav: true,

    navText: [
      "<img src='/assets/img/left-arrow.webp' class='nav-button  owl-prev'/>",
      " <img src='/assets/img/right-arrow.webp' class='nav-button owl-next'/>",
    ],
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 5000,
    // autoWidth:true,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <>
      <section className="gray-simple min">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 ">
              <div className="sec-heading center">
                <h2>Our Appliances</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {
              appliances.length && (
                <OwlCarousel className=" owl-carousel " {...settings}>
                  {/* single list */}
                  {appliances?.map((item, index) => {
                    return (
                      <>
                        <div className="col-lg col-md-4" key={index}>
                          {/* Single Category */}
                          <div className="property_cats_boxs">
                            <Link to={`/appliance/${item.id}`} className="category-box">
                              <div className="property_category_short">
                                <div className="category-icon clip-1">
                                  <img
                                    src={BassURl + item?.image}
                                    alt=""
                                    className="appliances-img"
                                  />
                                </div>
                                <div className="property_category_expand property_category_short-text">
                                  <h4>{item?.category_title}</h4>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </OwlCarousel>
              )}
          </div>
        </div>
      </section>

      <div className="black-line"></div>
    </>
  );
}

export default MobileAppliances;
