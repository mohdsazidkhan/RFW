import React from 'react';
import '../styles/Sponsorship.css'
const Sponsorship = () => {
const previousPartners = [
  { name: "anb arab national bank", logo: require('../images/partners/arabnationalbank.webp'), url:"https://anb.com.sa/web/anb" },
  { name: "cenomi", logo: require('../images/partners/Cenomi.webp'), url:"https://centers.cenomi.com/sa-en/" },
  { name: "Charlotte Tilbury", logo: require('../images/partners/Charlotte.webp'), url:"https://www.sa.charlottetilbury.com/en/" },
  { name: "Genesis", logo: require('../images/partners/genesis.webp'), url:"https://www.genesis.com/sa-riyadh/ar/main.html" },
  { name: "AK AL KHOZAMA INVESTMENT", logo: require('../images/partners/ALKHOZAMA.webp'), url:"https://alkhozama.com/en/" },
  { name: "KAFD", logo: require('../images/partners/KAFD.webp'), url:"https://www.kafd.sa/en/" },
  { name: "ASTERI", logo: require('../images/partners/Asteri.webp'), url:"https://www.asteribeauty.com/" },
  { name: '', logo: '', url:"" },
  { name: "MANDARIN ORIENTAL AL FAISALIAH RIYADH", logo: require('../images/partners/MORYD.webp'), url:"https://www.mandarinoriental.com/en/riyadh/olaya" },
  { name: "S MEDIA", logo: require('../images/partners/SSMedia.webp'), url:"https://www.saudisigns.com/" },
  { name: "BEAST Radio", logo: require('../images/partners/MDLBEAST.webp'), url:"https://mdlbeast.com/" },
  { name: "Schweppes", logo: require('../images/partners/Schweppes.webp'), url:"https://www.schweppes.eu/" }
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
    <h1 className="sponsorship-hero-title">SPONSORSHIP<br/> & PARTNERSHIP</h1>
    <p className="sponsorship-hero-subtitle">PARTNER WITH RIYADH FASHION WEEK 2025</p>
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
    <div className="previous-partners-content">
      <h2 className="previous-partners-title">PREVIOUS PARTNERS</h2>
      <div className="partners-grid">
        {previousPartners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <a className="partner-logo-image" href={partner.url} target='_blank' rel='noopener noreferrer'>
           {partner.logo &&   <img src={partner.logo} alt={partner.name} className="partner-img" />}
            </a>
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
