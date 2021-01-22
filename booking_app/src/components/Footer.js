import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = ({}) => {

    return (
        <div className="row mt-4 mb-4 footer-container">
            <div className="col-12 col-sm-3">
                <select className="form-select d-block mb-4 w-75" defaultValue={`English`}>
                    <option>Select language</option>
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="Swedish">Swedish</option>
                </select>
                <select className="form-select d-block w-75" defaultValue={`INR`}>
                    <option>Select currency</option>
                    <option value="USD">USD</option>
                    <option value="Euro">Euro</option>
                    <option value="Krona">Krona</option>
                </select>
            </div>
            <div className="col-12 col-sm-3">
                <a href="#" className="footer-link mb-2 d-block">Airbnb</a>
                <a href="#" className="footer-link d-block">About us</a>
                <a href="#" className="footer-link d-block">Careers</a>
                <a href="#" className="footer-link d-block">Press</a>
                <a href="#" className="footer-link d-block">Policies</a>
                <a href="#" className="footer-link d-block">Help</a>
                <a href="#" className="footer-link d-block">Diversity & Belonging</a>
            </div>
            <div className="col-12 col-sm-3">
                <a href="#" className="footer-link mb-2 d-block">Discover</a>
                <a href="#" className="footer-link d-block">Trust & Safety</a>
                <a href="#" className="footer-link d-block">Travel Credit</a>
                <a href="#" className="footer-link d-block">Gitd Cards</a>
                <a href="#" className="footer-link d-block">Airbnb Citizen</a>
                <a href="#" className="footer-link d-block">Business Travel</a>
                <a href="#" className="footer-link d-block">Guidebooks</a>
                <a href="#" className="footer-link d-block">Airbnbmag</a>
            </div>
            <div className="col-12 col-sm-3">
                <a href="#" className="footer-link mb-2 d-block">Hosting</a>
                <a href="#" className="footer-link d-block">Why Host</a>
                <a href="#" className="footer-link d-block">Hospitality</a>
                <a href="#" className="footer-link d-block">Responsible Hosting</a>
                <a href="#" className="footer-link d-block">Community Center</a>
            </div>
            <div className="col-12 social-media-part mt-3">
                <p className="d-inline-block mt-2">Airbnb, Inc.</p>
                <div className="float-right d-inline-block mt-2">
                    <a href="#" className="footer-link">Terms</a>
                    <a href="#" className="footer-link pl-2">Privacy</a>
                    <a href="#" className="footer-link pl-2">Site Map</a>
                    <a href="#" className="pl-2">
                        <FontAwesomeIcon icon={faFacebookF} color="gray" />
                    </a>
                    <a href="#" className="pl-2">
                        <FontAwesomeIcon icon={faTwitter} color="gray" />
                    </a>
                    <a href="#" className="pl-2">
                        <FontAwesomeIcon icon={faLinkedin} color="gray" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;