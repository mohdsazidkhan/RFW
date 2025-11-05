import { pressArray } from '../utils/data/pressData';
import '../styles/Press.css'
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/en';
import { translations as arTranslations } from '../translations/ar';

const Press = () => {
  const { language } = useLanguage();
  const t = language === 'ar' ? arTranslations : translations;

  // Get title and description based on language
  const getTitle = (resource) => {
    if (language === 'ar' && resource.title_ar) {
      return resource.title_ar;
    }
    return resource.title || '';
  };

  const getDescription = (resource) => {
    if (language === 'ar' && resource.description_ar) {
      return resource.description_ar;
    }
    return resource.description || '';
  };

  return (
    <div className="press-page">
      {/* Hero Section */}
      {/* Press Resources Section */}
     <section className="press-resources-section">
  <div className="section-container-press">
    <div className="press-resources-content">
      <div className="press-resources-grid">
  {pressArray.map((resource, index) => {
    const title = getTitle(resource);
    const description = getDescription(resource);
    const isArabic = (language === 'ar' && resource.title_ar) || resource.lang === 'ar';
    
    return (
    <div
      key={index}
      className={
        "press-resource-item" +
        (index % 2 === 1 ? " reverse-row" : "")
      }
    >
      <div className="resource-image">
        <img src={resource.image} alt={title} />
      </div>
      <div
        className={
          "resource-content" +
          (index % 2 === 1 ? " align-right" : " align-left")
        }
        lang={isArabic ? "ar" : "en"}
      >
        <div className={`resource-title ${isArabic?"arabic":""}`} style={{direction:isArabic?"rtl":"ltr",textAlign:isArabic?"right":"left"}}>{title}</div>
        <div className={`resource-description ${isArabic?"arabic":""}`} style={{direction:isArabic?"rtl":"ltr",textAlign:isArabic?"right":"left"}}>{description}</div>
        <a className={`resource-button ${isArabic?"arabic":""}`} href={resource.url} target='_blank' rel="noopener noreferrer">
          {isArabic && language === 'ar' ? t.press.readFullArticle : (resource.button || t.press.readFullArticle)}
        </a>
      </div>
    </div>
    );
  })}
</div>

    </div>
  </div>
</section>

    </div>
  );
};

export default Press;
