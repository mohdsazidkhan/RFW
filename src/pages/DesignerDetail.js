import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { designers } from "../utils/data/Designers";
import { Helmet } from 'react-helmet';
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

  return (
    <>
    <Helmet>
        {designerDetails?.name && <title>{designerDetails?.name?.toUpperCase()} - Riyadh Fashion Week 2025</title>}
    </Helmet>
   
    <div className="designer-detail-page">
  <section className="designer-detail-main-section">
    <div className="section-container-detail">
      <div className="designer-detail-content">
          <h1 className="designer-detail-name showMobile">{designerDetails?.name}</h1>
        <div className="designer-detail-grid">
          {/* Left Column: Text */}
          <div className="designer-detail-text">
            <h1 className="designer-detail-name hideMobile">{designerDetails?.name}</h1>
            <div className="designer-detail-bio">
                {designerDetails?.content.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br /><br />
                  </React.Fragment>
                ))}
            </div>
            <button 
              className="btn btn-back-to-designers"
              onClick={() => navigate(-1)}
            >
              ← BACK
            </button>
          </div>
          {/* Right Column: Image */}
          <div className="designer-detail-image">
            <img
              src={designerDetails?.logo || designerDetails?.logo_white}
              alt={designerDetails?.name}
              className="designer-detail-photo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
 </>
  );
};

export default DesignerDetail;

