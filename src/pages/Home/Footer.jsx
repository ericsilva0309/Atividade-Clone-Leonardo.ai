// src/components/Footer.js
import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
    <div class="footer-container">
        <div class="footer-section about">
            <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/logo-leonardo-ai.svg" alt="Logo" class="footer-logo"/>
            <h1>Leonardo.ai</h1>
            <p>Leonardo Interactive Pty Ltd</p>
            <p>ABN: 56 662 209 485</p>
        </div>
        
        <div class="footer-section links">
            <h4>About</h4>
            <ul>
                <li><a href="#">API</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Leonardo Creator Program</a></li>
            </ul>
        </div>
        
        <div class="footer-section stay-tuned">
            <h4>Stay tuned!</h4>
            <ul>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">X (Twitter)</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Fanbook</a></li>
            </ul>
        </div>
        
        <div class="footer-section app-links">
            <h4>Get the App</h4>
            <a href="#"><img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/09/btn-appstore.svg" alt="App Store"/></a>
            <a href="#"><img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/09/btn-g-play.svg" alt="Google Play"/></a>
        </div>
    </div>
    
    <div class="footer-separator"></div>

    <div class="footer-bottom">
        <a href="#">Legal Notice</a>
        <a href="#">DMCA</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
    </div>
</footer>

  );
}

export default Footer;
