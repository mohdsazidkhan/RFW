import React from "react";
import "../styles/Livestream.css";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/en';
import { translations as arTranslations } from '../translations/ar';

const Livestream = () => {
  const { language } = useLanguage();
  const t = language === 'ar' ? arTranslations : translations;
  return (
    <div className="livestream-page">
      {/* Hero Section */}
      <section className="livestream-hero-section">
        <div className="livestream-hero-background">
          <div className="livestream-hero-image"></div>
          <div className="livestream-hero-overlay"></div>
        </div>
        <div className="livestream-hero-content">
          <h1 className="livestream-hero-title">
            {t.livestream.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
          </h1>
          <p className="livestream-hero-subtitle">{t.livestream.subtitle}</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="livestream-video-section">
        <div className="section-container">
          <div className="video-frame-wrapper">
            <div className="video-frame">
              <iframe
        className="rounded-2xl shadow-lg"
        style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
        src="https://www.youtube.com/embed/videoseries?list=PLPbqerAi2uAv_lu9S135ofDWrBeNelCMW"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
              {/* <iframe
                src="https://vimeo.com/event/5455689/embed/a7f5233623/interaction"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Vimeo video"
              ></iframe> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Livestream;
