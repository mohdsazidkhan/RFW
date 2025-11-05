import React from 'react';
import '../styles/Sponsorship.css'
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/en';
import { translations as arTranslations } from '../translations/ar';

const Sponsorship = () => {
  const { language } = useLanguage();
  const t = language === 'ar' ? arTranslations : translations;
const officialPartners = [
  { name: "anb arab national bank", logo: require('../images/partners/saudia.png'), url:"https://www.saudia.com/?utm_campaign=search&utm_source=cpc&utm_medium=google&gclsrc=aw.ds&cid=&gad_source=1&gad_campaignid=23017945566&gbraid=0AAAAADwJ54eKETFOpCCnGQ0o8dggT-PWk&gclid=EAIaIQobChMIxO7g9KaQkAMVCAcGAB3Kty9SEAAYASAAEgL--vD_BwE" },
  { name: "cenomi", logo: require('../images/partners/cenomi.png'), url:"https://centers.cenomi.com/sa-en/" },
];
const strategicPartners = [
  { name: "Bank Saudi Fransi", logo: require('../images/partners/bsf.png'), url:"https://bsf.sa/english/home" },
  { name: "Genesis", logo: require('../images/partners/genesis.png'), url:"https://www.genesis.com/us/en/home" }
];
const supportingPartners1 = [
  { name: "Eyewa", logo: require('../images/partners/eyewa.png'), url:"https://eyewa.com/sa-ar" },
  // { name: "Ounass", logo: require('../images/partners/ounass.png'), url:"https://en-saudi.ounass.com/women?gclsrc=aw.ds&gad_source=1&gad_campaignid=22595114047&gbraid=0AAAAADSMPX6nAHHbpMqeNbaFxZ-AV7TzP&gclid=EAIaIQobChMIjJWVz6yQkAMVHwwGAB0elitaEAAYASAAEgJKAPD_BwE" },
  { name: "Loreal Paris", logo: require('../images/partners/lorealparis.png'), url:"https://www.lorealparis.co.in/" },
  { name: "Loreal Professional Paris", logo: require('../images/partners/loreal_professional_paris.png'), url:"https://www.loreal.com/en/professional-products-division/loreal-professionnel/" },
];
const supportingPartners2 = [
  { name: "Mandarin Oriental", logo: require('../images/partners/mandarin.png'), url:"https://www.mandarinoriental.com/en" },
  { name: "AK AL KHOZAMA INVESTMENT", logo: require('../images/partners/al-khozama.png'), url:"https://alkhozama.com/en/" },
  { name: "Rotana Signs", logo: require('../images/partners/rotana-signs.png'), url:"https://www.linkedin.com/company/rotanasigns/" },
  { name: "KAFD", logo: require('../images/partners/kafd.png'), url: "https://www.kafd.sa/ar/" },
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
    <h1 className="sponsorship-hero-title">{t.sponsorship.heroTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h1>
    {/* <p className="sponsorship-hero-subtitle">PARTNER WITH RIYADH FASHION WEEK 2025</p> */}
  </div>
</section>


      {/* Why Sponsor Section */}
   <section className="why-sponsor-section">
  <div className="sponsorship-section-container">
    <div className="why-sponsor-content">
      {/* Left Column - Text Content */}
      <div className="why-sponsor-text">
        <h2 className="why-sponsor-title">{t.sponsorship.whySponsorTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h2>
        <p className="why-sponsor-description">
          {t.sponsorship.whySponsorDescription}
        </p>
        <div className="contact-info">
          <p className="contact-text">
            <strong>{t.sponsorship.contactText}</strong> <a href="mailto:partnership@riyadhfashionweek.com?">PARTNERSHIP@RIYADHFASHIONWEEK.COM</a>
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
      <h2 className="partners-title">{t.sponsorship.partnersTitle}</h2>
    <div className="previous-partners-content">
      <h4 className="previous-partners-title one">{t.sponsorship.officialPartners}</h4>
      <div className="partners-logos one">
      {officialPartners.map((partner, index) => {

        return (
        <div
          key={index}
          className={`partner-logo`}
        >
          <a
            className="partner-logo-image"
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {partner.logo && (
              <img
                src={partner.logo}
                alt={partner.name || 'Partner'}
                className="partner-img"
              />
            )}
          </a>
        </div>
        );
      })}
      </div>
      </div>
      <div className="previous-partners-content">
      <h4 className="previous-partners-title two">{t.sponsorship.strategicPartners}</h4>
      <div className="partners-logos two">
      {strategicPartners.map((partner, index) => {
        return (
        <div
          key={index}
          className={`partner-logo`} // hide on mobile if blank
        >
          <a
            className="partner-logo-image"
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {partner.logo && (
              <img
                src={partner.logo}
                alt={partner.name || 'Partner'}
                className="partner-img"
              />
            )}
          </a>
        </div>
        );
        })}
      </div>

      </div>
      <div className="previous-partners-content">
  <h4 className="previous-partners-title three">{t.sponsorship.supportingPartners}</h4>

  {/* Two normal rows */}
  <div className="partners-logos three">
    {supportingPartners1.map((partner, index) => (
      <div key={index} className="partner-logo">
        <a
          className="partner-logo-image"
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={partner.logo}
            alt={partner.name || "Partner"}
            className="partner-img"
          />
        </a>
      </div>
    ))}
  </div>

  <div className="partners-logos four">
    {supportingPartners2
      .filter((partner) => partner.name !== "KAFD")
      .map((partner, index) => (
        <div key={index} className="partner-logo">
          <a
            className="partner-logo-image"
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={partner.logo}
              alt={partner.name || "Partner"}
              className="partner-img"
            />
          </a>
        </div>
      ))}
  </div>

  {/* Absolute positioned KAFD logo */}
  <div className="kafd-wrapper">
    {supportingPartners2
      .filter((partner) => partner.name === "KAFD")
      .map((partner, index) => (
        <a
          key={index}
          className="partner-logo-image-kafd"
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={partner.logo}
            alt={partner.name || "Partner"}
            className="partner-img kafd-img"
          />
        </a>
      ))}
  </div>
</div>

  </div>
</section>

    </div>
  );
};

export default Sponsorship;
