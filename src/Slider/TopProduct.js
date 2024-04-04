import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BassURl from "../Api/Api";
// import NewTopProduct from "./NewTopProduct";
import axios from "axios";
import NewTopProduct from "./NewTopProduct";

function TopProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(1);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${BassURl}api/top-product`
        );
        setProduct(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const options = {
    margin: 40,
    responsiveClass: true,
    dots: true,
    navText: [
      "<img src='/assets/img/left-arrow.webp' class='nav-buttons  owl-prev'/>",
      " <img src='/assets/img/right-arrow.webp' class='nav-buttons owl-next'/>",
    ],
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,

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
  return (
    <>
      <section className="min light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center mb-4 top-product-top">
                <h2>Top Product</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Single Property */}
            {product &&
              <OwlCarousel className=" " {...options} style={{height:"525px"}}>
                {product?.map((itemsPro, index) => {
                  return (
                    <>
                      <div key={index}>
                        <NewTopProduct
                          itemsPro={itemsPro}
                        // onAddToCartClicked={() =>
                        //   setItems([...cartItems, itemsPro])
                        // }
                        />
                      </div>
                    </>
                  );
                })}
              </OwlCarousel>
            }
          </div>
          {/* {cartShowToast && <CartInfo flag={flag}  tot={tot} setTot={setTot} />} */}
        </div>
      </section>


    </>
  )
}

export default TopProduct