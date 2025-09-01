import React from 'react';

const VideoBackground = ({ children }) => {
  return (
    <div className="video-background-section">
      <div className="section-border">
        <div className="section-background">
          <div className="video-background-container">
            <video
              className="video-background-video"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
            >
              <source src="/RFW-Website.MOV" type="video/quicktime" />
              <source src="/RFW-Website.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
