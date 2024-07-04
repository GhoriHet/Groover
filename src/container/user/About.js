import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div>
            <div className="page-style-a">
                <div className="container">
                    <div className="page-intro">
                        <h2>About</h2>
                        <ul className="bread-crumb">
                            <li className="has-separator">
                                <i className="ion ion-md-home" />
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="is-marked">
                                <Link to={"/about"}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page Introduction Wrapper /- */}
            {/* About-Page */}
            <div className="page-about u-s-p-t-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-me-info u-s-m-b-30">
                                <h1>Welcome to 
                                    <span style={{marginLeft: 10}}>Groover</span>
                                </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, delectus, modi? Accusamus fuga itaque laborum modi nam ullam vel veniam! Beatae consectetur debitis ipsa ipsam iusto provident quod. Sit, voluptatum!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ea, earum eum eveniet ex, expedita id molestias nisi perspiciatis saepe vero voluptas voluptatum. Id, illum ipsum iste laboriosam placeat quo.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, delectus, modi? Accusamus fuga itaque laborum modi nam ullam vel veniam! Beatae consectetur debitis ipsa ipsam iusto provident quod. Sit, voluptatum!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ea, earum eum eveniet ex, expedita id molestias nisi perspiciatis saepe vero voluptas voluptatum. Id, illum ipsum iste laboriosam placeat quo.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, delectus, modi? Accusamus fuga itaque laborum modi nam ullam vel veniam! Beatae consectetur debitis ipsa ipsam iusto provident quod. Sit, voluptatum!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ea, earum eum eveniet ex, expedita id molestias nisi perspiciatis saepe vero voluptas voluptatum. Id, illum ipsum iste laboriosam placeat quo.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-me-image u-s-m-b-30">
                                <div className="banner-hover effect-border-scaling-gray">
                                    <img className="img-fluid" src="images/about/about-1.jpg" alt="About Picture" />
                                </div>
                            </div>
                            <div className="about-social text-center u-s-m-b-30">
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;