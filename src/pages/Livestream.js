import React from 'react';
import '../styles/Livestream.css';

const Livestream = () => {
  return (
    <div className="livestream-page">
      {/* Hero Section */}
      <section className="livestream-hero-section">
        <div className="livestream-hero-background">
          <div className="livestream-hero-image"></div>
          <div className="livestream-hero-overlay"></div>
        </div>
        <div className="livestream-hero-content">
          <h1 className="livestream-hero-title">STREAM THE LATEST FROM RFW</h1>
          <p className="livestream-hero-subtitle">OCTOBER 17 — OCTOBER 21</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="livestream-video-section">
        <div className="section-container">
          <div className="video-frame-wrapper">
            <div className="video-frame">
              <iframe
                className="yt-iframe"
                src="https://www.youtube.com/embed/hoYtUC1aW-Q?rel=0&modestbranding=1"
                title="RFW 2024 Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Livestream;


