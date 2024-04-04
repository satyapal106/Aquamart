import React from 'react';
import { motion } from "framer-motion";
function AddAddress(showResults ) {
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "100%" },
    }
    function hides(){
        showResults(false)
    }
    return (
        <>
            <motion.div

                animate={showResults ? "open" : "closed"}
                variants={variants}
                className={showResults ? "offcanvas add-address offcanvas-bottom show " : "offcanvas add-address offcanvas-bottom"}
                tabIndex={-1}
                id="add-address"
                aria-labelledby="add-address"
                style={{ visibility: showResults ? "visible" : 'hidden' }}
                aria-hidden="true"
            >
                <div className="offcanvas-header">
                    <h5 className="title-color font-md fw-600">Add Address</h5>
                </div>
                <div className="offcanvas-body small">
                    <form className="custom-form">
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="1234 Main St"
                                className="form-control"
                            />
                            <input
                                type="text"
                                placeholder="Apartment,studio, or floor"
                                className="form-control"
                                style={{ marginTop: "17px" }}
                            />
                        </div>
                        <div className="input-box">
                            <select className="select form-control">
                                <option disabled="" selected="" value="">
                                    City
                                </option>
                                <option value={2}>Option 1</option>
                                <option value={3}>Option 2</option>
                                <option value={4}>Option 3</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <select className="select form-control">
                                <option disabled="" selected="" value="">
                                    State
                                </option>
                                <option value={2}>Option 1</option>
                                <option value={3}>Option 2</option>
                                <option value={4}>Option 3</option>
                            </select>
                        </div>
                        <div className="input-box mb-0">
                            <input
                                type="number"
                                placeholder="Zip"
                                id="form3Example3"
                                className="form-control"
                            />
                        </div>
                    </form>
                </div>
                <div className="offcanvas-footer">
                    <div className="btn-box">
                        <button
                            className="btn-outline font-md"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            onClick={hides}
                        >
                            Close
                        </button>
                        <button
                            className="btn-solid font-md"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </motion.div>





        </>
    )
}

export default AddAddress