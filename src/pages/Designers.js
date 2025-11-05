import { useNavigate } from "react-router-dom";
import { designers } from "../utils/data/Designers";
import '../styles/Designer.css'
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/en';
import { translations as arTranslations } from '../translations/ar';
import { translateCategory } from '../utils/translations';

const Designers = () => {
  const { language } = useLanguage();
  const t = language === 'ar' ? arTranslations : translations;
  const navigate = useNavigate();
  
  // Get category/desc based on language
  const getCategory = (designer) => {
    if (!designer.desc) return '';
    if (language === 'ar' && designer.desc_ar) {
      return designer.desc_ar;
    }
    return translateCategory(language, designer.desc);
  };

  return (
    <div className="designers-page">
      {/* Main Content Section */}
      <section className="designers-main-section">
        <div className="section-container-black">
          <div className="designers-content">
            {/* Title and Description */}
            <div className="designers-header">
              <div className="designers-title-section">
                <h1 className="designers-title">{t.designers.title}</h1>
              </div>
              <div className="designers-description-section">
                <p className="designers-description">
                {t.designers.description}
                </p>
              </div>
            </div>
          </div>

        </div>
          {/* Designers Grid */}
          <div className="section-container-white">
            <div className="designers-grid">
              {designers?.map((designer, index) => (
                <div key={index} className="designer-profile">
                  <div className="designer-image">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={(designer?.logo || designer?.logo_dark)}
                      alt={designer.name}
                    />
                  </div>
                  <div className="designer-info">
                    <h3 className="designer-name">{designer.name}</h3>
                    <p className="designer-category">{getCategory(designer)}</p>
                    <button
                      className="btn btn-learn-more"
                      onClick={() => navigate(`/designer/${designer.id}`)}
                    >
                      {t.calendar.learnMore}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </div>
  );
};

export default Designers;
