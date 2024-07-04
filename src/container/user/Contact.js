import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div>
            <div className="page-style-a">
                <div className="container">
                    <div className="page-intro">
                        <h2>Contact</h2>
                        <ul className="bread-crumb">
                            <li className="has-separator">
                                <i className="ion ion-md-home" />
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="is-marked">
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page Introduction Wrapper /- */}
            {/* Contact-Page */}
            <div className="page-contact u-s-p-t-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="touch-wrapper">
                                <h1 className="contact-h1">Get In Touch With Us</h1>
                                <form>
                                    <div className="group-inline u-s-m-b-30">
                                        <div className="group-1 u-s-p-r-16">
                                            <label htmlFor="contact-name">Your Name
                                                <span className="astk">*</span>
                                            </label>
                                            <input type="text" id="contact-name" className="text-field" placeholder="Name" />
                                        </div>
                                        <div className="group-2">
                                            <label htmlFor="contact-email">Your Email
                                                <span className="astk">*</span>
                                            </label>
                                            <input type="text" id="contact-email" className="text-field" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="u-s-m-b-30">
                                        <label htmlFor="contact-subject">Subject
                                            <span className="astk">*</span>
                                        </label>
                                        <input type="text" id="contact-subject" className="text-field" placeholder="Subject" />
                                    </div>
                                    <div className="u-s-m-b-30">
                                        <label htmlFor="contact-message">Message:</label>
                                        <textarea className="text-area" id="contact-message" defaultValue={""} />
                                    </div>
                                    <div className="u-s-m-b-30">
                                        <button type="submit" className="button button-outline-secondary">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="information-about-wrapper">
                                <h1 className="contact-h1">Information About Us</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora, voluptate. Architecto aspernatur, culpa cupiditate deserunt dolore eos facere in, incidunt omnis quae quam quos, similique sunt tempore vel vero.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora, voluptate. Architecto aspernatur, culpa cupiditate deserunt dolore eos facere in, incidunt omnis quae quam quos, similique sunt tempore vel vero.
                                </p>
                            </div>
                            <div className="contact-us-wrapper">
                                <h1 className="contact-h1">Contact Us</h1>
                                <div className="contact-material u-s-m-b-16">
                                    <h6>Location</h6>
                                    <span>22,Shivnagar Society, Govindji Hall Near,</span>
                                    <span>Katargam Surat - 395004</span>
                                </div>
                                <div className="contact-material u-s-m-b-16">
                                    <h6>Email</h6>
                                    <span>ghorihet71@gmail.com</span>
                                </div>
                                <div className="contact-material u-s-m-b-16">
                                    <h6>Telephone</h6>
                                    <span>+91 99784-67317</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-s-p-t-80">
                    <div id="map" />
                </div>
            </div>
        </div>

    );
}

export default Contact;