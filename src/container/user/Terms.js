import React from 'react';
import { Link } from 'react-router-dom';

function Terms(props) {
    return (
        <div>
            <div className="page-style-a">
                <div className="container">
                    <div className="page-intro">
                        <h2>Terms</h2>
                        <ul className="bread-crumb">
                            <li className="has-separator">
                                <i className="ion ion-md-home" />
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="is-marked">
                                <Link to={'/terms'}>Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page Introduction Wrapper /- */}
            {/* Terms-&-Conditions-Page */}
            <div className="page-term u-s-p-t-80">
                <div className="container">
                    <div className="term u-s-m-b-50">
                        <h1>Terms &amp; Conditions</h1>
                        <h1>Please read our “Terms &amp; Conditios” very carefully and learn our all rules.</h1>
                        <p>These rules were modified on 9 April 2018.</p>
                    </div>
                    <ul className="term-list">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci dicta dolorum eius enim iusto maiores natus nostrum quis voluptatibus? Ad illum ipsum libero officia quis quos ratione reiciendis rem?
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Terms;