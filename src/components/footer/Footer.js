import React, { memo } from 'react'
import "./Footer.scss"

import footerLogo from "../../assets/images/footer-logo.svg"

import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className="footer__right__decoration"></div>
            <div className="footer__left__decoration"></div>
            <div className="container footer">
                <div className="footer__row">
                    <div className="footer__start">
                        <img
                            className="footer__logo"
                            src={footerLogo}
                            alt="logotip"
                        />
                        <h3>Bespoke software solutions</h3>
                        <div className="footer__start__brands">
                            <FaFacebookF />
                            <FaYoutube />
                            <FaInstagram />
                            <FaTwitter />
                            <img src="assets/images/youtube.svg" alt="" />
                            <img src="assets/images/instagram.svg" alt="" />
                            <img src="assets/images/twitter.svg" alt="" />
                        </div>
                    </div>
                    <div className="footer__center">
                        <ul className="footer__center__column">
                            <li><h5>Company</h5></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                        <ul className="footer__center__column">
                            <li><h5>Connect</h5></li>
                            <li><p>hi@finsweet.com</p></li>
                            <li><p>+(123) 456-7890</p></li>
                        </ul>
                    </div>
                    <div className="footer__end">
                        <h5>Join Newsletter</h5>
                        <form>
                            <div className="email">
                                <input type="email" placeholder="Type email here" />
                            </div>
                            <div className="subscribe">
                                <button type='button'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>© All rights reserved – Finsweet</p>
                    <div className="footer__bottom__right">
                        <h1>Privacy Policy</h1>
                        <h1>Terms & Conditions</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)