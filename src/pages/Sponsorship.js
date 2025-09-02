import React from 'react';
import '../styles/Sponsorship.css'
const Sponsorship = () => {
const previousPartners = [
  { name: "anb arab national bank", logo: require('../images/partners/arabnationalbank.webp') },
  { name: "cenomi", logo: require('../images/partners/Cenomi.webp') },
  { name: "Charlotte Tilbury", logo: require('../images/partners/Charlotte.webp') },
  { name: "Genesis", logo: require('../images/partners/genesis.webp') },
  { name: "AK AL KHOZAMA INVESTMENT", logo: require('../images/partners/ALKHOZAMA.webp') },
  { name: "KAFD", logo: require('../images/partners/KAFD.webp') },
  { name: "ASTERI", logo: require('../images/partners/Asteri.webp') },
  { name: '', logo: '' },
  { name: "MANDARIN ORIENTAL AL FAISALIAH RIYADH", logo: require('../images/partners/MORYD.webp') },
  { name: "S MEDIA", logo: require('../images/partners/SSMedia.webp') },
  { name: "BEAST Radio", logo: require('../images/partners/MDLBEAST.webp') },
  { name: "Schweppes", logo: require('../images/partners/Schweppes.webp') }
];

  return (
    <div className="sponsorship-page">
      {/* Hero Section */}
<section className="sponsorship-hero-section">
  <div className="sponsorship-hero-background">
    <div className="sponsorship-hero-image"></div>
    <div className="sponsorship-hero-overlay"></div>
  </div>
  <div className="sponsorship-hero-content">
    <h1 className="sponsorship-hero-title">SPONSORSHIP & PARTNERSHIP</h1>
    <p className="sponsorship-hero-subtitle">PARTNER WITH RIYADH FASHION WEEK 2025</p>
  </div>
</section>


      {/* Why Sponsor Section */}
   <section className="why-sponsor-section">
  <div className="sponsorship-section-container">
    <div className="why-sponsor-content">
      {/* Left Column - Text Content */}
      <div className="why-sponsor-text">
        <h2 className="why-sponsor-title">WHY SPONSOR RIYADH FASHION WEEK?</h2>
        <p className="why-sponsor-description">
          RIYADH FASHION WEEK IS MORE THAN A FASHION EVENT. IT'S A HIGH-PROFILE CULTURAL PLATFORM THAT PLACES YOUR BRAND AT THE HEART OF SAUDI ARABIA'S CREATIVE TRANSFORMATION. AS A SPONSOR, YOUR BRAND GAINS POWERFUL EXPOSURE, ALIGNMENT WITH VISION 2030, AND ACCESS TO AN INFLUENTIAL AUDIENCE OF INDUSTRY LEADERS, CREATIVES, BUYERS, AND MEDIA.
        </p>
        <div className="contact-info">
          <p className="contact-text">
            <strong>CONTACT US ON:</strong> PARTNERSHIP@RIYADHFASHIONWEEK.COM
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
    <div className="previous-partners-content">
      <h2 className="previous-partners-title">PREVIOUS PARTNERS</h2>
      <div className="partners-grid">
        {previousPartners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <div className="partner-logo-image">
           {partner.logo &&   <img src={partner.logo} alt={partner.name} className="partner-img" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Sponsorship;
