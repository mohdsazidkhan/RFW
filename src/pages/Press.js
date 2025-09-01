import React from 'react';

const Press = () => {
  const pressResources = [
    { name: "Press Releases", icon: "PR", description: "Latest news and announcements" },
    { name: "Media Kit", icon: "MK", description: "High-resolution images and logos" },
    { name: "Fact Sheets", icon: "FS", description: "Event information and statistics" },
    { name: "Press Photos", icon: "PP", description: "Runway and event photography" },
    { name: "Media Contacts", icon: "MC", description: "Press office information" },
    { name: "Accreditation", icon: "AC", description: "Media access requests" }
  ];

  return (
    <div className="press-page">
      {/* Hero Section */}
      <section className="press-hero-section">
        <div className="press-hero-background">
          <div className="press-hero-image"></div>
          <div className="press-hero-overlay"></div>
        </div>
        <div className="press-hero-content">
          <h1 className="press-hero-title">PRESS</h1>
          <p className="press-hero-subtitle">MEDIA RESOURCES & INFORMATION</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="press-main-section">
        <div className="section-container">
          <div className="press-main-content">
            {/* Left Column - Text Content */}
            <div className="press-text-content">
              <h2 className="press-main-title">MEDIA RESOURCES & PRESS ACCESS</h2>
              <p className="press-main-description">
                Welcome to the press section of Riyadh Fashion Week. Here you'll find comprehensive resources for media coverage, including press releases, high-resolution images, media kits, and accreditation information.
              </p>
              <p className="press-main-description">
                Our dedicated press team is available to assist journalists, photographers, and media professionals with all their coverage needs for this prestigious fashion event.
              </p>
              <div className="press-contact-info">
                <p className="press-contact-text">
                  PRESS INQUIRIES: <a href="mailto:press@riyadhfashionweek.com" className="press-contact-email">press@riyadhfashionweek.com</a>
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="press-image-content">
              <div className="press-event-image">
                <div className="image-overlay">
                  <div className="image-text">MEDIA COVERAGE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Resources Section */}
      <section className="press-resources-section">
        <div className="section-container">
          <div className="press-resources-content">
            <h2 className="press-resources-title">PRESS RESOURCES</h2>
            <div className="press-resources-grid">
              {pressResources.map((resource, index) => (
                <div key={index} className="press-resource-item">
                  <div className="resource-icon">{resource.icon}</div>
                  <div className="resource-name">{resource.name}</div>
                  <div className="resource-description">{resource.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
