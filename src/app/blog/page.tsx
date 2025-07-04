'use client';

import { useState } from 'react';
import '../blog/blog.css';
import Link from 'next/link';
import SocialIcons from '../components/SocialIcons';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FadeFromBottom, FadeFromTop, FadeIn } from '../animation';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];

}

const BlogPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const viewPostDetails = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const closePostDetails = () => {
    setSelectedPost(null);
  };

  // Sample blog posts with full content
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Unlocking Visibility in the Digital Kingdom: SEO Strategies for Bhutanese Businesses",
      category: "SEO",
      excerpt:"Beyond the Prayer Flags: How SEO Can Bring Your Business to the Top of Google!. In Bhutan, we cherish our traditions and the tranquility of our environment. But in the digital realm, visibility is key! Just as the vibrant thangka paintings draw the eye, Search Engine Optimization (SEO) ensures your business stands out when customers are searching online. For Bhutanese businesses, local relevance and understanding how our unique audience searches are paramount. This blog will guide you through effective SEO strategies that resonate with the Bhutanese digital landscape.",
    
      date: "2025-06-20",
      readTime: "8 min read",
      content: [
        "Why SEO Matters More Than Ever in Bhutan:",
        
        "-Growing Internet Penetration: More Bhutanese are coming online every day, using search engines to find local services, products, and information. Being visible means reaching this expanding audience.",
        
        "-Trust and Credibility: A high ranking on Google signifies authority and trust. When your business appears on the first page, it instantly builds credibility with potential customers.",
        "- Cost-Effective Long-Term Growth: Unlike paid advertising, SEO offers organic, sustained traffic without continuous ad spend, making it a sustainable marketing investment for Bhutanese enterprises.",
        "- Reaching Tourists and Locals: Whether you're a guesthouse, handicraft shop, or local eatery, effective SEO helps both international visitors planning their trip and local residents seeking services find you.",

        
        "Key SEO Strategies for Bhutanese Businesses (The Evoyul Way):",
        "1. Local SEO is Your Best Friend:",
        "- Google My Business (GMB): This is non-negotiable! Claim and optimize your GMB profile with accurate information (address, phone, hours), high-quality photos of your shop/products, and encouraging customer reviews. For example, a restaurant in Thimphu should list its precise location and opening hours.",
        "- Bhutanese Keywords: Think about how people in Bhutan search. Do they use Dzongkha terms or English? Consider adding both if relevant. Examples: Bhutanese handicrafts online, best authentic Bhutanese food Paro, Thimphu travel agency.",

        "- Location-Specific Content: Create blog posts or website pages tailored to specific regions or towns in Bhutan. E.g., Top things to do in Punakha, Where to buy kira in Bumthang.",
        
        "2. Quality Content, Bhutanese Storytelling:",
        "- Relevant & Engaging: Produce high-quality content that answers questions your target audience might have. For a travel agency, this could be Bhutan visa application guide or Cultural etiquette for tourists in Bhutan.",
        "- Authenticity is Key: Bhutanese culture is rich and unique. Share your story, your craftsmanship, or the experience you offer with genuine passion. This authenticity resonates deeply.",

        "- Visuals Matter: High-resolution images and videos of Bhutanese landscapes, products, or services can significantly boost engagement and SEO.",
        
        "3. Mobile-First is a Must:",
        "- Most Bhutanese access the internet via smartphones. Ensure your website is fully responsive and loads quickly on mobile devices. Google prioritizes mobile-friendly sites",
        
        "4. Building Relevant Backlinks (Collaborate with Fellow Bhutanese Businesses):",
        "- Seek out opportunities to get links from reputable Bhutanese websites, such as tourism boards, local news sites, or complementary businesses (e.g., a hotel linking to a local tour operator). This signals to Google that your site is trustworthy.",
        "- Consider guest blogging on relevant Bhutanese platforms.",

        "5. Technical SEO Basics:",
        "- Website Speed: Optimize images and code to ensure your site loads fast. Slow websites frustrate users and hurt rankings.",
        "- User-Friendly Navigation: Make it easy for visitors to find what they're looking for on your website. Clear menus and internal linking help both users and search engines.",
        "- Secure Website (HTTPS): Ensure your website uses HTTPS. This is a basic security measure and a ranking factor for Google.",

        "Conclusion",
        "SEO isn't a one-time task; it's an ongoing journey, much like the path to enlightenment. By focusing on local relevance, high-quality content, and a seamless user experience, your Bhutanese business can achieve remarkable online visibility. Evoyul is here to guide you, step by step, as you climb the ranks of search engines and connect with your audience in the Land of the Thunder Dragon."

      ]     

    },
    {
      id: 2,
      title: "Connecting Hearts & Minds: Social Media Marketing for Bhutan's Unique Audience",
      category: "Content Creation",
      excerpt: "Beyond Likes and Shares: Building Thriving Communities with Social Media in Bhutan Social media is more than just a digital gathering place; it's a vibrant marketplace of ideas, connections, and commerce. In Bhutan, where community bonds are strong and personal relationships are valued, social media offers an unparalleled opportunity to engage directly with your audience. However, effective social media marketing in Bhutan requires an understanding of local platforms, cultural nuances, and the art of authentic connection. Let Evoyul show you how.",
      date: "2025-06-18",
      readTime: "6 min read",

      content: [
      "The Social Landscape of Bhutan:",
      
      "- Facebook Dominance: Facebook remains a highly popular platform for Bhutanese individuals and businesses. Many use it for daily updates, news, and connecting with local businesses.",
      "- WhatsApp: Messaging apps are integral to daily communication and can be powerful tools for direct customer engagement and support.",
      "- Growing Instagram & TikTok: Younger demographics are increasingly active on visual platforms like Instagram and TikTok, offering new avenues for creative content.",
      "- Community-Oriented: Bhutanese users often appreciate content that fosters community, shares local stories, and promotes positive values",
      
      "Evoyul's Social Media Marketing Blueprint for Bhutan:",

      "1. Know Your Audience, Choose Your Platforms Wisely:",
      "- Demographics: Who are you trying to reach? Tourists might be found on Instagram and travel-focused Facebook groups, while local customers might be more active on Facebook or WhatsApp.",

      "2. Content that Cultivates Connection:",
      "- Authentic Storytelling: Share the essence of your business, your craft, your people, and your connection to Bhutan. Videos showcasing traditional processes, behind-the-scenes glimpses, or customer testimonials work wonders. ",

      "3. Engage, Don't Just Broadcast:",
      "- Respond to Comments & Messages: Be prompt and polite in your interactions. Show that you value your audience's input.",

      "Conclusion",

      "Social media in Bhutan is about more than just marketing; it's about building relationships, fostering community, and sharing the unique spirit of your business. By embracing authentic storytelling, engaging actively, and understanding the local social landscape, your business can truly thrive online. Evoyul is here to help you craft a social media strategy that connects with the hearts and minds of Bhutanese and global audiences alike."

      ]
    },
    {
      id: 3,
      title: "Illuminating Your Path to Prosperity: The Power of Paid Advertising in Bhutan's Digital Landscape.",
      category: "Paid Advertising",
      excerpt: "Harvesting Digital Success: A Bhutanese Guide to Profitable Paid Advertising. In the serene Land of the Thunder Dragon, where tradition gracefully intertwines with progress, businesses are increasingly looking towards the digital realm to connect with their audiences. While the spirit of community and word-of-mouth remains strong, the savvy entrepreneur in Bhutan understands that to truly thrive in today's interconnected world, a strategic presence online is not just an option, but a necessity. And when it comes to fast, targeted, and measurable growth in the digital space, paid advertising stands as a powerful torch, illuminating your path to prosperity.",
      date: "2025-06-15",
      readTime: "10 min read",

      content: [
       
      "Why Paid Advertising is More Relevant Than Ever in Bhutan",
      "You might be thinking, 'Bhutan is a small market, do I really need paid ads?' The answer is a resounding yes! Here's why:",
      " * Growing Digital Footprint: Bhutan's internet and social media penetration is steadily increasing. Data indicates a significant rise in social media users, with Facebook and Instagram being particularly popular among the Bhutanese population. This means your potential customers are actively spending time online",
      " * Targeted Reach: Unlike traditional advertising methods which can be broad and expensive, paid digital ads allow for incredibly precise targeting. Imagine reaching only those individuals in Thimphu interested in traditional Bhutanese textiles, or tourists planning a trip to Paro looking for boutique stays. This precision minimizes wasted ad spend and maximizes impact.",
      "* Instant Visibility: While organic strategies like SEO are crucial for long-term growth, paid ads offer immediate visibility. Need to promote a seasonal offer or a new product launch quickly? Paid campaigns can put your message directly in front of your audience almost instantly.",



      
      
      
      ]
    },
    {
      id: 4,
      title: "The Art of Conversation: Content Marketing that Resonates in Bhutan",
      category: "Social Media Management",
      excerpt: "Weaving Words, Building Trust: Content Marketing for the Bhutanese Soul.  In Bhutan, storytelling is deeply ingrained in our culture, passed down through generations in songs, dances, and oral traditions. In the digital age, content marketing is the modern form of storytelling for your business. It's about creating valuable, relevant, and consistent content that attracts and retains a clearly defined audience. For Bhutanese businesses, this means crafting messages that resonate with our values, our shared experiences, and our unique way of life. Evoyul helps you master the art of conversation through compelling content. ",
      
      date: "2025-06-12",
      readTime: "7 min read",

      content: [
        "Why Content Marketing is Powerful in the Bhutanese Context:",
        
        "- Building Trust (Loyalty): In a society that values trust and relationships, providing valuable information without overtly selling builds long-term loyalty.",
        "- Educating Your Audience: Many traditional Bhutanese businesses can educate their audience about their craft, history, or the benefits of their products/services.",
        "- Showcasing Authenticity: Content marketing allows you to share the genuine story behind your business, a powerful differentiator in a world often saturated with generic marketing.",
        "- SEO Benefits: High-quality, relevant content is a cornerstone of effective SEO, helping your business rank higher in search results.",
        "- Community Engagement: Content can spark conversations, encourage comments, and foster a sense of community around your brand.",

        "Evoyul's Guide to Crafting Engaging Content for Bhutan:",
        "1. Understand Your Audience – The Bhutanese Perspective:",
        "- Local Interests: What are Bhutanese people curious about? What problems do they face that your business can solve?",
        "- Cultural Values: Align your content with GNH principles – sustainability, cultural preservation, community well-being.",
        "- Language Preference: While English is widely used, consider offering content in Dzongkha for broader local appeal.",

        "2. Diverse Content Formats (Beyond Text):",
        "- Blog Posts: Share insights, industry news, 'how-to' guides, or behind-the-scenes stories. For a farm stay, this could be 'A Day in the Life of a Bhutanese Farmer'.",
        "- Videos: Short-form videos (for TikTok/Instagram) showcasing your products, processes, or the beauty of your location can be highly engaging. Long-form videos for YouTube could be detailed documentaries.",
        
        "3. Storytelling with a Bhutanese Heart:",
        "- Share Your Journey: How did your business start? What challenges did you overcome? What impact do you hope to make?",
        "- Highlight Local Artisans/Craftsmen: If your business involves traditional arts, share the stories of the artisans and the significance of their work.",
        "- Cultural Narratives: Weave in elements of Bhutanese folklore, traditions, or unique perspectives into your content.",

        "4. Consistency and Distribution:",
        "- Content Calendar: Plan your content in advance to ensure a steady stream of fresh material.",
        "- Multi-Channel Distribution: Share your content across your website, social media platforms, email newsletters, and local online communities.",
        "- Repurpose Content: Turn a long blog post into several social media snippets, an infographic, or a short video.",

        "5. Measure and Adapt:",
        "- Track which content performs best (views, shares, comments).",
        "- Listen to feedback from your audience and adjust your content strategy accordingly.",

        "Conclusion: ",
        "Content marketing in Bhutan is about more than just selling; it's about connecting on a deeper level. By creating authentic, valuable, and culturally sensitive content, your business can build strong relationships, foster trust, and truly resonate with the Bhutanese soul. Let Evoyul help you tell your story and weave a narrative that captivates your audience and drives growth."


      
      
      ]
    },
    {
      id: 5,
      title: "Your Digital Home in Bhutan: The Power of Professional Website Development",
      category: "Website Development",
      excerpt: "Building Your Online Gho & Kira: Why a Professional Website is Essential for Bhutanese Businesses.  In Bhutan, our homes are reflections of our heritage, often meticulously crafted and welcoming. Similarly, your website is your digital home, your online identity in the vast global landscape. For Bhutanese businesses, a professionally developed website is not just a digital brochure; it's a powerful tool for showcasing your unique offerings, building credibility, and reaching customers both within Bhutan and across the world. At Evoyul, we believe in building websites that are not only aesthetically pleasing but also highly functional and aligned with your business goals.",
      date: "2025-06-10",
      readTime: "12 min read",

      content: [
        
      "Why a Strong Website is Crucial for Businesses in Bhutan:",
      "- 24/7 Global Shop-front: Your website works around the clock, showcasing your products or services to potential customers regardless of time zones, making it ideal for attracting tourists or international buyers.",
      "- Credibility and Trust: In an increasingly digital world, a professional website signals legitimacy and trustworthiness. It's often the first impression a potential customer has of your business.",
      "- Information Hub: A website serves as a centralized source for all information about your business – your story, contact details, services, product catalogs, and more.",
      "- Direct Sales and Bookings: For many businesses, a website can facilitate direct online sales, bookings for tours/stays, or service inquiries, streamlining operations.",
      "- Competitive Edge: As more Bhutanese businesses go online, a well-designed and optimized website can give you a significant advantage over competitors.",

      "Evoyul's Approach to Crafting Your Ideal Bhutanese Website:",
      "1. User-Centric Design with a Bhutanese Touch:",
      "- Intuitive Navigation: Make it incredibly easy for visitors to find what they're looking for. Clear menus and logical pathways are essential.",
      "- Bhutanese Aesthetics: Incorporate elements that subtly reflect Bhutanese art, architecture, and colors while maintaining a modern, clean design. Think about the serenity and beauty of our landscapes.",
      "2. Content that Tells Your Story:",
      "- High-Quality Photography & Videography: Showcase your products, your team, your location, and the experiences you offer with professional visuals that truly capture the essence of your brand and Bhutan.",
      "- About Us with a Heart: Share the journey and values behind your business. In Bhutan, personal connections matter.",
      "3. Functionality Tailored to Your Needs:",
      "- E-commerce Capabilities: If you sell products (e.g., textiles, handicrafts, organic produce), implement a secure and user-friendly online store with clear payment gateways (considering local and international payment ",
      "- Booking Systems: For hotels, tour operators, or service providers, an integrated booking system can streamline operations and enhance customer convenience.",
      "4. SEO-Ready from the Start:",
      "- Clean Code: A well-coded website is the foundation for good SEO.",
      "- Fast Loading Speed: Optimize images and code to ensure your site loads quickly.",
      "5. Security and Maintenance:",
      "- HTTPS (SSL Certificate): Essential for protecting user data and building trust.",
      "- Regular Updates & Backups: Ensure your website remains secure, functional, and up-to-date with the latest software versions.",

      "Conclusion",
      "Your website is more than just an online presence; it's a strategic asset for your Bhutanese business. It's your opportunity to tell your story, connect with customers, and expand your reach. At Evoyul, we are passionate about developing bespoke websites that not only meet global standards but also authentically represent the spirit of Bhutanese entrepreneurship. Let's build your digital home together."

      
      
      
      ]

    },
    {
      id: 6,
      title: "Nurturing Connections: The Power of Email Marketing in Bhutan",
      category: "Email Marketing",
      excerpt: "From Inboxes to Loyal Customers: Cultivating Relationships with Email Marketing in Bhutan. In Bhutan, personal connections are the bedrock of relationships, both personal and professional. In the digital realm, email marketing serves a similar purpose, it's a direct, personalized way to nurture relationships with your customers. While social media offers broad reach, email marketing provides a direct line to your most engaged audience. For Bhutanese businesses, building a quality email list and sending relevant, respectful communications can foster deep loyalty and drive repeat business. Evoyul is here to guide you in mastering this powerful tool.",
      date: "2025-06-10",
      readTime: "12 min read",

      content: [
        
      "Why Email Marketing is a Gem for Bhutanese Businesses:",
      "- Direct & Personal Communication: Emails land directly in an individual's inbox, creating a more intimate and less cluttered channel than social media feeds.",
      "- Building Strong Relationships: Regular, valuable emails help you stay top-of-mind, build trust, and demonstrate your expertise or care.",
      "- High ROI: Email marketing consistently delivers one of the highest returns on investment among digital marketing channels when done correctly.",
      "- Targeted Messaging: You can segment your email list and send highly specific messages to different groups of customers, increasing relevance.",
      "- Driving Sales & Bookings: Promote new products, special offers, exclusive events, or remind customers about upcoming services.",

      "Evoyul's Essential Guide to Email Marketing in Bhutan:",
      "1. Building Your Quality Email List (Ethically):",
      "- Website Sign-Up Forms: Prominently display clear and attractive sign-up forms on your website. Offer an incentive, like a discount on a first purchase, a free guide, or exclusive early access.",
      "- In-Store Sign-Ups: If you have a physical location, encourage customers to sign up with a clear explanation of what they'll receive.",
      "- Pop-ups (Tastefully Done): Use subtle pop-ups on your website that appear after a user has engaged with your content.",
      "- Value-Driven Opt-ins: Focus on the value subscribers will gain, not just asking for their email.",
      "- Transparency & Consent: In line with global best practices and evolving privacy considerations, always be clear about what subscribers will receive and obtain their explicit consent. (While Bhutan has its own e-commerce guidelines, adherence to general data privacy principles is good practice).",

      "2. Crafting Engaging Emails (The Evoyul Touch):",
      "- Compelling Subject Lines: Make them enticing and relevant, reflecting the content within",
      "- Personalization: Address subscribers by name and tailor content based on their past interactions or preferences.",
      "- Bhutanese Context & Language: Incorporate local events, festivals, or cultural references where appropriate. Consider bilingual emails (Dzongkha and English) for broader appeal. ",
      "- High-Quality Visuals: Use appealing images of your products, services, or beautiful Bhutanese landscapes to enhance engagement.",
      "- Clear Call to Action (CTA): What do you want your reader to do next? 'Shop Now,'' 'Book Your Tour,'' 'Read More,'' 'Visit Our Store.'",

      "3. Types of Emails to Send:",
      "- Welcome Series: Automatically send a series of emails to new subscribers, introducing your brand, sharing your story, and offering a special welcome.",
      "- Promotional Emails: Announce new products, sales, or exclusive offers.",
      "- Newsletter: Share valuable content (blog posts, videos), company news, or community updates.",
      "- Transactional Emails: Order confirmations, shipping updates, booking confirmations – ensure these are branded and helpful.",
      "- Nurturing Campaigns: Send a series of emails designed to educate leads about your products/services and move them closer to a purchase.",

      "4. Segmentation and Automation:",
      "- Segment Your List: Divide your subscribers based on interests, purchase history, or engagement levels to send more targeted messages.",
      "- Automate Workflows: Set up automated email sequences for new sign-ups, abandoned carts, or post-purchase follow-ups.",

      "5. Analyze and Optimize:",
      "- Track Key Metrics: Monitor open rates, click-through rates, conversion rates, and unsubscribe rates.",
      "- A/B Testing: Experiment with different subject lines, content, and CTAs to see what resonates best with your audience.",
      "- Adapt Based on Performance: Continuously refine your email strategy based on what the data tells you.",

      "Conclusion:",
      " Email marketing in Bhutan is a powerful avenue for fostering direct, meaningful connections with your customers. It's about building a community, providing value, and guiding them on their journey with your brand. By focusing on ethical list building, personalized content, and consistent engagement, your Bhutanese business can unlock a loyal customer base. Let Evoyul help you craft an email marketing strategy that truly connects.",

      
      
      
      ]

    },
    
  ];

  const categories = ['All', 'SEO', 'Content Creation', 'Paid Advertising', 'Social Media Management', 'Website Development'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="about-page">
      {selectedPost ? (
        // Blog post detail view
        <div className="blog-detail-container">
          <button onClick={closePostDetails} className="back-button">
            &larr; Back to all posts
          </button>
          
          <div className="blog-detail-header">
            <span className="blog-detail-category">{selectedPost.category}</span>
            <h1 className="blog-detail-title">{selectedPost.title}</h1>
            <div className="blog-detail-meta">
              <span className="blog-detail-date">{new Date(selectedPost.date).toLocaleDateString()}</span>
              <span className="blog-detail-readtime">{selectedPost.readTime}</span>
            </div>
          </div>
          

          
          <div className="blog-detail-content">
            {selectedPost.content.map((paragraph, index) => (
              <p key={index} className="blog-detail-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          

          
          <div className="blog-detail-social-share">
            <h4>Share this post:</h4>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
            </div>
          </div>
        </div>
      ) : (
        // Main blog listing view
        <>
          <section className="about-hero-section4">
            <div className="hero-background4">
              <Image
                src="/images/blog.jpg"
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
            
            <div className="hero-content4">
              <FadeIn delay='400ms' duration='slow'>
              <h1 className="hero-title4">BLOGS</h1>
              </FadeIn>
            </div>
          </section>   

          <div className="main-content2">
            <section className="search-section">
              <FadeFromBottom delay='200ms' duration='slow'>
                <div className="search-container">
                  <h2 className="section-title">Unlocking digital success in the Land of the Thunder Dragon འབྲུག་རྒྱལ་ཁབ</h2>
                  
                  <div className="search-input-wrapper">
                    <input
                      type="text"
                      placeholder="Search for blogs"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                    <button className="search-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </FadeFromBottom>
            </section>

            <FadeFromBottom delay='400ms' duration='slow'>
              <section className="category-section">
                <div className="category-tabs">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </section>
            </FadeFromBottom>

            <FadeFromBottom delay='600ms' duration='slow'>
              <section className="blog-section">
                <div className="blog-grid">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                      <article key={post.id} className="blog-card" onClick={() => viewPostDetails(post)}>
                        
                        <div className="blog-card-header">
                          <span className="blog-category">{post.category}</span>
                          <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <h2 className="blog-title">{post.title}</h2>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <div className="blog-card-footer">
                          <span className="read-time">{post.readTime}</span>
                          <button className="read-more-button">Read More</button>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="no-results">
                      <h3>No blog posts found</h3>
                      <p>Try adjusting your search terms or filters.</p>
                    </div>
                  )}
                </div>
              </section>
            </FadeFromBottom>
            
            <FadeFromBottom delay='400ms' duration='slow'>
              <section className="load-more-section">
                <button className="load-more-button">Load More Posts</button>
              </section>
            </FadeFromBottom>
          </div>
        </>
      )}

      {/* Footer */}
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
};

export default BlogPage;