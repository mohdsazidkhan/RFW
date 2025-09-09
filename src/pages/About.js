import { useState, useEffect } from 'react';
import '../styles/About.css'

const About = () => {
  const [imageWidth, setImageWidth] = useState(419);
  const [imageHeight, setImageHeight] = useState(365);
  const [visibleCount, setVisibleCount] = useState(3);

  // Calculate responsive values based on screen width and height
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Original image dimensions
      const originalWidth = 1000;
      const originalHeight = 494;
      const aspectRatio = originalWidth / originalHeight; // 1000/494 = ~2.02
      
      // Show 1 image on mobile/tablet, 3 images on desktop
      let visibleCount;
      let calculatedWidth;
      
      if (width <= 768) {
        visibleCount = 1;
        calculatedWidth = width - 40; // 20px padding on each side
      } else {
        visibleCount = 3;
        calculatedWidth = width / 3;
      }
      
      // Calculate height based on aspect ratio to maintain proportions
      const calculatedHeight = calculatedWidth / aspectRatio;
      
      setVisibleCount(visibleCount);
      setImageWidth(calculatedWidth);
      setImageHeight(calculatedHeight);
    };

    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const images = [
    {
      id: 1,
      description: "Fashion show runway with models",
      background: "linear-gradient(45deg, #87CEEB, #4682B4)",
      url: require('../images/AboutCarousel/carousel2.webp')
    },
    {
      id: 2,
      description: "Model in pink sequined blazer",
      background: "linear-gradient(45deg, #FFB6C1, #FF69B4)",
      url: require('../images/AboutCarousel/Carousel3.webp')
    },
    {
      id: 3,
      description: "Runway scene with models in golden gowns",
      background: "linear-gradient(45deg, #FFD700, #DAA520)",
      url: require('../images/AboutCarousel/carousel1.webp')
    },
    {
      id: 4,
      description: "Fashion show audience and runway",
      background: "linear-gradient(45deg, #87CEEB, #4682B4)",
      url: require('../images/AboutCarousel/carousel2.webp')
    },
    {
      id: 5,
      description: "Model in elegant fashion attire",
      background: "linear-gradient(45deg, #FFB6C1, #FF69B4)",
      url: require('../images/AboutCarousel/Carousel3.webp')
    },
    {
      id: 6,
      description: "Fashion week runway show",
      background: "linear-gradient(45deg, #FFD700, #DAA520)",
      url: require('../images/AboutCarousel/carousel1.webp')
    },
    {
      id: 7,
      description: "Fashion show with audience",
      background: "linear-gradient(45deg, #87CEEB, #4682B4)",
      url: require('../images/AboutCarousel/carousel2.webp')
    },
    {
      id: 8,
      description: "Model showcasing fashion design",
      background: "linear-gradient(45deg, #FFB6C1, #FF69B4)",
      url: require('../images/AboutCarousel/Carousel3.webp')
    }
  ];
  const [startIndex, setStartIndex] = useState(0);


const prevImage = () => {
  setStartIndex((prev) => {
    const maxIndex = Math.max(0, images.length - visibleCount);
    return prev === 0 ? maxIndex : prev - 1;
  });
};

const nextImage = () => {
  setStartIndex((prev) => {
    const maxIndex = Math.max(0, images.length - visibleCount);
    return prev >= maxIndex ? 0 : prev + 1;
  });
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
    {console.log(window, 'window')}
      {/* Image Gallery Section */}
      <section className="gallery-reel">
        <div className="gallery-reel-wrapper">
          <div
            className="gallery-reel-list-outer"
            style={{
              width: '100%',
              height: `${imageHeight}px`,
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <div
              className="gallery-reel-list-inner"
              style={{
                display: 'flex',
                width: `${imageWidth * images.length}px`,
                transition: 'transform 0.6s cubic-bezier(.4,0,.2,1)',
                transform: `translateX(-${startIndex * imageWidth}px)`,
                height: '100%'
              }}
            >
           {images.map((image, index) => (
             <figure
               className="gallery-reel-item"
               key={image.id}
               data-test="gallery-reel-item"
               data-slide-url={image.id}
               style={{
                 width: `${imageWidth}px`,
                 height: `${imageHeight}px`,
                 flex: '0 0 auto',
                 position: 'relative',
                 margin: 0,
                 padding: 0
               }}
               data-active={index === startIndex ? "true" : "false"}
             >
               <div className="gallery-reel-item-wrapper">
                 <div 
                   className="gallery-reel-item-src" 
                   data-loaded="true" 
                   data-visible="true"
                   style={{
                     width: '100%',
                     height: '100%',
                     position: 'relative',
                     overflow: 'hidden'
                   }}
                 >
                   <img
                     data-src={image.url}
                     data-image={image.url}
                     data-image-dimensions="2386x1580"
                     data-image-focal-point="0.5,0.5"
                     alt={image.description}
                     data-load="false"
                     elementtiming="nbf-gallery-reel-item"
                     src={image.url}
                     width="2386"
                     height="1580"
                     sizes="75.50632911392405vh"
                     style={{
                       display: 'block',
                       height: '100%',
                       width: '100%',
                       objectFit: 'cover',
                       objectPosition: '50% 50%'
                     }}
                     loading="lazy"
                     decoding="async"
                   />
                 </div>
               </div>
             </figure>
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
