import { useState } from 'react';
import '../styles/About.css'

const About = () => {
const IMAGE_WIDTH = 419;
const IMAGE_HEIGHT = 240;
const VISIBLE_COUNT=3;
  const images = [
    {
      id: 1,
      description: "Woman with dark hair wearing light blue sequined top and silver choker",
      background: "linear-gradient(45deg, #87CEEB, #4682B4)",
       url:require('../images/AboutCarousel/carousel2.webp')
    },
    {
      id: 2,
      description: "Woman with dark hair wearing pink sequined blazer",
      background: "linear-gradient(45deg, #FFB6C1, #FF69B4)",
      url:require('../images/AboutCarousel/carousel1.webp')
    },
    {
      id: 3,
      description: "Runway scene with models in golden gowns on reflective runway",
      background: "linear-gradient(45deg, #FFD700, #DAA520)",
       url:require('../images/AboutCarousel/Carousel3.webp')
    },
       {
      id: 4,
      description: "Woman with dark hair wearing light blue sequined top and silver choker",
      background: "linear-gradient(45deg, #87CEEB, #4682B4)",
       url:require('../images/AboutCarousel/carousel2.webp')
    },
    {
      id: 5,
      description: "Woman with dark hair wearing pink sequined blazer",
      background: "linear-gradient(45deg, #FFB6C1, #FF69B4)",
      url:require('../images/AboutCarousel/carousel1.webp')
    },
    {
      id: 6,
      description: "Runway scene with models in golden gowns on reflective runway",
      background: "linear-gradient(45deg, #FFD700, #DAA520)",
       url:require('../images/AboutCarousel/Carousel3.webp')
    },
  ];
  const [startIndex, setStartIndex] = useState(0);


const prevImage = () => {
  setStartIndex((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

const nextImage = () => {
  setStartIndex((prev) =>
    (prev + 1) % images.length
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
    <h4 className="about-vertical-text">ABOUT</h4>
    <div className="about-main-content">
      <h1 className="about-title">RIYADH<br/>FASHION<br/>WEEK</h1>
      <p className="about-description">
        THE THIRD EDITION OF RIYADH FASHION WEEK WILL LIGHT UP THE CAPITAL ONCE AGAIN, BLENDING STYLE, INNOVATION, AND CREATIVITY. THIS EVENT SERVES AS A PLATFORM FOR BOTH RENOWNED AND EMERGING DESIGNERS TO SHOWCASE THEIR UNIQUE VISIONS. WITH EACH RUNWAY SHOW TELLING A STORY OF ARTISTIC EXPRESSION, RIYADH FASHION WEEK PROMISES TO DELIVER AN UNFORGETTABLE EXPERIENCE.
      </p>
    </div>
  </div>
</section>


      {/* Quote Section */}
      <section className="quote-section">
        <div className="section-container-white">
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
<section className="gallery-reel">
      <div className="gallery-reel-wrapper">
        <div
  className="gallery-reel-list-outer"
  style={{
    width: `${IMAGE_WIDTH * VISIBLE_COUNT}px`, // visible area width
    height: `${IMAGE_HEIGHT}px`,
    overflow: 'hidden',
    margin: '0 auto',
    position: 'relative'
  }}
>
        <div
          className="gallery-reel-list-inner"
          style={{
           display: 'flex',
      width: `${IMAGE_WIDTH * images.length}px`, // total images width
      transition: 'transform 0.6s cubic-bezier(.4,0,.2,1)',
      transform: `translateX(-${startIndex * IMAGE_WIDTH}px)`
          }}
        >
          {images.map((image) => (
            <div
              className="gallery-reel-item"
              key={image.id}
              style={{
                width: `${IMAGE_WIDTH}px`,
                height: `${IMAGE_HEIGHT}px`,
                flex: '0 0 auto',
                position: 'relative'
              }}
            >
              <img
                src={image.url}
                alt={image.description}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '8px'
                }}
              />
            </div>
          ))}
        </div>
</div>
        {/* Arrow Controls */}
        <div
          className="gallery-reel-controls"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none'
          }}
        >
          <div className="gallery-reel-control">
            <button
              className="gallery-reel-control-btn"
              onClick={prevImage}
              style={{ pointerEvents: 'auto' }}
              aria-label="Previous Slide"
            >
              <div className="gallery-reel-control-btn-icon">
                <svg viewBox="0 0 60 30">
                  <path
                    d="M15.9,23.7L7.1,15l8.7-8.7"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M52.9,15H8.5"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="gallery-reel-control">
            <button
              className="gallery-reel-control-btn"
              onClick={nextImage}
              style={{ pointerEvents: 'auto' }}
              aria-label="Next Slide"
            >
              <div className="gallery-reel-control-btn-icon">
                <svg viewBox="0 0 60 30">
                  <path
                    d="M44.1,6.3l8.7,8.7l-8.7,8.7"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M7.1,15h44.4"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>


    </div>
  );
};

export default About;
