"use client";

import Link from 'next/link'
import SocialIcons from '../components/SocialIcons';
import Image from 'next/image';
import '../services/services.css';
import { FaSearch, FaPenAlt, FaAd, FaHashtag,FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaSitemap} from 'react-icons/fa';
import React, { useState } from 'react';
import {
  FadeFromBottom,
  FadeFromTop,
  SlideFromLeft,
  SlideFromRight,
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
      <div className="about-page3">
        
        <section className="about-hero-section3">
          <div className="hero-background3">
            <Image
              src="/images/digital.jpg"
              alt="About Us Background"
              fill
              priority
              className="object-cover"
            />
            <div className="hero-overlay"></div>
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
        
            <div className="hero-content3">
          <FadeIn delay='400ms' duration='slow'>
          <h1 className="hero-title3">SERVICES</h1>
          </FadeIn>
        </div>
        
      </section>
            {/* New Services Section */}
        <section className="services-section6">
          
        <div className="services-container6">
          <FadeFromBottom delay='200ms' duration='slow'>
          <h2 className="section-title6">Our Services</h2>
          </FadeFromBottom>
          <div className="services-grid6">
            {/* Upper Row - 2 Services */}
            <div className="service-row6">
              <FadeFromBottom delay='200ms' duration='slow'>
              <div className="service-card6">
                
                <div className="service-content6">
                  <FaSearch className="service-icon6" />
                  <h3 className="service-name6">SEO Blogs</h3>
                  <p className="service-description6">
                    Comprehensive SEO Strategy Development, On-Page Optimization
                  </p>
                </div>
                <Link href="/blog" className="service-button6">
                  Read More
                </Link>
                
              </div>
              </FadeFromBottom>
              <FadeFromBottom delay='400ms' duration='slow'>
              <div className="service-card6">
                <div className="service-content6">
                  <FaPenAlt className="service-icon6" />
                  <h3 className="service-name6">Content Creation blogs</h3>
                  <p className="service-description6">
                    We craft compelling narratives that captivate and convert.
                  </p>
                </div>
                <Link href="/blog" className="service-button6">
                  Read More
                </Link>
              </div>
              </FadeFromBottom>
            </div>
            
            {/* Lower Row - 2 Services */}
            <div className="service-row6">
              <FadeFromBottom delay='200ms' duration='slow'>
              <div className="service-card6">
                <div className="service-content6">
                  <FaAd className="service-icon6" />
                  <h3 className="service-name6">Paid Advertising blogs</h3>
                  <p className="service-description6">
                    Specialized in crafting paid advertising campaigns that deliver measurable results.
                  </p>
                </div>
                <Link href="/blog" className="service-button6">
                  Read More
                </Link>
              </div>
              </FadeFromBottom>
              <FadeFromBottom delay='400ms' duration='slow'>
              <div className="service-card6">
                <div className="service-content6">
                  <FaHashtag className="service-icon6" />
                  <h3 className="service-name6">Social Media Management blogs</h3>
                  <p className="service-description6">
                    Comprehensive social media management services that help your business connect, engage, and grow online.
                  </p>
                </div>
                <Link href="/blog" className="service-button6">
                  Read More
                </Link>
              </div>
              </FadeFromBottom>
              <FadeFromBottom delay='200ms' duration='slow'>
              <div className="service-card6">
                <div className="service-content6">
                  <FaSitemap className="service-icon6" />
                  <h3 className="service-name6">Website Development blogs</h3>
                  <p className="service-description6">
                    Custom website development with responsive design and optimal performance.
                      </p>
                </div>
                <Link href="/blog" className="service-button6">
                  Read More
                </Link>
              </div>
              </FadeFromBottom>
              <FadeFromBottom delay='400ms' duration='slow'>
              <div className="service-card6">
                <div className="service-content6">
                  <FaEnvelope className="service-icon6" />
                  <h3 className="service-name6">Email Marketing blogs</h3>
                  <p className="service-description6">
                    Build, Nurture, Convert - High-impact email campaigns that grow your audience and boost ROI.
                      </p>
                </div>
                <Link href="/blog" className="service-button6">
                  Read More
                </Link>
              </div>
              </FadeFromBottom>
            </div>
            
          </div>
          
        </div>
      </section>

        <section className="service-section1">
        <div className="service-content1">
          
          <div className="text-content1">
            <SlideFromRight delay='300ms' duration='slow'>
            <h2 className="title1">Content Creation</h2>
            <p className="subtitle1">Where creativity meets strategy</p>
            <p className="description1">
              Where creativity meets strategy to promote your brand&apos;s online presence. 
              Our team crafts compelling brand commercial videos and engaging creatives to engage your audience and achieve your business goals.
               Let us help you stand out with impactful storytelling and loyal follower base.


            </p>
            <p className="description1">We produce high-quality, impactful videos that tell your brand&apos;s story and connect with your audience on an emotional level. 
              From concept development to final cut, we handle it all.</p>
            <p className="description1">
              Transform complex data into visually stunning infographics.
               Our designs make information easy to digest and shareable, ensuring your message reaches a wider audience. </p>
            </SlideFromRight>
          </div>
          
          
          
          <div className="image-container1">
            <SlideFromLeft delay='300ms' duration='slow'>
            <Image
              src="/images/content.png"
              alt="Content Creation"
              width={600}
              height={400}
              className="service-image1"
            />
            </SlideFromLeft>
          </div>
          
          
        </div>
        
      </section>

      <section className="service-section2">
        <div className="service-content2">
          <div className="image-container2">
            <SlideFromLeft delay='200ms' duration='slow'>
            <Image
              src="/images/paid.png"
              alt="Paid Advertising"
              width={400}
              height={500}
              className="service-image2"
            />
            </SlideFromLeft>
          </div>
          <div className="text-content2">
            <SlideFromRight delay='200ms' duration='slow'>
            <h2 className="title2">Paid Advertising</h2>
            <p className="subtitle2">Maximize your reach and ROI</p>
            <p className="description2">
              We specialize in Meta and Instagram ads, creating targeted campaigns that maximize your reach and ROI. 
              Let us help you connect with the right audience and grow your business.


            </p>
            <p className="description2">Crafting paid advertising campaigns that deliver measurable results. 
              In today&apos;s competitive digital landscape, organic reach alone often isn&apos;t enough to stand out.
               That&apos;s where our expertly managed paid advertising strategies come in, ensuring your brand gets in front of the right audience at the right time.</p>
            <p className="description2">
              We leverage advanced analytics and data insights to create campaigns that are not only cost-effective but also laser-focused on your target audience.
            </p>
            </SlideFromRight>
          </div>
        </div>
      </section>

      <section className="service-section3">
        <div className="service-content3">
          <div className="text-content3">
            <SlideFromRight delay='200ms' duration='slow'>
            <h2 className="title3">SEO Services</h2>
            <p className="subtitle3">Boost your online visibility</p>
            <p className="description3">
              Where strategy meets results. Evoyul offers tailored SEO solutions to boost your online presence and drive traffic.
               We specialize in keyword research, off-page and on-page optimization, technical SEO, link building and analytics
            </p>
            <p className="description3">At Evoyul, we specialize in creating tailored SEO strategies that align with your business goals.
               Our team conducts in-depth market research and competitor analysis to devise a plan that maximizes your online visibility and drives organic traffic to your website. </p>
            <p className="description3">
              Our ethical link-building services aim to increase your website&apos;s authority and ranking.
               We use a variety of strategies, including outreach, guest blogging, and leveraging our network to build high-quality, relevant backlinks.
            </p>
            </SlideFromRight>
          </div>
          <div className="image-container3">
            <SlideFromLeft delay='200ms' duration='slow'>
            <Image
              src="/images/seo.png"
              alt="SEO Services"
              width={500}
              height={400}
              className="service-image3"
            />
            </SlideFromLeft>
          </div>
        </div>
      </section>

      <section className="service-section4">
        <div className="service-content4">
          <div className="image-container4">
            <SlideFromLeft delay='200ms' duration='slow'>
             <Image
              src="/images/management.jpg"
              alt="Social Media Marketing"
              width={600}
              height={500}
              className="service-image4"
            />
            </SlideFromLeft> 
          </div>
          <div className="text-content4">
            <SlideFromRight delay='200ms' duration='slow'>
            <h2 className="title4">Social Media Marketing</h2>
            <p className="subtitle4">Build your online community</p>
            <p className="description4">
              Where strategy meets engagement. Promote your brand&apos;s online presence with our tailored social media management solutions.
               We specialize in managing content for various platforms, fostering engagement, and building a loyal follower base.
            </p>
            <p className="description4">
              In today&apos;s digital-first world, social media is where your customers are—and where your brand needs to be. 
              At Evoyul, we offer comprehensive social media management services that help your business connect, engage, and grow online.
               Our approach goes beyond just posting updates; we build dynamic social media strategies that align with your brand&apos;s goals and resonate with your audience.
            </p>
            </SlideFromRight>
          </div>
        </div>
      </section>

      <section className="service-section5">
        <div className="service-content5">
          <div className="text-content5">
            <SlideFromRight delay='200ms' duration='slow'>
            <h2 className="title5">Web Development</h2>
            <p className="subtitle5">Your digital storefront</p>
            <p className="description5">
              Where innovation meets functionality. Promote your brand&apos;s online presence with our custom website development solutions. We specialize in creating fast,
               responsive, and user-friendly websites that drive engagement, conversions, and growth.
            </p>
            <p className="description5">
              In today&apos;s digital-first world, your website is often the first impression customers have of your business.
               At Evoyul, we craft high-performance websites that are not just visually stunning but also optimized for search engines, user experience, and scalability.
               Our approach goes beyond just design—we build strategic digital experiences that align with your brand&apos;s goals and deliver measurable results.
            </p>
            </SlideFromRight>
          </div>
          <div className="image-container5">
            <SlideFromLeft delay='200ms' duration='slow'>
            <Image
              src="/images/web.jpg"
              alt="Website Development"
              width={600}
              height={400}
              className="service-image5"
            />
            </SlideFromLeft>
          </div>
          
        </div>
        <FadeFromBottom delay='200ms' duration='slow'>
          <Link href='/blog'>
        <button className="cta-button1">VIEW MORE</button>
        </Link>
        </FadeFromBottom>
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
    /</div>
  )
}
export default Header;