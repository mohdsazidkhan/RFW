import CastingIMG from '../images/Casting_IMG.webp';
import '../styles/Casting.css';

const Casting = () => {
  return (
    <div className="casting-page">
      {/* Hero Section */}
      <section className="casting-hero-section">
        <div className="casting-hero-background">
          <div className="casting-hero-shapes"></div>
        </div>
        <div className="casting-hero-content">
          <h1 className="casting-hero-title">CASTING</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="casting-main-section">
        <div className="section-container">
          <div className="casting-content">
            {/* Left Column - Text Content */}
            <div className="casting-text-content">
              {/* English Content */}
              <div className="casting-english">
                <h2 className="casting-title">LIGHTS, CAMERA, FASHION!</h2>
                <p className="casting-description">
                  BRIGHT FASHION WEEK RETURNS IN A NEW LIGHT FROM OCTOBER 18 TO 21.  
                  WITH THE CONSTITUTION OF THE BROWN AND STEPHEN TOWARDS EVERY DAY, IT WOULD BE NOT AN EXISTING MODELS FROM A CHOSEN TO GET ONTO THE RUNWAY AND TAKE AWAY. THEY RECOGNIZED PROPERLY FASHION RIGHT.  
                </p>
                <p className="casting-description">
                  IF YOU'RE READY TO OWN THE SPOTLIGHT AND SHOWCASE YOUR TALENT, THIS IS YOUR CHANCE.  
                </p>
                <p className="casting-deadline">
                  SUBMIT YOUR APPLICATION BEFORE SUNDAY, SEPTEMBER 7, 2025.
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://events.srmgdigital.com/show-form/28" className="btn btn-casting english">APPLY NOW</a>
              </div>

              {/* Arabic Content */}
              <div className="casting-arabic">
                <h2 className="casting-title">أضواء، كاميرا، أزياء!</h2>
                <p className="casting-description">
                  يعود أسبوع الأزياء في الرياض بحلّة جديدة من 16 إلى 21 أكتوبر، ليجمع بين الأناقة والإبداع تحت أنظار العالم. ندعو العارضين والعارضات من مختلف أنحاء المملكة للانضمام إلى منصة العرض والمشاركة في هذا الحدث الأبرز في عالم الموضة بالمنطقة.


                </p>
                <p className="casting-description">
                  إن كنت مستعدًا لخطف الأضواء وإبراز موهبتك، فهذه هي فرصتك.
                </p>
                <p className="casting-deadline">
                  قدّم طلبك قبل الأحد 7 سبتمبر 2025  

                </p>
                
                <div className="divider"></div>
                
                <a target="_blank" rel="noopener noreferrer" href="https://events.srmgdigital.com/show-form/27" className="btn btn-casting arabic">قدم الآن</a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="casting-image-content">
              <div className="runway-image-container">
                <div className="runway-image">
                  <img src={CastingIMG} alt="Casting" className="casting-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Casting;