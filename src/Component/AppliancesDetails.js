import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BassURl from "../Api/Api";
import Navbar from "../Navbar/Navbar";
// import ServiceAdd from '../Pages';
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import ApplianceAdd from "./ApplianceAdd";
import { isMobile } from "react-device-detect";
import MobileFilter from "./MobileFilter";
import "./AppliancesDetailsRange.css";

function removeNonBreakingSpaces(inputString) {
    return inputString.replace(/&nbsp;/g, " ");
}

function AppliancesDetails() {
    const param = useParams();
    //console.log(param);
    const [applianceByCategory, setApplianceByCategory] = useState("");
    useEffect(() => {
        axios
            .get(`${BassURl}api/product-by-category/${param.id}`)
            .then((res) => {
                setApplianceByCategory(res.data.data.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);
    //console.log(applianceByCategory);

    const [selectedOption, setSelectedOption] = useState("featured");

    const handleSelectChanges = (event) => {
        setSelectedOption(event.target.value);
    };

    let sortedAppliances = [...applianceByCategory];
    if (selectedOption === "a-z") {
        sortedAppliances.sort((a, b) => a.product_title.localeCompare(b.product_title));
    } else if (selectedOption === "z-a") {
        sortedAppliances.sort((a, b) => b.product_title.localeCompare(a.product_title));
    } else if (selectedOption === "high-low") {
        sortedAppliances.sort((a, b) => b.product_price - a.product_price);
    } else if (selectedOption === "low-high") {
        sortedAppliances.sort((a, b) => a.product_price - b.product_price);
    }

    const [selectedBrands, setSelectedBrands] = useState([]);
    
    const handleBrandChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedBrands([...selectedBrands, value]);
        } else {
            setSelectedBrands(selectedBrands.filter(brand => brand !== value));
        }
    };
    const filteredByBrand = sortedAppliances.filter(item => {
        if (selectedBrands.length === 0) return true; // If no brand selected, show all items
        return selectedBrands.includes(item.brand_title);
    });

    const [minPrice, setMinPrice] = useState(7000);
    const [maxPrice, setMaxPrice] = useState(30000);

    const handleMinChange = (event) => {
        const newMinPrice = parseInt(event.target.value);
        if (newMinPrice <= maxPrice) {
            setMinPrice(newMinPrice);
        }
    };

    const handleMaxChange = (event) => {
        const newMaxPrice = parseInt(event.target.value);
        if (newMaxPrice >= minPrice) {
            setMaxPrice(newMaxPrice);
        }
    };

    const filteredByPrice = filteredByBrand.filter(item => {
        const itemPrice = parseInt(item.product_price);
        return itemPrice >= minPrice && itemPrice <= maxPrice;
    });

    const renderStars = (rating) => {
        let numStars;

        if (rating === 1) {
            numStars = 1;
        } else if (rating > 1 && rating <= 2) {
            numStars = 2;
        } else if (rating === 2) {
            numStars = 2;
        } else if (rating > 2 && rating <= 3) {
            numStars = 3;
        } else if (rating === 3) {
            numStars = 3;
        } else if (rating > 3 && rating <= 4) {
            numStars = 4;
        } else if (rating === 4) {
            numStars = 4;
        } else if (rating > 4 && rating <= 5) {
            numStars = 5;
        } else {
            numStars = 5;
        }

        const stars = Array.from({ length: numStars }, (_, index) => (
            <i key={index} className="fa fa-star" />
        ));
        return stars;
    };

    const [selectedRatings, setSelectedRatings] = useState([]);
    
    const handleRatingChange = (event) => {
        const { id, checked } = event.target;
        if (checked) {
            setSelectedRatings([...selectedRatings, id]);
        } else {
            setSelectedRatings(selectedRatings.filter(rating => rating !== id));
        }
    };

    // const filteredItems = filteredByPrice.filter(item => {
    //     if (selectedRatings.length === 0) return true; 
        
    //     const ratingValue = parseInt(id.replace(/\D/g, ''));
    //     return selectedRatings.includes(`${ratingValue}Star`);
    // });
    const filteredItems = filteredByPrice.filter(item => {
        if (selectedRatings.length === 0) return true; // If no rating selected, show all items
        return selectedRatings.includes(`${item.ratting}Star`);
    });

    const formatNumberWithCommas = (number) => {
        return new Intl.NumberFormat("en-US").format(number);
    };

    // Jagriti Start
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [selectedFilters, setSelectedFilters] = useState("All");
    const [inputText, setInputText] = useState("");
    const [filters, setFilters] = useState({
        color: "all",
        store: "all",
        category: [],
        rating: "all",
        price: "",
    });

    

    const handleFilterSelection = (type, value) => {
        setSelectedFilter(value);
        setFilterOpen(false);
        setFilters({ ...filters, [type]: value });
    };

    // Rating Start
    

    

    const [ProductDetail, setProductDetail] = useState(null);
    useEffect(() => {
        axios
            .get(`${BassURl}api/shop-category-details/${param.id}`)
            .then((res) => {
                setProductDetail(res.data);
                //console.log(res.data);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);
    
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
        try {
            const response = await axios.get(`${BassURl}/api/brand`); 
            setBrands(response.data.data); 
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching brands:", error);
        }
        };

        fetchBrands();
    }, []);

   //console.log(brand);

    return (
        <>
            <Navbar />
            <div>
                {ProductDetail && (
                    // Render actual data when CategoryDetail is truthy
                    <img
                        src={`${BassURl}${ProductDetail.data.category_background}`}
                        width="100%"
                        alt="Category Image"
                    />
                )}
            </div>
            <section className="section-b-space shop-section">
                <div className="container-fluid-lg">
                    <div className="row">
                        {isMobile ? (
                            <>
                                <MobileFilter />
                            </>
                        ) : (
                            <>
                                <div className="col-xxl-3 col-md-3 col-lg-3">
                                    <div className="left-box inBox">
                                        <main
                                            className={`cd-main-content ₹{
                                    filterOpen ? "filter-is-visible" : ""
                                }`}
                                        >
                                            {/* Filter panel */}
                                            <div className="cd-filter">
                                                {/* Filter content */}
                                                <form>
                                                    {/* Categories Brand filter */}
                                                    <div className="cd-filter-block">
                                                        <h4 className="lne">
                                                            Brand
                                                        </h4>
                                                        <ul className="cd-filter-content cd-filters list check">
                                                            {/* Render categories dynamically */}
                                                            {brands.map(brand => (
                                                                <li key={brand.id}>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={brand.brand_title}
                                                                        value={brand.brand_title}
                                                                        checked={selectedBrands.includes(brand.brand_title)}
                                                                        onChange={handleBrandChange}
                                                                    />
                                                                    <label htmlFor={brand.brand_title}> &nbsp;{brand.brand_title} </label>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {/* Store filter */}
                                                    {/* <div className="cd-filter-block">
                                                        <h4 className="lne">
                                                            Discount
                                                        </h4>
                                                        <ul className="cd-filter-content cd-filters list">
                                                            <li>
                                                                <input
                                                                    type="radio"
                                                                    name="storeFilter"
                                                                    id="allStore"
                                                                    checked={
                                                                        selectedFilter ===
                                                                        "All"
                                                                    }
                                                                    onChange={() =>
                                                                        handleFilterSelection(
                                                                            "store",
                                                                            "All"
                                                                        )
                                                                    }
                                                                />
                                                                <label htmlFor="allStore">
                                                                    30% or more
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    type="radio"
                                                                    name="storeFilter"
                                                                    id="appleStore"
                                                                    checked={
                                                                        selectedFilter ===
                                                                        "Apple Store"
                                                                    }
                                                                    onChange={() =>
                                                                        handleFilterSelection(
                                                                            "store",
                                                                            "Apple Store"
                                                                        )
                                                                    }
                                                                />
                                                                <label htmlFor="appleStore">
                                                                    40% or more
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    type="radio"
                                                                    name="storeFilter"
                                                                    id="amazon"
                                                                    checked={
                                                                        selectedFilter ===
                                                                        "Amazon.com"
                                                                    }
                                                                    onChange={() =>
                                                                        handleFilterSelection(
                                                                            "store",
                                                                            "Amazon.com"
                                                                        )
                                                                    }
                                                                />
                                                                <label htmlFor="amazon">
                                                                    50% or more
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div> */}
                                                    {/* Customer Rating */}
                                                    <div className="cd-filter-block">
                                                        <h4 className="lne">
                                                            Customer Ratings
                                                        </h4>
                                                        <div class="checkbox-group">
                                                            <input
                                                                type="checkbox"
                                                                id="fiveStart"
                                                                onChange={handleRatingChange}
                                                            />
                                                            &nbsp;
                                                            <label
                                                                for="fiveStart"
                                                                style={{
                                                                    color: "#ff9800",
                                                                }}
                                                            >
                                                                ★★★★★
                                                            </label>
                                                        </div>
                                                        <div class="checkbox-group">
                                                            <input
                                                                type="checkbox"
                                                                id="fourStart"
                                                                onChange={handleRatingChange}
                                                            />
                                                            &nbsp;
                                                            <label
                                                                for="fourStart"
                                                                style={{
                                                                    color: "#ff9800",
                                                                }}
                                                            >
                                                                ★★★★
                                                            </label>
                                                        </div>
                                                        <div class="checkbox-group">
                                                            <input
                                                                type="checkbox"
                                                                id="threeStart"
                                                                onChange={handleRatingChange}
                                                            />
                                                            &nbsp;
                                                            <label
                                                                for="threeStart"
                                                                style={{
                                                                    color: "#ff9800",
                                                                }}
                                                            >
                                                                ★★★
                                                            </label>
                                                        </div>
                                                        <div class="checkbox-group">
                                                            <input
                                                                type="checkbox"
                                                                id="twoStart"
                                                                onChange={handleRatingChange}
                                                            />
                                                            &nbsp;
                                                            <label
                                                                for="twoStart"
                                                                style={{
                                                                    color: "#ff9800",
                                                                }}
                                                            >
                                                                ★★
                                                            </label>
                                                        </div>
                                                        <div class="checkbox-group">
                                                            <input
                                                                type="checkbox"
                                                                id="oneStart"
                                                                onChange={handleRatingChange}
                                                            />
                                                            &nbsp;
                                                            <label
                                                                for="oneStart"
                                                                style={{
                                                                    color: "#ff9800",
                                                                }}
                                                            >
                                                                ★
                                                            </label>
                                                        </div>
                                                    </div>
                                                    {/* price filter */}
                                                    <div className="cd-filter-block">
                                                        <h4 className="lne">
                                                            Price
                                                        </h4>
                                                        {/* <input type="range" class="form-control-range" id="formControlRange"></input> */}
                                                        <div id="app">
                                                            <div className="range-slider">
                                                                <input
                                                                    type="range"
                                                                    min="7000"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={minPrice}
                                                                    onChange={handleMinChange}
                                                                />
                                                                <input
                                                                    type="range"
                                                                    min="7000"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={maxPrice}
                                                                    onChange={handleMaxChange}
                                                                />
                                                                
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="row pl-3">
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="number"
                                                                    min="7000"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={minPrice}
                                                                    onChange={handleMinChange}
                                                                    className="ran"
                                                                />
                                                            </div>
                                                            <div className="col-md-6 float-right">
                                                                <input
                                                                    type="number"
                                                                    min="7000"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={maxPrice}
                                                                    onChange={handleMaxChange}
                                                                    className="ran"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                </form>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="col-xxl-9 col-md-9 col-lg-9">
                            <div className="show-button">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="weFne">
                                            <span className="fnt">
                                                {" "}
                                                We found items for you!
                                            </span>
                                            <div className="lbl">
                                                <label className="fnt">
                                                    Sort By :
                                                </label>
                                                <div>
                                                    <select 
                                                            value={selectedOption} 
                                                            onChange={handleSelectChanges}
                                                        >
                                                            <option value="featured">Featured</option>
                                                            <option value="a-z">A-Z</option>
                                                            <option value="z-a">Z-A</option>
                                                            <option value="high-low">High-Low</option>
                                                            <option value="low-high">Low-High</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-button-group mt-0">
                                    <div className="filter-button d-inline-block d-lg-none">
                                        <a>
                                            <i className="fa-solid fa-filter" />{" "}
                                            Filter Menu
                                        </a>
                                    </div>
                                </div>
                                <div className="top-filter-menu"></div>
                            </div>
                            <div className="row product-list-section list-style">
                                {filteredItems  &&
                                    filteredItems ?.map((data) => {
                                        return (
                                            <>
                                                <div className="col-lg-4">
                                                    <div className="property-listing property-2 productHeight items applicanceDivBorder">
                                                        <div className="listing-img-wrapper">
                                                            <div className="list-img-slide">
                                                                <div className="click">
                                                                    <div>
                                                                        <a
                                                                            href={`/product/${data?.product_url}`}
                                                                        >
                                                                            <img
                                                                                src={`${BassURl}${data?.product_image}`}
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
                                                                                href={`/product/${data?.product_url}`}
                                                                                className="prt-link-detail"
                                                                            >
                                                                                {
                                                                                    data?.product_title
                                                                                }
                                                                            </a>
                                                                        </h4>
                                                                        <div
                                                                            className="proudctCardDes"
                                                                            style={{
                                                                                color: "#fff",
                                                                            }}
                                                                        >
                                                                            {parse(
                                                                                removeNonBreakingSpaces(
                                                                                    data?.short_description
                                                                                )
                                                                            )}
                                                                        </div>

                                                                        {/* <p className=""> </p> */}
                                                                    </div>
                                                                    <br />
                                                                </div>
                                                                <div
                                                                    className="footer-first"
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        marginTop:
                                                                            "12px",
                                                                    }}
                                                                >
                                                                    <div className="foot-rates">
                                                                        <span className={`elio_rate good`}>
                                                                            {data?.ratting}
                                                                        </span>
                                                                        <div className="_rate_stio">
                                                                            {renderStars(data?.ratting)}
                                                                        </div>
                                                                    </div>

                                                                    <div className="footer-first">
                                                                        <h6 className="listing-card-info-price mb-0  price-style">
                                                                            ₹
                                                                            &nbsp;
                                                                            {formatNumberWithCommas(
                                                                                data?.product_price
                                                                            )}
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="listing-detail-footer">
                                                            <div className="footer-flex ">
                                                                <ApplianceAdd
                                                                    data={data}
                                                                />
                                                                {/* <div className="prt-view" onClick={addtocart}>
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              &nbsp; Add to cart
            </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default AppliancesDetails;
