import React, { useState } from 'react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      description: "Woman with dark hair wearing light blue sequined top and silver choker",
      background: "linear-gradient(45deg, #87CEEB, #4682B4)"
    },
    {
      id: 2,
      description: "Woman with dark hair wearing pink sequined blazer",
      background: "linear-gradient(45deg, #FFB6C1, #FF69B4)"
    },
    {
      id: 3,
      description: "Runway scene with models in golden gowns on reflective runway",
      background: "linear-gradient(45deg, #FFD700, #DAA520)"
    },
    {
      id: 4,
      description: "Outdoor night-time runway show with illuminated buildings",
      background: "linear-gradient(45deg, #191970, #4169E1)"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <div className="about-hero-shapes"></div>
        </div>
        <div className="about-hero-content">
          <div className="about-vertical-text">ABOUT</div>
          <div className="about-main-content">
            <h1 className="about-title">RIYADH FASHION WEEK</h1>
            <p className="about-description">
              THE THIRD EDITION OF RIYADH FASHION WEEK WILL LIGHT UP THE CAPITAL ONCE AGAIN, BLENDING STYLE, INNOVATION, AND CREATIVITY. THIS EVENT SERVES AS A PLATFORM FOR BOTH RENOWNED AND EMERGING DESIGNERS TO SHOWCASE THEIR UNIQUE VISIONS. WITH EACH RUNWAY SHOW TELLING A STORY OF ARTISTIC EXPRESSION, RIYADH FASHION WEEK PROMISES TO DELIVER AN UNFORGETTABLE EXPERIENCE.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="section-container">
          <div className="quote-content">
            <blockquote className="quote-text">
              "RIYADH FASHION WEEK STANDS AS A LANDMARK EVENT IN SAUDI ARABIA'S CULTURAL AND ECONOMIC EVOLUTION. IT SERVES AS A PREMIER STAGE FOR THE EXCEPTIONAL TALENT AND CREATIVITY OF OUR DESIGNERS, BRIDGING LOCAL AND INTERNATIONAL FASHION COMMUNITIES. THIS EVENT CATALYZES ECONOMIC GROWTH, FOSTERS INNOVATION, AND CELEBRATES OUR RICH CULTURAL HERITAGE. BY UNITING INDUSTRY PROFESSIONALS FROM AROUND THE WORLD, RIYADH FASHION WEEK AIMS TO INSPIRE FUTURE GENERATIONS AND ESTABLISH SAUDI ARABIA AS A DYNAMIC FORCE IN THE GLOBAL FASHION LANDSCAPE."
            </blockquote>
            <cite className="quote-author">
              — BURAK CAKMAK, CEO OF THE SAUDI FASHION COMMISSION
            </cite>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="gallery-section">
        <div className="section-container">
          <div className="gallery-container">
            <button className="gallery-nav gallery-nav--prev" onClick={prevImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="gallery-images">
              {images.map((image, index) => (
                <div 
                  key={image.id}
                  className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ background: image.background }}
                  aria-label={image.description}
                >
                  <div className="gallery-image-overlay">
                    <span className="gallery-image-number">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="gallery-nav gallery-nav--next" onClick={nextImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="gallery-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`gallery-indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
