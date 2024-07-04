import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation(props) {
    return (
        <div>
            <div id="app">
                {/* Checkout-Confirmation-Page */}
                <div className="page-checkout-confirm">
                    <div className="vertical-center">
                        <div className="text-center">
                            <h1>Thank you!</h1>
                            <h5>If you haven't received it yet. click to <button>resend confirmation email</button>.</h5>
                            <Link to={"/"} className="thank-you-back">Back to homepage</Link>
                        </div>
                    </div>
                </div>
                {/* Checkout-Confirmation-Page /- */}
            </div>
        </div>

    );
}

export default Confirmation;