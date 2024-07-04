import React from 'react';

function Error(props) {
    return (
        <div className="page-404">
            <div className="vertical-center">
                <div className="text-center">
                    <h1>404!</h1>
                    <h5>We can't seem to find the page you're looking for.</h5>
                    <div className="redirect-link-wrapper u-s-p-t-25">
                        <a className="redirect-link" href="home.html">
                            <span>Home</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Error;