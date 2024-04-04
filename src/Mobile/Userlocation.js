import React, { useEffect, useRef, useState } from 'react';
import "./MainBody.css";

function Userlocation() {
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        fields: ["place_id", "geometry", "name", "formatted_address"],
    };
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );
    }, []);


    return (
        <>
            <div className='container bg-white'>
                <div className='row'>
                    <div className='col-lg-12 mt-4'>
                        <div className="search-boxs mt-2">
                            <i className=" icli search">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="11.7666"
                                        cy="11.7666"
                                        r="8.98856"
                                        stroke="#200E32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.0183 18.4851L21.5423 22"
                                        stroke="#200E32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </i>
                            <input
                                className="form-control"
                                ref={inputRef}
                                type="search"
                                placeholder="Search here..."
                            />
                        </div>
                    </div>

                </div>
                
            </div>
            <hr style={{backgroundColor:"#dad9d9",height:"20px"}} />


            <section style={{height:"80vh",overflowY:"hidden"}}>
                <div className=''></div>
            </section>
            

        </>
    )
}

export default Userlocation;