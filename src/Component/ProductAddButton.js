import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../Redux/Action/CartAction';

function ProductAddButton(data) {
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
        dispatch(addToCartAction(data.data, qty));
    }

    const curretUser = JSON.parse(window.localStorage.getItem('currentUser'))
    return (
        <>

            <div className="details-add-group">
                <button className="product-add" title="Add to Cart"

                    onClick={addtocart}
                >
                    <i className="fa fa-shopping-basket" />
                    <span>add to cart</span>
                </button>

            </div>



        </>
    )
}

export default ProductAddButton