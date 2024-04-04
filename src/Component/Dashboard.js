import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'

function Dashboard() {

    const googleUser = JSON.parse(window.localStorage.getItem('user'));
    return (
        <>
            <Navbar />
            <Banner />
            <section className="gray pt-5 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="property_dashboard_navbar">
                                <div className="dash_user_avater">
                                    <img
                                        src={googleUser?.photoURL}
                                        className="img-fluid avater"
                                        alt=""
                                    />
                                    <h4>{googleUser?.displayName}</h4>
                                    <span>{googleUser?.email}</span>
                                </div>
                                <div className="dash_user_menues">
                                    <ul>
                                        <li className="active">
                                            <a href="dashboard.html">
                                                <i className="fa fa-tachometer-alt" />
                                                Dashboard<span className="notti_coun style-1">4</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="my-profile.html">
                                                <i className="fa fa-user-tie" />
                                                My Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="bookmark-list.html">
                                                <i className="fa fa-bookmark" />
                                                Saved Property<span className="notti_coun style-2">7</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="my-property.html">
                                                <i className="fa fa-tasks" />
                                                My Properties
                                            </a>
                                        </li>
                                        <li>
                                            <a href="messages.html">
                                                <i className="fa fa-envelope" />
                                                Messages<span className="notti_coun style-3">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="choose-package.html">
                                                <i className="fa fa-gift" />
                                                Choose Package<span className="expiration">10 days left</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="submit-property-dashboard.html">
                                                <i className="fa fa-pen-nib" />
                                                Submit New Property
                                            </a>
                                        </li>
                                        <li>
                                            <a href="change-password.html">
                                                <i className="fa fa-unlock-alt" />
                                                Change Password
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dash_user_footer">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-power-off" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-comment" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-cog" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="dashboard-body">

                                {/*  row */}
                                <div className="row">


                                </div>
                                {/* row */}
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="mb-0">Order Status</h4>
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="table-responsive">
                                                    <table className="table table-lg table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Product ID</th>
                                                                <th>Status</th>
                                                                <th>Price</th>
                                                                <th>Date Created</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/img/p-1.png"
                                                                            className="avatar avatar-30 mr-2"
                                                                            alt="Avatar"
                                                                        />
                                                                        Luxury House
                                                                    </a>
                                                                </td>
                                                                <td>#258475</td>
                                                                <td>
                                                                    <div className="label text-success bg-success-light">
                                                                        Paid
                                                                    </div>
                                                                </td>
                                                                <td>$ 310</td>
                                                                <td>04/10/2013</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/img/p-2.png"
                                                                            className="avatar avatar-30 mr-2"
                                                                            alt="Avatar"
                                                                        />
                                                                        Sargun Apartment
                                                                    </a>
                                                                </td>
                                                                <td>#249578</td>
                                                                <td>
                                                                    <div className="label text-warning bg-warning-light">
                                                                        Pending
                                                                    </div>
                                                                </td>
                                                                <td>$ 584.14</td>
                                                                <td>05/08/2014</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/img/p-3.png"
                                                                            className="avatar avatar-30 mr-2"
                                                                            alt="Avatar"
                                                                        />
                                                                        Preet Silver City
                                                                    </a>
                                                                </td>
                                                                <td>#248712</td>
                                                                <td>
                                                                    <div className="label text-danger bg-danger-light">
                                                                        Cancel
                                                                    </div>
                                                                </td>
                                                                <td>$ 710.5</td>
                                                                <td>11/05/2015</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/img/p-4.png"
                                                                            className="avatar avatar-30 mr-2"
                                                                            alt="Avatar"
                                                                        />
                                                                        Mount See Villa
                                                                    </a>
                                                                </td>
                                                                <td>#287246</td>
                                                                <td>
                                                                    <div className="label text-success bg-success-light">
                                                                        Paid
                                                                    </div>
                                                                </td>
                                                                <td>$ 482.70</td>
                                                                <td>06/09/2016</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* row */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}

export default Dashboard