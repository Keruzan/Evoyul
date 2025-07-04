"use client";

import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '../components/SocialIcons';
import '../aboutus/about.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import React, { useState } from 'react';
import {
  

  FadeFromTop,
  FadeFromBottom,

  SlideFromLeft,
  FadeIn
  
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
    <div className="about-page1">
      
      <section className="about-hero-section1">
        <div className="hero-background1">
          <Image
            src="/images/bgpic.jpg"
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
      
        
        <div className="hero-content1">
          <FadeIn delay='400ms' duration='slow'>
          <h1 className="hero-title1">ABOUT US</h1>
          </FadeIn>
        </div>
      </section> 

      <section className="about-section1">
        <FadeFromBottom delay='200ms' duration='slow'>
      <div className="about-header1">
        <h2 className="about-title1"> Partners in Digital Growth in Bhutan</h2>
        <p className="about-subtitle1">Unlocking Online Potential for Businesses Across the Kingdom.</p>
        
        
      </div>
      </FadeFromBottom>
      
      <div className="about-grid">
        <FadeFromBottom delay='300ms' duration='slow'>
        <div className="about-card">
          <h3 className="about-card-title">OUR VISION</h3>
          <p className="about-card-text">
            To be the trusted growth partner for 
            business through marketing that 
            drives real, measurable results.
          </p>
        </div>
        </FadeFromBottom>
        
        <FadeFromBottom delay='500ms' duration='slow'>
        <div className="about-card">
          <h3 className="about-card-title">OUR MISSION</h3>
          <p className="about-card-text">
           We help businesses scale with tailored
           strategies that attract leads, Build 
           authority, and boost revenue.
          </p>
        </div>
        </FadeFromBottom>
        <FadeFromBottom delay='700ms' duration='slow'>
        <div className="about-card">
          <h3 className="about-card-title">OBJECTIVES</h3>
          <p className="about-card-text">
            To deliver effective campaigns, Build 
            lasting client partnerships, and drive consistent business growth.
          </p>
        </div>
        </FadeFromBottom>
      </div>
    </section>
        <section className="team-section">
        <FadeFromTop delay='300ms' duration='slow'>
        <div className="team-header">
        <p className="team-subtitle">There are real great people after success</p>
        <h2 className="team-title"><b>OUR TEAM</b></h2>
       </div>
       </FadeFromTop>


      <div className="team-grid">
        <SlideFromLeft delay='400ms' duration='slow'>
        <div className="team-member">
          <div className="member-image">
            
            <div className="image-placeholder"><Image
                        src="/images/pravin.jpg" 
                        alt="Evoyul Team"
                        width={400}
                        height={150}
                        
                      /></div>
          </div>
          <h3 className="member-name">Pravin Chhetri</h3>
          <p className="member-position">Co-Founder - Project Manager & Analytics Specialist.</p>
          <p className="member-bio">
            As a co-founder, Pravin excels in managing projects with precision and turning data into actionable insights. His expertise in analytics ensures that every decision is backed by data, driving your projects to success.
            </p>
        </div>
        </SlideFromLeft>
        <SlideFromLeft delay='600ms' duration='slow'>

        <div className="team-member">
          <div className="member-image">
            <div className="image-placeholder">
              <div className="image-placeholder"><Image
                        src="/images/dipen.jpg" 
                        alt="Evoyul Team"
                        width={400}
                        height={200}
                        
                      /></div>
            </div>
          </div>
          <h3 className="member-name">Dipen Gautam</h3>
          <p className="member-position">Co-Founder - Paid Advertising & SEO Specialist.</p>
          <p className="member-bio">
            As a co-founder, Dipen expertly combines paid advertising and SEO to amplify your brand’s online presence. With a sharp focus on data-driven strategies, He ensures your campaigns reach the right audience and deliver impactful results.
             </p>
        </div>
        </SlideFromLeft>

        <SlideFromLeft delay='600ms' duration='slow'>
        <div className="team-member">
          <div className="member-image">
            <div className="image-placeholder">
              <div className="image-placeholder"><Image
                        src="/images/kelzang.jpg" 
                        alt="Evoyul Team"
                        width={300}
                        height={300}
                        
                      /></div>
            </div>
          </div>
          <h3 className="member-name">Kelzang Tshering</h3>
          <p className="member-position">IT Manager - Full Stack Developer.</p>
          <p className="member-bio">
           Kelzang oversees our IT operations while actively contributing as a Full Stack Developer. He ensures a strong, scalable tech foundation and deliver seamless front-end and back-end solutions.
            </p>
        </div>
        </SlideFromLeft>
        
      </div>
      
    </section>

            <footer className="footer">
          <div className="footer-container">
            
            <div className="footer-logo">
              <Image
                src="/images/evo.png" 
                alt="evoyul"
                width={120}
                height={60}
              />
            </div>
    
            
            <div className="footer-columns">
              
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
    
              
              <div className="footer-column">
                <h3 className="footer-heading">Contact Information</h3>
                <ul className="footer-links">
                  <li>Phuntsholing, Bhutan</li>
                  <li>+975 17857442 </li>
                  <li>evoyul@gmail.com</li>
                </ul>
              </div>
            </div>
    
            
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
  );
}

export default Header;