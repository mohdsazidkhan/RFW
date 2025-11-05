import React from 'react';
import VideoBackground from '../components/VideoBackground';
import homeAbout from '../images/home_about.jpg'
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/en';
import { translations as arTranslations } from '../translations/ar';

const Home = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = language === 'ar' ? arTranslations : translations;
  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <VideoBackground>
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-banner">
              <img src="./images/rfw_banner.webp" alt="RIYADH FASHION WEEK" className="hero-banner-image" />
            </div>
            <p className="hero-subtitle">{t.home.heroSubtitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>
            <div className="hero-dates">
              <span className="hero-dates-numbers">{t.home.heroDates}</span>
              <span className="hero-dates-month">{t.home.heroMonth}</span>
            </div>
          </div>
        </section>
      </VideoBackground>

      
<section className="latest-section">
  <div className="section-container">
    <div className="latest-content">
      
      {/* LEFT SIDE */}
      <div className="latest-text">
        <h4 className="vertical-text-mobile"><strong>{t.nav.about}</strong></h4>
        <h2 className="section-title">
          {t.home.latestTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
        </h2>
        <p className="section-description">
          {t.home.latestDescription}
        </p>
        <a href="/about" className="btn btn-outline">{t.home.learnMore}</a>
      </div>

      {/* RIGHT SIDE (Single Collage Image) */}
      <div className="latest-gallery">
        <img src={homeAbout} alt="Riyadh Fashion Week Gallery" className="collage-img"/>
        <h4 className="vertical-text"><strong>{t.nav.about}</strong></h4>
      </div>

    </div>
  </div>
</section>

      {/* Featured Calendar Section */}
      <section className="calendar-section">
        <div className="section-container">
          <div className="calendar-content">
            <div className="calendar-graphic">
              <div className="vertical-text-left">{t.home.calendarTitle}</div>
            </div>
            <div className="calendar-text">
              <span className="calendar-subtitle">{t.home.calendarSubtitle}</span>
              <h2 className="section-title">{t.home.calendarTitle}</h2>
              <p className="section-description">
                {t.home.calendarDescription.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/><br/></React.Fragment>)}
              </p>
              <button className="btn btn-outline-white" onClick={() => navigate('/calendar')}>{t.home.learnMore}</button>
            </div>
          </div>
        </div>
      </section>

      {/* RFW Designers Section */}
      <section className="designers-section">
        <div className="section-container">
          <div className="designers-content">
            <div className="designers-text">
              <h2 className="section-title">{t.home.designersTitle}</h2>
              <p className="section-description">
                {t.home.designersDescription}
              </p>
              <button className="btn btn-outline" 
              onClick={() => navigate('/designers')}
              >{t.home.learnMore}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Autoplay Video Section */}
      <section className="final-video-section">
          <div className="final-video-wrapper">
            <video
              className="final-video"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
            >
              <source src="/RFW-Video.MOV" type="video/quicktime" />
              <source src="/RFW-Video.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <h2 className="section-title">{t.home.newsletterTitle}</h2>
            <p className="section-description">
              {t.home.newsletterDescription}
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder={t.home.newsletterPlaceholder}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-solid">
                {t.home.signUp}
              </button>
            </form>
            <p className="newsletter-disclaimer">
              {t.home.newsletterDisclaimer}
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
