import React from 'react';
import './MobileAllService.css'

function MobileAllService() {
    return (
        <>
            <header className="header">
                <div className="logo-wrap">
                    <a href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 7.66591L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66591C21.25 4.63591 19.111 2.74991 16.084 2.74991L7.916 2.74991C4.889 2.74991 2.75 4.63591 2.75 7.66591Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.91406 11.9999L16.0861 11.9999" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.6777 15.7479L7.91373 11.9999L11.6777 8.25192" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                    <a href="/">
                        {" "}
                        <img
                            className="fk-logo"
                            src="http://aquamart.co.in/assets/img/logo.webp"
                            alt="logo"
                            style={{ width: "35px !important", paddingTop: "10px" }}
                        />
                    </a>
                    <a>
                        {" "}
                        <img
                            className="fk-logo fk-logo-w"
                            src="assets/images/logo/fk-logo-w.png"
                            alt="logo"
                        />
                    </a>
                </div>
                <h1 className="content-color font-sms"></h1>
                <div className="avatar-wrap">
                    <a href="/">
                        <lord-icon
                            className="lord-icon"
                            src="assets/icons/gift.json"
                            trigger="loop"
                            stroke={70}
                            colors="primary:#0baf9a,secondary:#0baf9a"
                        />
                    </a>
                </div>
            </header>
            <main className="main-wrap catagories-wide mb-xxl">
                {/* Search Box Start */}

                {/* Search Box End */}
                {/* Catagories Section Start */}
                <section className="pb-0">
                    <div className="catagories-wrap">
                        {/* Catagories Filter Start */}

                        <div
                            className="nav"
                            id="catagories-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            <div
                                className="nav-link"
                                id="catagories1-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#catagories1"
                                role="tab"
                                aria-controls="catagories1"
                                aria-selected="true"
                            >
                                <div className="content">
                                    <img src="assets/images/catagoeris/1.png" alt="catagoeris" />
                                    <span className="font-xs title-color">Oils,Refined &amp; Ghee</span>
                                </div>
                            </div>
                            <div
                                className="nav-link active"
                                id="catagories2-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#catagories2"
                                role="tab"
                                aria-controls="catagories2"
                                aria-selected="false"
                            >
                                <div className="content">
                                    <img src="assets/images/catagoeris/2.png" alt="catagoeris" />
                                    <span className="font-xs title-color">
                                        Rice, Flour &amp; Grains
                                    </span>
                                </div>
                            </div>
                            <div
                                className="nav-link"
                                id="catagories3-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#catagories3"
                                role="tab"
                                aria-controls="catagories3"
                                aria-selected="false"
                            >
                                <div className="content">
                                    <img src="assets/images/catagoeris/3.png" alt="catagoeris" />
                                    <span className="font-xs title-color">Food Cupboard</span>
                                </div>
                            </div>
                            <div
                                className="nav-link"
                                id="catagories4-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#catagories4"
                                role="tab"
                                aria-controls="catagories4"
                                aria-selected="false"
                            >
                                <div className="content">
                                    <img src="assets/images/catagoeris/4.png" alt="catagoeris" />
                                    <span className="font-xs title-color">Fresh Fruits </span>
                                </div>
                            </div>
                            <div
                                className="nav-link"
                                id="catagories5-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#catagories5"
                                role="tab"
                                aria-controls="catagories5"
                                aria-selected="false"
                            >
                                <div className="content">
                                    <img src="assets/images/catagoeris/5.png" alt="catagoeris" />
                                    <span className="font-xs title-color">Drinks&amp; Beverages</span>
                                </div>
                            </div>
                            <div
                                className="nav-link"
                                id="catagories6-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#catagories6"
                                role="tab"
                                aria-controls="catagories6"
                                aria-selected="false"
                            >
                                <div className="content">
                                    <img src="assets/images/catagoeris/6.png" alt="catagoeris" />
                                    <span className="font-xs title-color">Instant Mixes</span>
                                </div>
                            </div>
                        </div>
                        {/* Catagories Filter End */}
                        {/* Catagories Content Start */}
                        <div className="tab-content ratio2_1" id="catagories-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="catagories1"
                                role="tabpanel"
                                aria-labelledby="catagories1"
                            >
                                <div className="banner-box">
                                    <img
                                        src="assets/images/banner/catagories-banner.jpg"
                                        alt="banner"
                                        className="bg-img"
                                    />
                                    <div className="content-box">
                                        <h1 className="title-color heading">Season’s exotic Fruits</h1>
                                        <p className="content-color font-sm">Upto 20% OFF</p>
                                        <a className="btn-solid">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/vegitables.png"
                                                        alt="vegi"
                                                    />
                                                </div>
                                                <h4>Vegetables</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt=" herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/seasonings.png"
                                                        alt="seasonings"
                                                    />
                                                </div>
                                                <h4>Seasonings</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/sprouts.png"
                                                        alt="sprouts"
                                                    />
                                                </div>
                                                <h4>Sprouts</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/flowers.png"
                                                        alt="flowers"
                                                    />
                                                </div>
                                                <h4>Flowers</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/exotic.png"
                                                        alt="exotic"
                                                    />
                                                </div>
                                                <h4>Exotic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/organic.png"
                                                        alt="organic"
                                                    />
                                                </div>
                                                <h4>Organic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/cuts.png"
                                                        alt="cut"
                                                    />
                                                </div>
                                                <h4>Cuts Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/bouquets.png"
                                                        alt="bouquets"
                                                    />
                                                </div>
                                                <h4>Bouquets</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt="herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="catagories2"
                                role="tabpanel"
                                aria-labelledby="catagories2"
                            >
                                <div className="banner-box">
                                    <img
                                        src="assets/images/banner/catagories-banner.jpg"
                                        alt="banner"
                                        className="bg-img"
                                    />
                                    <div className="content-box">
                                        <h1 className="title-color heading">Season’s exotic Fruits</h1>
                                        <p className="content-color font-sm">Upto 20% OFF</p>
                                        <a className="btn-solid">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/vegitables.png"
                                                        alt="vegi"
                                                    />
                                                </div>
                                                <h4>Vegetables</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt=" herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/seasonings.png"
                                                        alt="seasonings"
                                                    />
                                                </div>
                                                <h4>Seasonings</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/sprouts.png"
                                                        alt="sprouts"
                                                    />
                                                </div>
                                                <h4>Sprouts</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/flowers.png"
                                                        alt="flowers"
                                                    />
                                                </div>
                                                <h4>Flowers</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/exotic.png"
                                                        alt="exotic"
                                                    />
                                                </div>
                                                <h4>Exotic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/organic.png"
                                                        alt="organic"
                                                    />
                                                </div>
                                                <h4>Organic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/cuts.png"
                                                        alt="cut"
                                                    />
                                                </div>
                                                <h4>Cuts Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/bouquets.png"
                                                        alt="bouquets"
                                                    />
                                                </div>
                                                <h4>Bouquets</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt="herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="catagories3"
                                role="tabpanel"
                                aria-labelledby="catagories3"
                            >
                                <div className="banner-box">
                                    <img
                                        src="assets/images/banner/catagories-banner.jpg"
                                        alt="banner"
                                        className="bg-img"
                                    />
                                    <div className="content-box">
                                        <h1 className="title-color heading">Season’s exotic Fruits</h1>
                                        <p className="content-color font-sm">Upto 20% OFF</p>
                                        <a className="btn-solid">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/vegitables.png"
                                                        alt="vegi"
                                                    />
                                                </div>
                                                <h4>Vegetables</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt=" herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/seasonings.png"
                                                        alt="seasonings"
                                                    />
                                                </div>
                                                <h4>Seasonings</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/sprouts.png"
                                                        alt="sprouts"
                                                    />
                                                </div>
                                                <h4>Sprouts</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/flowers.png"
                                                        alt="flowers"
                                                    />
                                                </div>
                                                <h4>Flowers</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/exotic.png"
                                                        alt="exotic"
                                                    />
                                                </div>
                                                <h4>Exotic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/organic.png"
                                                        alt="organic"
                                                    />
                                                </div>
                                                <h4>Organic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/cuts.png"
                                                        alt="cut"
                                                    />
                                                </div>
                                                <h4>Cuts Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/bouquets.png"
                                                        alt="bouquets"
                                                    />
                                                </div>
                                                <h4>Bouquets</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt="herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="catagories4"
                                role="tabpanel"
                                aria-labelledby="catagories4"
                            >
                                <div className="banner-box">
                                    <img
                                        src="assets/images/banner/catagories-banner.jpg"
                                        alt="banner"
                                        className="bg-img"
                                    />
                                    <div className="content-box">
                                        <h1 className="title-color heading">Season’s exotic Fruits</h1>
                                        <p className="content-color font-sm">Upto 20% OFF</p>
                                        <a className="btn-solid">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/vegitables.png"
                                                        alt="vegi"
                                                    />
                                                </div>
                                                <h4>Vegetables</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt=" herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/seasonings.png"
                                                        alt="seasonings"
                                                    />
                                                </div>
                                                <h4>Seasonings</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/sprouts.png"
                                                        alt="sprouts"
                                                    />
                                                </div>
                                                <h4>Sprouts</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/flowers.png"
                                                        alt="flowers"
                                                    />
                                                </div>
                                                <h4>Flowers</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/exotic.png"
                                                        alt="exotic"
                                                    />
                                                </div>
                                                <h4>Exotic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/organic.png"
                                                        alt="organic"
                                                    />
                                                </div>
                                                <h4>Organic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/cuts.png"
                                                        alt="cut"
                                                    />
                                                </div>
                                                <h4>Cuts Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/bouquets.png"
                                                        alt="bouquets"
                                                    />
                                                </div>
                                                <h4>Bouquets</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt="herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="catagories5"
                                role="tabpanel"
                                aria-labelledby="catagories5"
                            >
                                <div className="banner-box">
                                    <img
                                        src="assets/images/banner/catagories-banner.jpg"
                                        alt="banner"
                                        className="bg-img"
                                    />
                                    <div className="content-box">
                                        <h1 className="title-color heading">Season’s exotic Fruits</h1>
                                        <p className="content-color font-sm">Upto 20% OFF</p>
                                        <a className="btn-solid">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/vegitables.png"
                                                        alt="vegi"
                                                    />
                                                </div>
                                                <h4>Vegetables</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt=" herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/seasonings.png"
                                                        alt="seasonings"
                                                    />
                                                </div>
                                                <h4>Seasonings</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/sprouts.png"
                                                        alt="sprouts"
                                                    />
                                                </div>
                                                <h4>Sprouts</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/flowers.png"
                                                        alt="flowers"
                                                    />
                                                </div>
                                                <h4>Flowers</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/exotic.png"
                                                        alt="exotic"
                                                    />
                                                </div>
                                                <h4>Exotic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/organic.png"
                                                        alt="organic"
                                                    />
                                                </div>
                                                <h4>Organic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/cuts.png"
                                                        alt="cut"
                                                    />
                                                </div>
                                                <h4>Cuts Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/bouquets.png"
                                                        alt="bouquets"
                                                    />
                                                </div>
                                                <h4>Bouquets</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt="herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="catagories6"
                                role="tabpanel"
                                aria-labelledby="catagories6"
                            >
                                <div className="banner-box">
                                    <img
                                        src="assets/images/banner/catagories-banner.jpg"
                                        alt="banner"
                                        className="bg-img"
                                    />
                                    <div className="content-box">
                                        <h1 className="title-color heading">Season’s exotic Fruits</h1>
                                        <p className="content-color font-sm">Upto 20% OFF</p>
                                        <a className="btn-solid">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/vegitables.png"
                                                        alt="vegi"
                                                    />
                                                </div>
                                                <h4>Vegetables</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt=" herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/seasonings.png"
                                                        alt="seasonings"
                                                    />
                                                </div>
                                                <h4>Seasonings</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/sprouts.png"
                                                        alt="sprouts"
                                                    />
                                                </div>
                                                <h4>Sprouts</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/flowers.png"
                                                        alt="flowers"
                                                    />
                                                </div>
                                                <h4>Flowers</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/exotic.png"
                                                        alt="exotic"
                                                    />
                                                </div>
                                                <h4>Exotic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/organic.png"
                                                        alt="organic"
                                                    />
                                                </div>
                                                <h4>Organic</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/cuts.png"
                                                        alt="cut"
                                                    />
                                                </div>
                                                <h4>Cuts Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/bouquets.png"
                                                        alt="bouquets"
                                                    />
                                                </div>
                                                <h4>Bouquets</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/fruits.png"
                                                        alt="fruits"
                                                    />
                                                </div>
                                                <h4>Fruits</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                    {/* Staples Box Start */}
                                    <div className="col-4">
                                        <a  >
                                            <div className="staples-box">
                                                <div>
                                                    <img
                                                        className="img-fluid"
                                                        src="assets/images/product/herbs.png"
                                                        alt="herbs"
                                                    />
                                                </div>
                                                <h4>Herbs</h4>
                                            </div>
                                        </a>
                                    </div>
                                    {/* Staples Box End */}
                                </div>
                            </div>
                        </div>
                        {/* Catagories Content End */}
                    </div>
                </section>
                {/* Catagories Section End */}
            </main>





        </>
    )
}

export default MobileAllService