import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../Redux/Action/CartAction';

function MobileAddtocart(productData) {
    const dispatch = useDispatch();
    function addtocart() {
        dispatch(addToCartAction(productData));
    }
    return (
        <>

            <div className="plus-theme" onClick={addtocart}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus"
                >
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                </svg>
            </div>



        </>
    )
}

export default MobileAddtocart