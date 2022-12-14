import React from "react";
import "../styles/Welcome.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Welcome = () => {
    return (
        <div className=" wlc-container">
            <img src="images/ace-logo.svg" alt="ace-logo" className="a-logo" />

            <div className="wlc-body">
                <h2 className="wlc">Welcome! to Ace</h2>
                <p className="wlc-para">Let's connect you to the Decentralized web</p>
                <Link to="/page/Connect">
                    <div className="mb-2 mt-5">

                        <Button variant="primary" size="lg">Connect</Button>

                    </div>
                </Link>

            </div>
        </div>
    );

}

export default Welcome;