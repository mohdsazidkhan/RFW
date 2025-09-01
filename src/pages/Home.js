import React from 'react';
import VideoBackground from '../components/VideoBackground';
import homeAbout from '../images/home_about.jpg'
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <VideoBackground>
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-banner">
              <img src="./images/rfw_banner.webp" alt="RIYADH FASHION WEEK" className="hero-banner-image" />
            </div>
            <p className="hero-subtitle">SAUDI ARABIA'S OFFICIAL<br /> FASHION WEEK</p>
            <div className="hero-dates">
              <span className="hero-dates-numbers">16 - 21</span>
              <span className="hero-dates-month">OCTOBER</span>
            </div>
          </div>
        </section>
      </VideoBackground>

      {/* The Latest from Riyadh Fashion Week Section */}
      {/* <section className="latest-section">
        <div className="section-container">
          <div className="latest-content">
            <div className="latest-text">
              <h2 className="section-title">THE LATEST<br/> FROM RIYADH<br/>  FASHION WEEK</h2>
              <p className="section-description">
                Step into the captivating realm of THE THIRD EDITION OF Riyadh Fashion Week, where style intertwines with innovation, tradition finds its muse in creativity, and aspirations grace the runway. Prepare to immerse yourself in the vibrant Saudi Arabia's fashion scene, as we present a week-long celebration that honors elegance, artistic expression, and cultural fusion.
              </p>
              <button className="btn btn-outline">LEARN MORE</button>
            </div>
            <div className="latest-gallery">
            </div>
            <h4><strong>ABOUT</strong></h4>
          </div>
        </div>
      </section> */}
<section className="latest-section">
  <div className="section-container">
    <div className="latest-content">
      
      {/* LEFT SIDE */}
      <div className="latest-text">
        <h2 className="section-title">
          THE LATEST<br/>FROM RIYADH<br/>FASHION WEEK
        </h2>
        <p className="section-description">
          Step into the captivating realm of THE THIRD EDITION OF Riyadh Fashion Week, 
          where style intertwines with innovation, tradition finds its muse in creativity, 
          and aspirations grace the runway. Prepare to immerse yourself in the vibrant Saudi 
          Arabia's fashion scene, as we present a week-long celebration that honors elegance, 
          artistic expression, and cultural fusion.
        </p>
        <button className="btn btn-outline">LEARN MORE</button>
      </div>

      {/* RIGHT SIDE (Single Collage Image) */}
      <div className="latest-gallery">
        <img src={homeAbout} alt="Riyadh Fashion Week Gallery" className="collage-img"/>
        <h4 className="vertical-text"><strong>ABOUT</strong></h4>
      </div>

    </div>
  </div>
</section>

      {/* Featured Calendar Section */}
      <section className="calendar-section">
        <div className="section-container">
          <div className="calendar-content">
            <div className="calendar-graphic">
              <div className="vertical-text-left">CALENDAR</div>
            </div>
            <div className="calendar-text">
              <span className="calendar-subtitle">FEATURED</span>
              <h2 className="section-title">CALENDAR</h2>
              <p className="section-description">
                Delve into the meticulously crafted Riyadh Fashion Week Calendar, a portal into a world of refined creativity and sophisticated style.<br/><br/> With each day unfolding a thoughtfully curated array of captivating runway shows.
              </p>
              <button className="btn btn-outline-white">COMING SOON</button>
            </div>
          </div>
        </div>
      </section>

      {/* RFW Designers Section */}
      <section className="designers-section">
        <div className="section-container">
          <div className="designers-content">
            <div className="designers-text">
              <h2 className="section-title">RFW DESIGNERS</h2>
              <p className="section-description">
                Riyadh Fashion Week spotlights a diverse lineup of visionary designers leaving an indelible mark. Hailing from varied backgrounds, they harmoniously merge tradition and innovation, promising designs that captivate and inspire. Avant-garde to timeless elegance, they redefine Saudi Arabian fashion's future with boundless creativity.
              </p>
              <button className="btn btn-outline">COMING SOON</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <h2 className="section-title">BE THE FIRST TO KNOW</h2>
            <p className="section-description">
              REGISTER YOUR EMAIL TO GET THE LATEST NEWS AND UPDATES FROM RIYADH FASHION WEEK.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-solid">
                SIGN UP
              </button>
            </form>
            <p className="newsletter-disclaimer">
              By subscribing you consent to receive newsletters, updates, special offers, and other updates from Riyadh Fashion Week, and their respective partners, licensees, affiliates, and subsidiaries. You may withdraw your consent at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
