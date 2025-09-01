import React from 'react';

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
                  RIYADH FASHION WEEK FROM OCTOBER 16 TO 21 IS THE REGION'S MOST PROMINENT FASHION EVENT, BRINGING TOGETHER THE BEST DESIGNERS, MODELS, AND FASHION ENTHUSIASTS FROM AROUND THE WORLD.
                </p>
                <p className="casting-description">
                  IF YOU'RE READY TO OWN THE SPOTLIGHT AND SHOWCASE YOUR TALENT, THIS IS YOUR CHANCE.
                </p>
                <p className="casting-deadline">
                  SUBMIT YOUR APPLICATION BEFORE SUNDAY, SEPTEMBER 7, 2025.
                </p>
                <button className="btn btn-casting">APPLY NOW</button>
              </div>

              {/* Arabic Content */}
              <div className="casting-arabic">
                <h2 className="casting-title">أضواء، كاميرا، أزياء!</h2>
                <p className="casting-description">
                  أسبوع الرياض للأزياء من 16 إلى 21 أكتوبر هو أهم حدث أزياء في المنطقة، يجمع أفضل المصممين والعارضات وعشاق الأزياء من جميع أنحاء العالم.
                </p>
                <p className="casting-description">
                  إذا كنت مستعداً لامتلاك الأضواء وإظهار موهبتك، فهذه هي فرصتك.
                </p>
                <p className="casting-deadline">
                  قدم طلبك قبل الأحد 7 سبتمبر 2025.
                </p>
                <button className="btn btn-casting">قدم الآن</button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="casting-image-content">
              <div className="runway-image-container">
                <div className="runway-image">
                  <div className="image-overlay">
                    <div className="image-text">SAUDI ARABIA IS THE FUTURE</div>
                  </div>
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
