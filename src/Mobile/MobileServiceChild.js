import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BassURl from '../Api/Api';
import { addToServiceCartAction } from '../Redux/Action/CartAction';
import MobileProductQty from './MobileProductQty';
import './MobileService.css';


function MobileServiceChild({ data }) {
    const dispatch = useDispatch();
    function addtocart() {
        dispatch(addToServiceCartAction(data, 1));
    }

    const addToServiceCartReducer = useSelector((state) => state?.addToServiceCartReducer);
    const { cartItemService } = addToServiceCartReducer;

    const [activeId, setActiveId] = useState();
    return (
        <>
            <div className="product-list media">
                <a>
                    <img src={`${BassURl}${data?.service_image}`} alt="offer" />
                </a>
                <div className="media-body">
                    <a className="font-sms">
                        {data?.service_title}
                    </a>
                    {/* <span className="content-color font-xs">{data?.description}</span> */}
                    <span className="title-color font-sms">
                        ₹ {data?.service_price}
                        <span className="badges-round bg-theme-theme font-xs">50% off</span>
                    </span>

                    <div className="plus-minus" onClick={addtocart}>
                        {




                            activeId === data.id ? (<>
                                <MobileProductQty item={data} />



                            </>) : (<div>

                                <span className='added' onClick={() => { setActiveId(data.id) }}>ADD +</span>

                            </div>)


                        }


                    </div>


                </div>
            </div>








        </>
    )
}

export default MobileServiceChild