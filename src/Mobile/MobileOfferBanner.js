import axios from "axios";
import BassURl from "../Api/Api";
import React, { useEffect, useState } from "react";
import Testimonial from "../Component/Testimonial";

function MobileOfferBanner() {
  // banner api call
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios.get(`web-api/banner`).then((response) => {
      setBanner(response.data.data);
    });
  }, []);

  return (
    <>
      {/* banner start  */}
      {/* ============================ Property Tag Start ================================== */}
      <div className="shadow-lg p-3  bg-white rounded">
        <div className=" shadow p-3 bg-white rounded">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {banner?.map((data, index) => {
                return (
                  <div className="carousel-item active" key={index}>
                    <img
                      className="d-block w-100"
                      src={BassURl + data?.banner_url}
                      alt="First slide"
                      style={{ height: "130px" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ============================ Property Tag End ================================== */}

      {/* testimonial start */}
      <Testimonial />

      {/* why choose us start */}
      {/* why choose us start */}
      <div className="section-full content-inner bg-gray shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="box-title">WHY CHOOSE SAY</h2>
            <div className="dlab-separator bg-primary" />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-choose-right shadow-sm mb-5 bg-white rounded ">
                <i className="fa fa-thumbs-up" />
                <h3>Service Reliability</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eir mod tempor invidunt ut labore et.
                </p>
              </div>
              <div className="single-choose-right shadow-sm mb-5 bg-white rounded">
                <i className="fa fa-link" />
                <h3>Flexibility</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eir mod tempor invidunt ut labore et.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="choose-image"
                style={{ backgroundImage: 'url("assets/img/d.png")' }}
              >
                <div className="square-shape">
                  <img src="assets/img/shape.png" alt="Shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-choose-left shadow-sm  mb-5 bg-white rounded">
                <i className="fa fa-ban" />
                <h3>Quality Control</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eir mod tempor invidunt ut labore et.
                </p>{" "}
              </div>
              <div className="single-choose-left shadow-sm  mb-5 bg-white rounded">
                <i className="fa fa-comment-o" />
                <h3>Staff, You'll Like</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eir mod tempor invidunt ut labore et.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why choose us end */}

      {/* why choose us end */}
    </>
  );
}

export default MobileOfferBanner;
