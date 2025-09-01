import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DesignerDetail = () => {
  const { designerSlug } = useParams();
  const navigate = useNavigate();
  // Convert slug back to designer name for display
  const designerName = designerSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Sample designer data - in a real app, this would come from an API or database
  const designerData = {
    name: designerName,
    category: "COUTURE",
    bio: `Born and raised in Riyadh, ${designerName} embodies the creative spirit that defines Saudi fashion. From an early age, she showed a keen interest in fashion and design, drawing inspiration from the rich cultural heritage of Saudi Arabia.

Her design philosophy integrates art and blends traditional Saudi glamour with modern silhouettes and bold creativity. Each piece tells a story, combining contemporary aesthetics with timeless elegance.

After graduating from Boxhill Institute, she launched her first collection in 2010, quickly gaining regional recognition for her innovative approach to design. Her work has been featured in prestigious publications and she was recently recognized in Forbes for 2025.

THE BRAND:
The atelier aspires to create high-quality couture and ready-to-wear garments that celebrate individuality and craftsmanship. Using only the finest Italian fabrics, each piece is meticulously designed with attention to detail, ensuring that every garment meets the highest standards of quality and style.`,
    image: "designer-portrait"
  };

  return (
    <div className="designer-detail-page">
      {/* Main Content Section */}
      <section className="designer-detail-main-section">
        <div className="section-container">
          <div className="designer-detail-content">
            {/* Two Column Layout */}
            <div className="designer-detail-grid">
              {/* Left Column - Text Content */}
              <div className="designer-detail-text">
                <h1 className="designer-detail-name">{designerData.name}</h1>
                <div className="designer-detail-bio">
                  {designerData.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="bio-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button 
                  className="btn btn-back-to-designers"
                  onClick={() => navigate('/designers')}
                >
                  ← BACK TO DESIGNERS
                </button>
              </div>
              
              {/* Right Column - Image */}
              <div className="designer-detail-image">
                <div className="designer-portrait-placeholder">
                  <div className="portrait-initials">
                    {designerData.name.split(' ').map(word => word[0]).join('')}
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

export default DesignerDetail;

