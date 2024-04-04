import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { placeOrder, ServiceplaceOrder } from '../Redux/Action/OrderAction';
import './Payment.css'

function Payment() {
    const history = useNavigate()
    const addToServiceCartReducer = useSelector((state) => state?.addToServiceCartReducer);
    const { cartItemService } = addToServiceCartReducer;
    var subtotal = cartItemService?.reduce(
        (acc, item) => acc + item?.service_price * item?.qty,
        0
    );

    const addToCartReducer = useSelector((state) => state?.addToCartReducer);
    const { cartItems } = addToCartReducer;
    var Productsubtotal = cartItems?.reduce(
        (acc, item) => acc + item?.product_price * item?.qty,
        0
    );
    const cartItemss = JSON.parse(window.localStorage.getItem("cartItems"));

    const dispatch = useDispatch();
    const orderstate = useSelector((state) => state.placeOrderReducer);
    const { loading, success, error } = orderstate;
    const currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
    function tokenHandler() {
        let options = {
            "key": "rzp_test_jYMYEsyHx3C18V", // Enter the Key ID generated from the Dashboard
            "amount": (Productsubtotal * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Digital Nawab",
            "description": "Test Transaction",
            "image": "http://aquamart.co.in/assets/img/logo.webp",
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            'handler': function (response) {
                console.log(response.razorpay_payment_id);
                //   = response.razorpay_payment_id;
                dispatch(placeOrder(Productsubtotal));
                // window.location.href = '/order-success'

                // history.push('/order-success')

            },
            "prefill": {
                "name": currentUser.first_name + currentUser.last_name,
                "email": currentUser?.email,
                "contact": currentUser?.mobile
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }


        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    function ServiceHandler() {
        console.log('hello')
        let options = {
            "key": "rzp_test_jYMYEsyHx3C18V", // Enter the Key ID generated from the Dashboard
            "amount": (subtotal * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Digital Nawab",
            "description": "Test Transaction",
            "image": "http://aquamart.co.in/assets/img/logo.webp",
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            'handler': function (response) {
                console.log(response.razorpay_payment_id);
                //   = response.razorpay_payment_id;
                dispatch(ServiceplaceOrder(subtotal));
                // window.location.href = '/order-success'


                // history.push('/order-success')

            },
            "prefill": {
                "name": currentUser.first_name + currentUser.last_name,
                "email": currentUser?.email,
                "contact": currentUser?.mobile
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new window.Razorpay({ "key": "rzp_test_jYMYEsyHx3C18V" });

        rzp1.open();

    }
    return (
        <>

            <header className="header">
                <div className="logo-wrap">
                    <a href="/">
                        <i className="icli">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 7.66591L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66591C21.25 4.63591 19.111 2.74991 16.084 2.74991L7.916 2.74991C4.889 2.74991 2.75 4.63591 2.75 7.66591Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.91406 11.9999L16.0861 11.9999" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.6777 15.7479L7.91373 11.9999L11.6777 8.25192" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </i>
                    </a>
                    <h1 className="title-color font-md">Add Payment Method</h1>
                </div>
            </header>



            <main className="main-wrap payment-page mb-xxl">
                <button
                    className="d-block btn-outline-grey"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#add-card"
                    aria-controls="add-card"
                >
                    + Pay With UPI
                </button>
                {/* Payment Section Start */}
                <section className="payment-section">
                    {/* Payment Method Accordian Start */}

                    <div className="accordions" id="accordionsExample">
                        <div className="accordions-item">
                            <div className="" id="headingOne">
                                <h2 className="accordions-header" id='headingThree'>
                                    <button
                                        className="font-md title-color text-left accordions-button w-100"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Select Card

                                        <i className='float-right'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></i>
                                    </button>

                                </h2>
                            </div>
                            <div
                                id="collapseOne"
                                className="collapse"
                                aria-labelledby="headingOne"
                                data-parent="#accordionsExample"
                            >
                                <div className="accordions-body">
                                    <ul className="filter-row">
                                        <li className="filter-col ">
                                            <img
                                                className="payment-card"
                                                src="/assets/icons/svg/mastercard1.png"
                                                alt="card"
                                            />{" "}
                                            9800 XXXX XXXX 0545
                                            <span className="check">
                                                <img src="assets/icons/svg/active.svg" alt="active" />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="accordions-item">
                            <div className="" id="headingTwo">
                                <h2 className="accordions-header" id='headingThree'>
                                    <button
                                        className="font-md title-color text-left accordions-button w-100"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="collapseTwo"
                                    >
                                        Cash On Delivery

                                        <i className='float-right'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></i>
                                    </button>

                                </h2>
                            </div>
                            <div
                                id="collapseTwo"
                                className="collapse show"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionsExample"
                            >
                                <div className="accordions-body">
                                    <ul className="filter-row">
                                        <li className="filter-col active">

                                            Cash On Delivery
                                            <span className="check">
                                                <img src="assets/icons/svg/active.svg" alt="active" />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Payment Method Accordian End */}
                </section>
                {/* Payment Section End */}
                {/* Order Detail Start */}
                <section className="order-detail pt-0">
                    <h3 className="title-2">Order Details</h3>
                    {/* Detail list Start */}
                    <ul>
                        <li>
                            <span>Bag total</span>
                            <span>$220.00</span>
                        </li>
                        <li>
                            <span>Bag savings</span>
                            <span className="font-theme">-$20.00</span>
                        </li>
                        <li>
                            <span>Coupon Discount</span>
                            <a className="font-danger">
                                Apply Coupon
                            </a>
                        </li>
                        <li>
                            <span>Delivery</span>
                            <span>$50.00</span>
                        </li>
                        {cartItemss ? (<> <li>
                            <span>Total Amount</span>
                            <span>₹ {Productsubtotal}</span>
                        </li></>) : (<> <li>
                            <span>Total Amount</span>
                            <span>₹ {subtotal}</span>
                        </li></>)

                        }

                    </ul>
                    {/* Detail list End */}
                </section>
                {/* Order Detail End */}
            </main>

            {/* Order Detail End */}
            {cartItemss ? (<>  <footer className="footer-wrap footer-button" onClick={tokenHandler}>
                <Link to='' className="font-md">Confirm Payment</Link>
            </footer></>) : (<> <footer className="footer-wrap footer-button" onClick={ServiceHandler}>
                <Link to='' className="font-md">Confirm Payment</Link>
            </footer></>)

            }




        </>
    )
}

export default Payment