import React from 'react';
import '../styles/Sponsorship.css'
const Sponsorship = () => {
const officialPartners = [
  { name: "anb arab national bank", logo: require('../images/partners/saudia.png'), url:"https://www.saudia.com/?utm_campaign=search&utm_source=cpc&utm_medium=google&gclsrc=aw.ds&cid=&gad_source=1&gad_campaignid=23017945566&gbraid=0AAAAADwJ54eKETFOpCCnGQ0o8dggT-PWk&gclid=EAIaIQobChMIxO7g9KaQkAMVCAcGAB3Kty9SEAAYASAAEgL--vD_BwE" },
  { name: "cenomi", logo: require('../images/partners/cenomi.png'), url:"https://centers.cenomi.com/sa-en/" },
];
const strategicPartners = [
  { name: "Bank Saudi Fransi", logo: require('../images/partners/bsf.png'), url:"https://bsf.sa/english/home" },
  { name: "Genesis", logo: require('../images/partners/genesis.png'), url:"https://www.genesis.com/us/en/home" }
];
const supportingPartners1 = [
  { name: "Eyewa", logo: require('../images/partners/eyewa.png'), url:"https://eyewa.com/sa-ar" },
  { name: "Rotana Signs", logo: require('../images/partners/rotana-signs.png'), url:"https://www.linkedin.com/company/rotanasigns/" },
  { name: "Ounass", logo: require('../images/partners/ounass.png'), url:"https://en-saudi.ounass.com/women?gclsrc=aw.ds&gad_source=1&gad_campaignid=22595114047&gbraid=0AAAAADSMPX6nAHHbpMqeNbaFxZ-AV7TzP&gclid=EAIaIQobChMIjJWVz6yQkAMVHwwGAB0elitaEAAYASAAEgJKAPD_BwE" },
];
const supportingPartners2 = [
  { name: "Mandarin Oriental", logo: require('../images/partners/mandarin.png'), url:"https://www.mandarinoriental.com/en" },
  { name: "AK AL KHOZAMA INVESTMENT", logo: require('../images/partners/al-khozama.png'), url:"https://alkhozama.com/en/" },
];
const isMobile = window.innerWidth < 768;
  return (
    <div className="sponsorship-page">
      {/* Hero Section */}
<section className="sponsorship-hero-section">
  <div className="sponsorship-hero-background">
    <div className="sponsorship-hero-image"></div>
    <div className="sponsorship-hero-overlay"></div>
  </div>
  <div className="sponsorship-hero-content">
    <h1 className="sponsorship-hero-title">SPONSORSHIP<br/> & PARTNERSHIP</h1>
    {/* <p className="sponsorship-hero-subtitle">PARTNER WITH RIYADH FASHION WEEK 2025</p> */}
  </div>
</section>


      {/* Why Sponsor Section */}
   <section className="why-sponsor-section">
  <div className="sponsorship-section-container">
    <div className="why-sponsor-content">
      {/* Left Column - Text Content */}
      <div className="why-sponsor-text">
        <h2 className="why-sponsor-title">WHY SPONSOR<br/> RIYADH FASHION WEEK?</h2>
        <p className="why-sponsor-description">
          RIYADH FASHION WEEK IS MORE THAN A FASHION EVENT. IT'S A HIGH-PROFILE CULTURAL PLATFORM THAT PLACES YOUR BRAND AT THE HEART OF SAUDI ARABIA'S CREATIVE TRANSFORMATION. AS A SPONSOR, YOUR BRAND GAINS POWERFUL EXPOSURE, ALIGNMENT WITH VISION 2030, AND ACCESS TO AN INFLUENTIAL AUDIENCE OF INDUSTRY LEADERS, CREATIVES, BUYERS, AND MEDIA.
        </p>
        <div className="contact-info">
          <p className="contact-text">
            <strong>CONTACT US ON:</strong> <a href="mailto:partnership@riyadhfashionweek.com?">PARTNERSHIP@RIYADHFASHIONWEEK.COM</a>
          </p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="why-sponsor-image">
        <div className="fashion-show-image">
          {/* Background image will be applied via CSS */}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Previous Partners Section */}
   <section className="previous-partners-section">
    <div className="sponsorship-section-container">
      <h2 className="partners-title">OUR PARTNERS</h2>
    <div className="previous-partners-content">
      <h4 className="previous-partners-title one">OFFICIAL PARTNERS</h4>
      <div className="partners-logos one">
      {officialPartners.map((partner, index) => {

        return (
        <div
          key={index}
          style={{display: isMobile && "none" }}
          className={`partner-logo`} // hide on mobile if blank
        >
          <a
            className="partner-logo-image"
            href={partner.url}
            target="_blank"
            style={{display: isMobile && "none"  }}
            rel="noopener noreferrer"
          >
            {partner.logo && (
              <img
                src={partner.logo}
                alt={partner.name || 'Partner'}
                className="partner-img"
              />
            )}
          </a>
        </div>
        );
      })}
      </div>
      </div>
      <div className="previous-partners-content">
      <h4 className="previous-partners-title two">STRATEGIC PARTNERS</h4>
      <div className="partners-logos two">
      {strategicPartners.map((partner, index) => {
        return (
        <div
          key={index}
          style={{display: isMobile && "none" }}
          className={`partner-logo`} // hide on mobile if blank
        >
          <a
            className="partner-logo-image"
            href={partner.url}
            target="_blank"
            style={{display: isMobile && "none"  }}
            rel="noopener noreferrer"
          >
            {partner.logo && (
              <img
                src={partner.logo}
                alt={partner.name || 'Partner'}
                className="partner-img"
              />
            )}
          </a>
        </div>
        );
        })}
      </div>

      </div>
      <div className="previous-partners-content">
      <h4 className="previous-partners-title three">SUPPORTING PARTNERS</h4>
      <div className="partners-logos three">
      {supportingPartners1.map((partner, index) => {
        return (
        <div
          key={index}
          style={{display: isMobile && "none" }}
          className={`partner-logo`} // hide on mobile if blank
        >
          <a
            className="partner-logo-image"
            href={partner.url}
            target="_blank"
            style={{display: isMobile && "none"  }}
            rel="noopener noreferrer"
          >
            {partner.logo && (
              <img
                src={partner.logo}
                alt={partner.name || 'Partner'}
                className="partner-img"
              />
            )}
          </a>
        </div>
        );
        })}
      </div>
      <div className="partners-logos four">
      {supportingPartners2.map((partner, index) => {
        return (
        <div
          key={index}
          style={{display: isMobile && "none" }}
          className={`partner-logo`} // hide on mobile if blank
        >
          <a
            className="partner-logo-image"
            href={partner.url}
            target="_blank"
            style={{display: isMobile && "none"  }}
            rel="noopener noreferrer"
          >
            {partner.logo && (
              <img
                src={partner.logo}
                alt={partner.name || 'Partner'}
                className="partner-img"
              />
            )}
          </a>
        </div>
        );
        })}
      </div>

      </div>
  </div>
</section>

    </div>
  );
};

export default Sponsorship;
