import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                {/* Outer-Footer */}
                <div className="outer-footer-wrapper u-s-p-y-80">
                    <h6>
                        For special offers and other discount information
                    </h6>
                    <h1>
                        Subscribe to our Newsletter
                    </h1>
                    <p>
                        Subscribe to the mailing list to receive updates on promotions, new arrivals, discount and
                        coupons.
                    </p>
                    <form className="newsletter-form">
                        <label className="sr-only" htmlFor="newsletter-field">Enter your Email</label>
                        <input type="text" id="newsletter-field" placeholder="Your Email Address" />
                        <button type="submit" className="button">SUBMIT</button>
                    </form>
                </div>
                {/* Outer-Footer /- */}
                {/* Mid-Footer */}
                <div className="mid-footer-wrapper u-s-p-b-80">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-list">
                                <h6>CUSTOMER SERVICE</h6>
                                <ul>
                                    <li>
                                        <a href="faq.html">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="track-order.html">Track Order</a>
                                    </li>
                                    <li>
                                        <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-list">
                                <h6>COMPANY</h6>
                                <ul>
                                    <li>
                                        <a href="home.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-list">
                                <h6>INFORMATION</h6>
                                <ul>
                                    <li>
                                        <a href="store-directory.html">Categories Directory</a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html">My Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">My Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-list">
                                <h6>Address</h6>
                                <ul>
                                    <li>
                                        <i className="fas fa-location-arrow u-s-m-r-9" />
                                        <span>22,Shivnagar Society, Govindji Hall Near, Katargam Surat - 395004</span>
                                    </li>
                                    <li>
                                        <a href="tel:+91 99784-67317">
                                            <i className="fas fa-phone u-s-m-r-9" />
                                            <span>+91 99784-67317</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:ghorihet71@gmail.com">
                                            <i className="fas fa-envelope u-s-m-r-9" />
                                            <span>
                                                ghorihet71@gmail.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mid-Footer /- */}
                {/* Bottom-Footer */}
                <div className="bottom-footer-wrapper">
                    <div className="social-media-wrapper">
                        <ul className="social-media-list">
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-rss" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-pinterest" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="copyright-text">Copyright © 2018
                        <a href="home.html">Groover</a> All Right Reserved
                    </p>
                </div>
            </div>
            {/* Bottom-Footer /- */}
        </footer>
    );
}

export default Footer;