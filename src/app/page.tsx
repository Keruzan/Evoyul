"use client";

import Link from 'next/link'
import SocialIcons from '../app/components/SocialIcons';
import HeroCanvas from './components/three/HeroCanvas';
import Image from 'next/image';
import { FaSearch, FaPenAlt, FaAd, FaRobot, FaEnvelope , FaSitemap, FaHashtag, FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import React, { useState } from 'react';


import {
  
  FadeFromRight,
  FadeFromLeft,
  FadeFromTop,
  FadeFromBottom,
  SlideFromRight,
  SlideFromLeft,
  SlideFromBottom

} from '../app/animation';

type ServiceCardProps = { icon: React.ReactNode; name: string; desc: string; delay: string; tag?: string; featured?: boolean };

const ServiceCard = ({ icon, name, desc, delay, tag, featured }: ServiceCardProps) => (
  <FadeFromBottom delay={delay} duration="slow">
    <div className={`service-card${featured ? ' service-card--featured' : ''}`}>
      {tag && <span className="service-tag">{tag}</span>}
      <div className="service-content">
        {icon}
        <h3 className="service-name">{name}</h3>
        <p className="service-description">{desc}</p>
      </div>
      <Link href="/services" className="service-button">
        Read More
      </Link>
    </div>
  </FadeFromBottom>
);

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
    <main>
      {/* Video Background */}
      <video 
        autoPlay    
        loop 
        muted 
        playsInline
        className="video-bg"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
      
      
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
      
      {/* Hero Section */}
      <section className="hero">
        <HeroCanvas />
        <div className="hero-content">
          <FadeFromTop delay='400ms' duration='slow'>
        <h2>*Your trusted partner for digital success in the Bhutanese market*</h2>
        <h1>BHUTAN&apos;S LEADING DIGITAL MARKETING  <br />AGENCY</h1>
        <ul className="hero-tags">
          <li>Content Creation</li>
          <li className="is-new">AI Agents</li>
          <li>Social Media</li>
          <li>Paid Ads</li>
        </ul>
        </FadeFromTop>
        <FadeFromTop delay='600ms' duration='slow'>
        <Link href='/services'><button className="cta-button">VIEW MORE</button></Link>
        </FadeFromTop>
        </div>
      </section>
          <section className="about-section">
      <div className="about-container">
        <FadeFromLeft>
        <div className="about-image">
          <Image
            src="/images/group.JPG"
            alt="Evoyul Team"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        </FadeFromLeft>
        
        {/* Content on the right */}
        <FadeFromRight>
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <h3 className="about-subtitle">Welcome to Evoyul, your trusted partner in digital marketing in Bhutan.</h3>
          <p className="about-text">
            We specialize in creative strategies and data-driven solutions to help
            businesses excel online.
          </p>
          <p className="about-text">
            Let us empower your brand with innovative campaigns that drive
            real results in the digital world.
          </p>
          <Link href="/aboutus" className="service-button1">
                Read More
              </Link>
        </div>
        </FadeFromRight>
      </div>
    </section>
      <div className="brand-container">
      <section className="upper-section">
        <SlideFromLeft delay="400ms" duration="slow">
        <div className="content-block blue-block">
          <h1 className="main-title">ACCELERATE YOUR BRAND&apos;S GROWTH</h1>
          <p className="main-description">
            We craft bespoke digital strategies that elevate your brand, expand your reach,
            and connect you with your target audience, ensuring sustainable growth and market leadership.
          </p>
        </div>
        </SlideFromLeft>

        <SlideFromRight delay="400ms" duration="slow">
        <div className="content-block black-block">
          <h2 className="main-title">PERFORMANCE-DRIVEN CAMPAIGNS</h2>
          <p className="section-description">
            We design and execute campaigns with a clear focus on measurable outcomes,
            meticulously tracking KPIs and optimizing strategies to ensure maximum return on your investment and sustained business growth.
          </p>
        </div>
        </SlideFromRight>
      </section>


        {/* New Services Section */}
        <section className="services-section">
        <div className="services-container">
          <FadeFromTop delay="200ms" duration="slow">
          <h2 className="section-title">Our Services</h2>
          </FadeFromTop>
          <div className="services-grid">
            <div className="service-row">
              <ServiceCard featured tag="Featured" delay="200ms" icon={<FaPenAlt className="service-icon" />} name="Content Creation"
                desc="Reels, brand videos, photography, graphics and copy. We craft stories that captivate and convert." />
              <ServiceCard featured tag="New" delay="400ms" icon={<FaRobot className="service-icon" />} name="AI Agents"
                desc="Custom AI agents that answer customers, qualify leads and book appointments on WhatsApp, Instagram and your website, 24/7." />
            </div>
            <div className="service-row three">
              <ServiceCard delay="200ms" icon={<FaSearch className="service-icon" />} name="SEO"
                desc="Comprehensive SEO Strategy Development, On-Page Optimization" />
              <ServiceCard delay="300ms" icon={<FaAd className="service-icon" />} name="Paid Advertising"
                desc="Specialized in crafting paid advertising campaigns that deliver measurable results." />
              <ServiceCard delay="400ms" icon={<FaHashtag className="service-icon" />} name="Social Media Management"
                desc="Comprehensive social media management services that help your business connect, engage, and grow online." />
            </div>
            <div className="service-row two">
              <ServiceCard delay="200ms" icon={<FaSitemap className="service-icon" />} name="Website Development"
                desc="Custom website development with responsive design and optimal performance." />
              <ServiceCard delay="400ms" icon={<FaEnvelope className="service-icon" />} name="Email Marketing"
                desc="Build, Nurture, Convert - High-impact email campaigns that grow your audience and boost ROI." />
            </div>
          </div>
        </div>
      </section>
    <section className="client-section">
      {/* Build a Brand Heading */}
      <FadeFromBottom delay="200ms" duration="slow">
      <div className="text-center mb-16">
        <h2 className="brand-heading">Build a Brand, Build the Future of your Business</h2>
        <h3 className="clients-heading">OUR LOVELY CLIENTS</h3>
      </div>
      </FadeFromBottom>

      {/* Client Logos Grid */}
      <FadeFromLeft delay="200ms" duration="slow">
      <div className="client-logos">
        {[1, 2, 3,].map((client) => (
          <div key={client} className="client-logo">
            <Image
              src={`/images/client-${client}.jpg`}
              alt={`Client ${client}`}
              width={180}
              height={120}
              className="object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
      </FadeFromLeft>

      {/* Quote Section with Background */}
      <SlideFromBottom delay='200ms' duration='slow'>
      <div className="quote-section">
        <div className="quote-overlay"></div>
        <div className="quote-content">
          <div className="client-logo">
            <Image
              src="/images/coke.png"
              alt="BERTRAMFIN"
              width={180}
              height={80}
            />
          </div>
          <blockquote className="quote-text">
            &quot;We highly recommend the creative work you have recently developed.
            The concepts are not only visually appealing but also aligned with our brand message and audience needs.
            The designs are impactful, thoughtfully executed, and have the potential to drive strong engagement.&quot;

          </blockquote>
          <p className="quote-author">-Bhutan Coca Cola</p>
        </div>
      </div>
      </SlideFromBottom>
    </section>


    </div>
      
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
    
        
      
  </main>
    
  )
}
export default Header;