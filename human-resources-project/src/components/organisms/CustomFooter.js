import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="container px-1">
        <div className="footer">
          <div className="col footer-logo-container">
            
          </div>
          <div className="footer-links row px-3">
            <Link to="/" className="footer-link">HomePage</Link>
            <Link to="/login" className="footer-link">Login</Link>
            <Link to="/register" className="footer-link">Get An Offer</Link>
            <Link to="/urun" className="footer-link">Product</Link>
          </div>
        </div>
      
        <div className="line "></div>
        <p className="footer-title">&copy; 2024 Workforce Solutions All rights reserved.</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
