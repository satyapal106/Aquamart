import React from 'react'
import { addToServiceCartAction } from '../Redux/Action/CartAction';
import { useDispatch, useSelector } from 'react-redux';
import { data } from 'jquery';
import { useState } from 'react';
function MobileProductQty() {
    const dispatch = useDispatch();

    const [qty, setqty] = useState()

    const increaseQuantity = (data, qty) => {
        const newQty = qty + 1;

        if (5 <= qty) {
            return;
        }
        dispatch(addToServiceCartAction(data, newQty));
    };

    const decreaseQuantity = (data, qty) => {
        const newQty = qty - 1;
        if (1 >= qty) {
            return;
        }
        dispatch(addToServiceCartAction(data, newQty));
    };

    const addToServiceCartReducer = useSelector((state) => state?.addToServiceCartReducer);
    const { cartItemService } = addToServiceCartReducer;

    return (
        <>
            <i className="fa fa-minus sub" aria-hidden="true" />

            <input type="number" placeholder={1} />
            <i className="fa fa-plus add" data-feather="plus" aria-hidden="true"
            />
        </>
    )
}

export default MobileProductQty