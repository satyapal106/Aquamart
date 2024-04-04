import React from 'react';
import './FooterMenu.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function FooterMenu() {
    return (
        <>
            <motion.footer initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 2, y: 0 }}
                exit={{ opacity: 0, y: 400 }} className="footer-wrap">
                <ul className="footer">
                    <li className="footer-item active">
                        <Link to="/" className="footer-link">
                            <i className="fa fa-home" aria-hidden="true" />

                            <span>Home</span>
                        </Link>
                    </li>
                    <li activeClassName='active' className="footer-item">
                        <Link to="/mobile-error" className="footer-link">
                            <img src="/assets/icons/shop.png" alt="" style={{ width: "24px" }} />
                            <span>Shop</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <a to="/mobile-error" className="footer-link">
                            <i className="fa fa-search" aria-hidden="true" />


                            <span>Search</span>
                        </a>
                    </li>
                    <li className="footer-item">
                        <Link to="/mobile-error" className="footer-link">
                            <img className='icon' src="/assets/icons/gif.gif" alt="" srcset="" />
                            <span className="offer">Offers</span>
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/mobile-cart" className="footer-link">
                            <i className="fa fa-shopping-bag" aria-hidden="true" />

                            <span>Cart</span>
                        </Link>
                    </li>
                </ul>
            </motion.footer>





        </>
    )
}

export default FooterMenu