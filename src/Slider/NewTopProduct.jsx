import React from "react";
import BassURl from "../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToCartAction } from "../Redux/Action/CartAction";
import { colors } from "@material-ui/core";
import parse from "html-react-parser";

function NewTopProduct({ itemsPro, onAddToCartClicked }) {
  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCartAction(itemsPro, 1));
  }
  const formatNumberWithCommas = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <>
      <div className="property-listing property-2 productHeight items">
        <div className="listing-img-wrapper">
          <div className="list-img-slide">
            <div className="click">
              <div>
                <a href={`/product/${itemsPro?.product_url}`}>
                  <img
                    src={BassURl + itemsPro?.product_image}
                    className="img-fluid imgProduct mx-auto"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="listing-detail-wrapper">
          <div className="listing-short-detail-wrap">
            <div className="_card_list_flex">
              <div className="_card_flex_01">
                <h4 className="listing-name verified">
                  <a
                    href={`/product/${itemsPro?.product_url}`}
                    className="prt-link-detail"
                  >
                    {itemsPro?.product_title}
                  </a>
                </h4>
                <div className="proudctCardDes" style={{ color: "#fff" }}>
                  {parse(itemsPro?.short_description)}
                </div>

                {/* <p
                  className="proudctCardDes"
                  style={{ color: "#fff" }}
                  dangerouslySetInnerHTML={{
                    __html: itemsPro?.product_description,
                  }}
                ></p> */}
              </div>
              <br />
            </div>
            <div
              className="footer-first"
              style={{
                display: "flex",
                marginTop: "12px",
              }}
            >
              <div className="foot-rates">
                <span className="elio_rate good">4.2</span>
                <div className="_rate_stio">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>

              <div className="footer-first">
                <h6 className="listing-card-info-price mb-0  price-style">
                  ₹ &nbsp;
                  {formatNumberWithCommas(itemsPro?.product_price)}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="listing-detail-footer">
          <div className="footer-flex">
            <div className="prt-view" onClick={addtocart}>
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              &nbsp; Add to cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTopProduct;
