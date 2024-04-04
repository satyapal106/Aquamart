import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import BaseURL from "../Api/Api";
import CategorySlider from "../Slider/CategorySlider";
import BassURl from "../Api/Api";

function MobileContent() {
  const options = {
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
    // autoWidth:true,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 4,
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

  //   console.log(data, "new gf")

  // api call
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/service-category`);
        setData(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const [service, setService] = useState([]);
  const [appliances, setAppliances] = useState([]);
  useEffect(() => {
    axios.get(`api/appliances-shop`).then((response) => {
      setAppliances(response.data.data);
    });
  }, []);
  return (
    <>
      <section className="p-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <h4 className="mt-2 text-center">Services</h4>
              <div className="_awards_group">
                <ul className="_awards_lists four service_height">
                  {data && (
                    <OwlCarousel className=" owl-carousel " {...options}>
                      {/* single list */}
                      {data?.map((data, index) => {
                        return (
                          <>
                            <li key={index}>
                              <div className="_awards_list_wrap service_right">
                                <div className="_awards_list_thumb op-1">
                                  <a href={`/service/${data?.service_url}`}>
                                    <img
                                      src={BaseURL + data?.service_img}
                                      className="img-fluid"
                                      alt
                                    />
                                  </a>
                                </div>
                                <div className="_awards_list_caption">
                                  <span>{data?.service_title}</span>
                                </div>
                              </div>
                            </li>
                          </>
                        );
                      })}
                    </OwlCarousel>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="black-line"></div>
    </>
  );
}
export default MobileContent;
