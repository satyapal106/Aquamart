import React from "react";
import { useState } from "react";
import "./MobileFilter.css";

function MobileFilter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleFilterSelection = (type, value) => {
        setSelectedFilter(value);
        setFilterOpen(false);
        setFilters({ ...filters, [type]: value });
    };

    // Rating Start
    const handleFilterSelections = (type, value) => {
        setSelectedFilters(value);
        setFilterOpen(false);
        setFilters({ ...filters, [type]: value });
    };
    // Rating End

    const handleInputChange = (e) => {
        setInputText(e.target.value.toLowerCase());
    };

    const handleCategoryChange = (e) => {
        const { checked, value } = e.target;
        let updatedCategories = [...filters.category];

        if (checked && !updatedCategories.includes(value)) {
            updatedCategories.push(value);
        } else {
            updatedCategories = updatedCategories.filter(
                (category) => category !== value
            );
        }

        setFilters({ ...filters, category: updatedCategories });
    };
    // Jagriti End

    // Jyoti Start
    const [minAngle, setMinAngle] = useState(10);
    const [maxAngle, setMaxAngle] = useState(30);

    const handleMinChange = (event) => {
        let val = parseInt(event.target.value);
        if (val > maxAngle) {
            setMaxAngle(val);
        }
        setMinAngle(val);
    };

    const handleMaxChange = (event) => {
        let val = parseInt(event.target.value);
        if (val < minAngle) {
            setMinAngle(val);
        }
        setMaxAngle(val);
    };
    // Jyoti End

    // Priyanka Start
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
    // Priyanka End
    return (
        <div className="col-xxl-3 col-md-3 col-lg-3">
            <div className="">
                <main
                    className={`cd-main-content ₹{
                                    filterOpen ? "filter-is-visible" : ""
                                }`}
                >
                    <div className="cd-filter">
                        {/* Filter content */}
                        <form>
                            {/* Tanu Start */}
                            <div
                                className={`dropdown-wrapper ${
                                    isOpen ? "active" : ""
                                }`}
                            >
                                <span className="dropdown-heading fil">
                                    Filter
                                </span>
                                <i
                                    className={`toggle fa ${
                                        isOpen
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                    }`}
                                    onClick={toggleDropdown}
                                ></i>
                                <div className="icon-wrapper">
                                    {isOpen && (
                                        <div className="dropdown-content">
                                            {/* Categories Brand filter */}
                                            <div className="cd-filter-block">
                                                <h4 className="lne">Brand</h4>
                                                <ul className="cd-filter-content cd-filters list chec">
                                                    {/* Render categories dynamically */}
                                                    {[
                                                        "Aquqguard",
                                                        "Kent",
                                                        "Pureit",
                                                        "Bolt + Copper",
                                                        "Livpure",
                                                        "Show All",
                                                    ].map((category) => (
                                                        <li key={category}>
                                                            <input
                                                                type="checkbox"
                                                                id={category}
                                                                value={category}
                                                                checked={filters.category.includes(
                                                                    category
                                                                )}
                                                                onChange={
                                                                    handleCategoryChange
                                                                }
                                                            />{" "}
                                                            &nbsp;
                                                            <label
                                                                htmlFor={
                                                                    category
                                                                }
                                                            >
                                                                {category}
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Store filter */}
                                            <div className="cd-filter-block">
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
                                            </div>
                                            {/* Customer Rating */}
                                            <div className="cd-filter-block">
                                                <h4 className="lne">
                                                    Customer Ratings
                                                </h4>
                                                <div class="checkbox-group">
                                                    <input
                                                        type="checkbox"
                                                        id="fiveStart"
                                                    />{" "}
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
                                                    />{" "}
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
                                                    />{" "}
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
                                                    />{" "}
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
                                                <h4 className="lne">Price</h4>
                                                {/* <input type="range" class="form-control-range" id="formControlRange"></input> */}
                                                <div id="app">
                                                            <div className="range-slider">
                                                                <input
                                                                    type="range"
                                                                    min="0"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={
                                                                        minAngle
                                                                    }
                                                                    onChange={
                                                                        handleMinChange
                                                                    }
                                                                />
                                                                <input
                                                                    type="range"
                                                                    min="0"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={
                                                                        maxAngle
                                                                    }
                                                                    onChange={
                                                                        handleMaxChange
                                                                    }
                                                                />
                                                                <div></div>
                                                                <span className="rangePrice">Price :</span> &nbsp; &nbsp; 
                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={
                                                                        minAngle
                                                                    }
                                                                    onChange={
                                                                        handleMinChange
                                                                    }
                                                                    className="ran"
                                                                />
                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    max="30000"
                                                                    step="1"
                                                                    value={
                                                                        maxAngle
                                                                    }
                                                                    onChange={
                                                                        handleMaxChange
                                                                    }
                                                                    className="ran"
                                                                />
                                                            </div>
                                                        </div>
                                                {/* <div className="cd-filter-content">
                                                    <div className="cd-select cd-filters">
                                                        <select
                                                            value={
                                                                filters.price
                                                            }
                                                            onChange={(e) =>
                                                                setFilters({
                                                                    ...filters,
                                                                    price: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className="form-control check"
                                                        >
                                                            <option value="">
                                                                Under ₹10,000
                                                            </option>
                                                            <option value=".option1">
                                                                10,000-15,000
                                                            </option>
                                                            <option value=".option2">
                                                                15,000-20,000
                                                            </option>
                                                            <option value=".option3">
                                                                20,000-25,000
                                                            </option>
                                                            <option value=".option4">
                                                                25,000-30,000
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Tanu End */}
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MobileFilter;
