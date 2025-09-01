import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { designers } from "../utils/data/Designers";
const DesignerDetail = () => {
  const { designerSlug } = useParams();
  console.log(designerSlug,"designerSlug")


  const [designerDetails,setDesignerDetails]=useState(null)
  useEffect(()=>{
    if(designerSlug){
      let filterDesigner = designers.find((item)=>item.id===designerSlug);
      setDesignerDetails(filterDesigner)
    }
  },[designerSlug])
  console.log(designerDetails,"designerDetails")
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
  <section className="designer-detail-main-section">
    <div className="section-container-detail">
      <div className="designer-detail-content">
        <div className="designer-detail-grid">
          {/* Left Column: Text */}
          <div className="designer-detail-text">
            <h1 className="designer-detail-name">{designerDetails?.name}</h1>
            <div className="designer-detail-bio">
              {designerDetails?.content}
            </div>
            <button 
              className="btn btn-back-to-designers"
              onClick={() => navigate('/designers')}
            >
              ← BACK TO DESIGNERS
            </button>
          </div>
          {/* Right Column: Image */}
          <div className="designer-detail-image">
            <img
              src={designerDetails?.logo}
              alt={designerDetails?.name}
              className="designer-detail-photo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default DesignerDetail;

