import React from 'react';

const Sponsorship = () => {
  const previousPartners = [
    { name: "anb arab national bank", logo: "ANB" },
    { name: "cenomi", logo: "CENOMI" },
    { name: "Charlotte Tilbury", logo: "CT" },
    { name: "Genesis", logo: "GENESIS" },
    { name: "AK AL KHOZAMA INVESTMENT", logo: "AK" },
    { name: "KAFD", logo: "KAFD" },
    { name: "ASTERI", logo: "ASTERI" },
    { name: "MANDARIN ORIENTAL AL FAISALIAH RIYADH", logo: "MO" },
    { name: "S MEDIA", logo: "S" },
    { name: "BEAST Radio", logo: "BEAST" },
    { name: "Schweppes", logo: "SCHWEPPES" }
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
        <div className="section-container">
          <div className="why-sponsor-content">
            {/* Left Column - Text Content */}
            <div className="why-sponsor-text">
              <h2 className="why-sponsor-title">WHY SPONSOR RIYADH FASHION WEEK?</h2>
              <p className="why-sponsor-description">
                Riyadh Fashion Week serves as a high-profile cultural platform for brand exposure and engagement. By partnering with us, you'll align your brand with Saudi Arabia's Vision 2030 and gain access to an influential audience of industry leaders, creatives, buyers, and media professionals from around the world.
              </p>
              <p className="why-sponsor-description">
                Our event provides unparalleled opportunities for brand visibility, networking, and cultural impact in one of the most dynamic and rapidly growing fashion markets globally.
              </p>
              <div className="contact-info">
                <p className="contact-text">
                  CONTACT US ON: <a href="mailto:partnership@riyadhfashionweek.com" className="contact-email">partnership@riyadhfashionweek.com</a>
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="why-sponsor-image">
              <div className="fashion-show-image">
                <div className="image-overlay">
                  <div className="image-text">FASHION SHOW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Partners Section */}
      <section className="previous-partners-section">
        <div className="section-container">
          <div className="previous-partners-content">
            <h2 className="previous-partners-title">PREVIOUS PARTNERS</h2>
            <div className="partners-grid">
              {previousPartners.map((partner, index) => (
                <div key={index} className="partner-logo">
                  <div className="partner-logo-text">{partner.logo}</div>
                  <div className="partner-name">{partner.name}</div>
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
