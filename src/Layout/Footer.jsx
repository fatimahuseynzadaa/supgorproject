import React from 'react'
import appStore from "../assets/images/apple-store.png"
import googlePlay from '../assets/images/google-play.png'
import { BsTelephoneOutbound } from "react-icons/bs";
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container ">
                <div className="footer-top">
                    <div className=" inner ">
                        <div className="left ">
                            <div className="app-links">
                                <img src={appStore} alt="appstore" />
                                <img src={googlePlay} alt="googleplay" />
                                <div className="content">
                                    <h4>Download our app</h4>
                                    <p>Download App Get -10% Discount</p>
                                </div>
                            </div>

                        </div >
                        <div className="right ">
                            <div className="phone-icon">
                                {/* <BsTelephoneOutbound /> */}
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className="phone-content">
                                <h4>+91 289 87 21</h4>
                                <p>
                                    Contact us by calling the Helpline 24/7</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="footer-midd">
                    <div className="row">
                        <div className="left col-12 col-md-5">
                            <h4>Join the Supgor Club!</h4>
                            <p>Whether you’re welcoming new contacts or sharing the latest news, you can make your business look good in just a few clicks.</p>
                        </div>
                        <div className="right  col-12 col-md-5">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                            </div>
                            <p>By subscribing you agree to our  Terms & Conditions and Privacy & Cookies Policy .</p>

                        </div>
                    </div>
                </div>

                <div className="footer-main">

                    <div className="supgor">
                        <img src={logo} alt="logo-footer" />
                        <div class="site-contact">
                            <p>75 Hoel Trok Station Road, Cardiff, UK United Kingdom</p>
                            <p><a href="mailto:info@example.com">info@example.com</a></p>
                        </div>
                    </div>

                    <div className="links ">
                        <div className="row">
                            <ul className='col-12 col-md-3'>
                                <li><h4>Get to Know Us
                                </h4></li>
                                <li><a href="">Careers for Supgor </a></li>
                                <li><a href="">About Supgor</a></li>
                                <li><a href="">Inverstor Relations</a></li>
                                <li><a href="">Supgor Devices</a></li>
                                <li><a href="">Customer reviews</a></li>
                                <li><a href="">Social Responsibility</a></li>
                                <li><a href="">Store Locations</a></li>
                            </ul>
                            <ul className='col-12 col-md-3'>
                                <li><h4>Get to Know Us
                                </h4></li>
                                <li><a href="">Careers for Supgor </a></li>
                                <li><a href="">About Supgor</a></li>
                                <li><a href="">Inverstor Relations</a></li>
                                <li><a href="">Supgor Devices</a></li>
                                <li><a href="">Customer reviews</a></li>
                                <li><a href="">Social Responsibility</a></li>
                                <li><a href="">Store Locations</a></li>
                            </ul>
                            <ul className='col-12 col-md-3'>
                                <li><h4>Get to Know Us
                                </h4></li>
                                <li><a href="">Careers for Supgor </a></li>
                                <li><a href="">About Supgor</a></li>
                                <li><a href="">Inverstor Relations</a></li>
                                <li><a href="">Supgor Devices</a></li>
                                <li><a href="">Customer reviews</a></li>
                                <li><a href="">Social Responsibility</a></li>
                                <li><a href="">Store Locations</a></li>
                            </ul>
                            <ul className='col-12 col-md-3'>
                                <li><h4>Get to Know Us
                                </h4></li>
                                <li><a href="">Careers for Supgor </a></li>
                                <li><a href="">About Supgor</a></li>
                                <li><a href="">Inverstor Relations</a></li>
                                <li><a href="">Supgor Devices</a></li>
                                <li><a href="">Customer reviews</a></li>
                                <li><a href="">Social Responsibility</a></li>
                                <li><a href="">Store Locations</a></li>
                            </ul>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer