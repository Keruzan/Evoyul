"use client";

import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '../components/SocialIcons';
import '../contact/contact.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import React, { useState } from 'react';
import {
  

  FadeFromTop,
  FadeIn,
  FadeFromBottom,

  SlideFromLeft,

  SlideFromRight
  
} from '../animation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };
  return (
    <div className="about-page2">
      {/* Hero Section */}
      <section className="about-hero-section2">
        <div className="hero-background2">
          <Image
            src="/images/contact.jpg"
            alt="About Us Background"
            fill
            priority
            className="object-cover"
          />
          
        </div>
        
        <header className='header'>
          <FadeFromTop delay='100ms' duration='slow'>
        <Link href="/">
          <Image 
            src="/images/evo.png"  
            alt="Evoyul"
            width={70}  
            height={60}  
            priority     
            className="logo-img"
          />
        </Link>
        </FadeFromTop>
        <FadeFromTop delay='100ms' duration='slow'>
        <nav className="nav-links">
          <Link href="/" className="nav-link">HOME</Link>
          <Link href="/aboutus" className="nav-link">ABOUT US</Link>
          <Link href="/services" className="nav-link">SERVICES</Link>
          <Link href="/contact" className="nav-link">CONTACT</Link>
          <Link href="/blog" className="nav-link">BLOG</Link>
        </nav>
        </FadeFromTop>
         <FadeFromTop delay='100ms' duration='slow'>
        <SocialIcons /> 
        </FadeFromTop>
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger hamburger-top ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger hamburger-middle ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger hamburger-bottom ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </header>
      
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <Link href="/" className="mobile-link" onClick={closeMenu}>HOME</Link>
        <Link href="/aboutus" className="mobile-link" onClick={closeMenu}>ABOUT US</Link>
        <Link href="/services" className="mobile-link" onClick={closeMenu}>SERVICES</Link>
        <Link href="/contact" className="mobile-link" onClick={closeMenu}>CONTACT</Link>
        <Link href="/blog" className="mobile-link" onClick={closeMenu}>BLOG</Link>
        <div className="mt-8">
          <SocialIcons />
        </div>
      </div>   
        
        <div className="hero-content2">
          <FadeIn delay='400ms' duration='slow'>
          <h1 className="hero-title2">CONTACT DETAILS</h1>
          </FadeIn>
        </div>
      </section>
      <section className="contact-section">
      {/* Top Section: Details + Map */}
      <div className="contact-top">
        {/* Left Side - Contact Details */}
       
        <div className="contact-details">
           <SlideFromLeft delay='200ms' duration='slow'>
          <h2><b>DETAILS</b></h2>
          
          
          <div className="contact-info">
            <p><strong>Address:</strong>Tharpai Lam, Phuntsholing, Bhutan</p>
            <p><strong>Phone:</strong> +975 17857442</p>
            <p><strong>Email:</strong> Evoyul@gmail.com</p>
          </div>
          </SlideFromLeft>
        </div>
        
        
        <div className="contact-map">
          <SlideFromRight delay='200ms' duration='slow'>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.22569269031334!2d89.38238527399255!3d26.861909876695243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cb3ec1c54085%3A0x1124de51af9120c!2sCR7%20Norkhil%20Lam%2C%20Phuentsholing%2021101!5e0!3m2!1sen!2sbt!4v1750432730790!5m2!1sen!2sbt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <div className="map-footer">
            <span>Keyboard shortcuts</span>
            <span>Map data ©2025 Google</span>
            <span>Terms</span>
            <span>Report a map error</span>
          </div>
          </SlideFromRight>
        </div>
       
      </div>

     
      <div className="contact-form">
        <FadeFromBottom delay='200ms' duration='slow'>
        <h3><b>Get in Touch</b></h3>
        </FadeFromBottom>
        <FadeFromBottom delay='200ms' duration='slow'>
        <div className="form-container">
            <iframe 
              src="https://form.jotform.com/251783302614453" 
              style={{
                width: '100%', 
                height: '969px', 
                minHeight: '500px', 
                border: 'none'
              }}
              title="Contact Form"
              
            />
          </div>
          </FadeFromBottom>


      </div>
      </section>
            <footer className="footer">
                <div className="footer-container">
                  {/* Left Column - Logo */}
                  <div className="footer-logo">
                    <Image
                      src="/images/evo.png" // Replace with your logo path
                      alt="evoyul"
                      width={120}
                      height={60}
                    />
                  </div>
          
                  {/* Middle Columns */}
                  <div className="footer-columns">
                    {/* Quick Links */}
                    <div className="footer-column">
                      <h3 className="footer-heading">Quick Links</h3>
                      <ul className="footer-links">
                        <li><Link href="/" className="footer-link">Home</Link></li>
                        <li><Link href="/aboutus" className="footer-link">About</Link></li>
                        <li><Link href="/services" className="footer-link">Services</Link></li>
                        <li><Link href="/contact" className="footer-link">Contact</Link></li>
                        <li><Link href="/blog" className="footer-link">Blog</Link></li>
                      </ul>
                    </div>
          
                    {/* Contact Information */}
                    <div className="footer-column">
                      <h3 className="footer-heading">Contact Information</h3>
                      <ul className="footer-links">
                        <li>Phuntsholing, Bhutan</li>
                        <li>+975 17857442 </li>
                        <li>evoyul@gmail.com</li>
                      </ul>
                    </div>
                  </div>
          
                  {/* Right Column - Social Media */}
                  <div className="footer-social">
                            <h3 className="footer-heading">Follow Us</h3>
                            <div className="social-icons">
                              <a href="https://www.facebook.com/share/1EYB1zvxNw/?mibextid=LQQJ4d" className="social-icon" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"><FaFacebook /></a>
                              <a className="social-icon"href="https://www.instagram.com/evoyul?igsh=MTN0OXUyeXZoMWJlNQ==" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"><FaInstagram /></a>
                              <a href="https://x.com/evoyul2024" className="social-icon"
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"><FaTwitter /></a>
                              <a href="https://www.linkedin.com/company/evoyul/" className="social-icon"
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Linkedin"><FaLinkedinIn /></a>
                            </div>
                          </div>
                        </div>
                  
                        
                        <div className="footer-bottom">
                          <p>© 2025 Evoyul. All Rights Reserved.</p>
                          <div className="footer-legal">
                            <Link href="https://www.termsfeed.com/live/993ff96a-19f0-4a6d-a5b9-9fea4c52c692" className="footer-link"
                            target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Privacy Policy">Privacy Policy</Link>
                            <Link href="https://www.termsfeed.com/live/16db1777-687b-49b1-a89c-3ba4dda6e522" className="footer-link"
                            target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Terms of Service">Terms of Service</Link>
                          </div>
                        </div>
              </footer>
    </div>


      )
}

export default Header;