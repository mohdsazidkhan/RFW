import React from 'react';
import { useNavigate } from 'react-router-dom';

const Designers = () => {
  const navigate = useNavigate();
  
  const designers = [
    { name: "1880", category: "STREETWEAR", image: "designer-1880" },
    { name: "ABADIA", category: "READY TO WEAR", image: "designer-abadia" },
    { name: "ADNAN AKBAR", category: "COUTURE", image: "designer-adnan-akbar" },
    { name: "DAR ALHANOUF", category: "READY TO WEAR", image: "designer-dar-alhanouf" },
    { name: "FATIMA ALABDULQADER", category: "COUTURE", image: "designer-fatima-alabdulqader" },
    { name: "HONAYDA", category: "READY TO WEAR", image: "designer-honayda" },
    { name: "KML", category: "STREETWEAR", image: "designer-kml" },
    { name: "PAVONE", category: "COUTURE", image: "designer-pavone" },
    { name: "TIMA ABID", category: "READY TO WEAR", image: "designer-tima-abid" },
    { name: "WAAD ALOQAILI", category: "COUTURE", image: "designer-waad-aloqaili" },
    { name: "DESIGNER 11", category: "STREETWEAR", image: "designer-11" },
    { name: "DESIGNER 12", category: "READY TO WEAR", image: "designer-12" },
    { name: "DESIGNER 13", category: "COUTURE", image: "designer-13" },
    { name: "DESIGNER 14", category: "READY TO WEAR", image: "designer-14" },
    { name: "DESIGNER 15", category: "STREETWEAR", image: "designer-15" },
    { name: "DESIGNER 16", category: "COUTURE", image: "designer-16" },
    { name: "DESIGNER 17", category: "READY TO WEAR", image: "designer-17" },
    { name: "DESIGNER 18", category: "STREETWEAR", image: "designer-18" },
    { name: "DESIGNER 19", category: "COUTURE", image: "designer-19" },
    { name: "DESIGNER 20", category: "READY TO WEAR", image: "designer-20" },
    { name: "DESIGNER 21", category: "STREETWEAR", image: "designer-21" },
    { name: "DESIGNER 22", category: "COUTURE", image: "designer-22" },
    { name: "DESIGNER 23", category: "READY TO WEAR", image: "designer-23" },
    { name: "DESIGNER 24", category: "STREETWEAR", image: "designer-24" },
    { name: "DESIGNER 25", category: "COUTURE", image: "designer-25" },
    { name: "DESIGNER 26", category: "READY TO WEAR", image: "designer-26" },
    { name: "DESIGNER 27", category: "STREETWEAR", image: "designer-27" },
    { name: "DESIGNER 28", category: "COUTURE", image: "designer-28" },
    { name: "DESIGNER 29", category: "READY TO WEAR", image: "designer-29" },
    { name: "DESIGNER 30", category: "STREETWEAR", image: "designer-30" },
    { name: "DESIGNER 31", category: "COUTURE", image: "designer-31" },
    { name: "DESIGNER 32", category: "READY TO WEAR", image: "designer-32" },
    { name: "DESIGNER 33", category: "STREETWEAR", image: "designer-33" },
    { name: "DESIGNER 34", category: "COUTURE", image: "designer-34" },
    { name: "DESIGNER 35", category: "READY TO WEAR", image: "designer-35" }
  ];

  return (
    <div className="designers-page">
      {/* Main Content Section */}
      <section className="designers-main-section">
        <div className="section-container">
          <div className="designers-content">
            {/* Title and Description */}
            <div className="designers-header">
              <div className="designers-title-section">
                <h1 className="designers-title">MEET THE RFW DESIGNERS</h1>
              </div>
              <div className="designers-description-section">
                                 <p className="designers-description">
                   Riyadh Fashion Week showcases exceptionally talented designers who contribute 
                   a unique perspective and a harmonious blend of innovation and tradition, 
                   promising to captivate and inspire and redefine the future of style.
                 </p>
              </div>
            </div>
            
            {/* Designers Grid */}
            <div className="designers-grid">
              {designers.map((designer, index) => (
                <div key={index} className="designer-profile">
                  <div className="designer-image">
                    <div className="designer-image-placeholder">
                      {designer.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <div className="designer-info">
                    <h3 className="designer-name">{designer.name}</h3>
                    <p className="designer-category">{designer.category}</p>
                    <button 
                      className="btn btn-learn-more" 
                      onClick={() => navigate(`/designer/${designer.name.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Designers;
