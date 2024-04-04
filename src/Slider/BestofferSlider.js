import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BassURl from "../Api/Api";
import axios from "axios";

function BestofferSlider() {
  const options = {
    responsiveClass: true,
    dots: true,
    nav: true,

    navText: [
      "<img src='/assets/img/left-arrow.webp' class='nav-button  owl-prev'/>",
      " <img src='/assets/img/right-arrow.webp' class='nav-button owl-next'/>",
    ],
    loop: true,
    autoplay: true,
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
        items: 3,
      },
    },
  };

  const [offer, setOffer] = useState([]);
  useEffect(() => {
    axios.get(`${BassURl}api/offers`).then((response) => {
      if (response.data.code == 200) {
        setOffer(response.data.data);
      }else{
        console.log("Offer Not Found");
      }
    });
  }, []);

  const product = [
    {
      id: "1",
      image: "/assets/img/offer/2.webp",
    },
    {
      id: "2",

      image: "/assets/img/offer/1.webp",
    },
    {
      id: "3",

      image: "/assets/img/offer/4.webp",
    },
    {
      id: "4",

      image: "/assets/img/offer/3.webp",
    },
  ];

  return (
    <>
      <div className="row justify-content-center">
        {/* Single Property */}
       
        {/* Single Property */}
        {offer.length == 0 ? (<>no data Found</>): (<>
          <OwlCarousel className="slider-items owl-carousel " {...options}>
            {offer?.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="property-listing property-2 propertyWidth">
                    <div>
                      {/* <div className="_exlio_125">For Sale</div> */}
                      <div>
                        <div className="click">
                          <div>
                            <a href="/service/salon">
                              <img
                                src={`${BassURl}${data.offer_image}`}
                                className="img-fluid mx-auto"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel></>)}


      </div>
    </>
  );
}

export default BestofferSlider;
