import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartAction } from '../Redux/Action/CartAction';

function MobileProductChild({ product }) {
    const dispatch = useDispatch();
    const [qty, setCount] = useState(1);
    const handleIncrement = () => {

        if (qty < 5) {

            setCount((prevCount) => prevCount + 1);
        }
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        if (qty > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    // add to cart 

    function addtocart() {
        dispatch(addToCartAction(product, qty));
    }

    const curretUser = JSON.parse(window.localStorage.getItem('currentUser'))
    return (
        <>
            <footer className="footer-wrap shop">
                <ul className="footer">
                    <li className="footer-item">
                        <div className="plus-minus">
                            <i className="fa fa-minus" aria-hidden="true" onClick={handleDecrement} />

                            <input type="number" value={qty} />

                            <i className="fa fa-plus" aria-hidden="true" onClick={handleIncrement} />
                        </div>
                    </li>
                    {curretUser ? (<>  <li className="footer-item">
                        <Link to="/mobile-product-cart" className="font-md" onClick={addtocart}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg></Link>
                    </li></>) : (<>  <li className="footer-item">
                        <Link to="/mobile-login" className="font-md">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg></Link>
                    </li></>)}

                </ul>
            </footer>


        </>
    )
}

export default MobileProductChild