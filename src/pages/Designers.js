import { useNavigate } from "react-router-dom";
import { designers } from "../utils/data/Designers";
import '../styles/Designer.css'
const Designers = () => {

  const navigate = useNavigate();
  return (
    <div className="designers-page">
      {/* Main Content Section */}
      <section className="designers-main-section">
        <div className="section-container-black">
          <div className="designers-content">
            {/* Title and Description */}
            <div className="designers-header">
              <div className="designers-title-section">
                <h1 className="designers-title">MEET THE RFW DESIGNERS</h1>
              </div>
              <div className="designers-description-section">
                <p className="designers-description">
                The Riyadh Fashion Week is set to showcase a diverse array of exceptionally talented designers who are poised to leave their mark on the fashion landscape. These visionary creators come from various backgrounds, each contributing a unique perspective. With a harmonious blend of innovation and tradition, their designs promise to captivate and inspire. From avant-garde concepts to timeless elegance, the designers participating in the Riyadh Fashion Week embody the richness and creativity of Saudi Arabian fashion, transcending boundaries and redefining the future of style.
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
                      src={designer.logo}
                      alt={designer.name}
                    />
                    {/* <div className="designer-image-placeholder">
                      {designer.name.split(' ').map(word => word[0]).join('')}
                    </div> */}
                  </div>
                  <div className="designer-info">
                    <h3 className="designer-name">{designer.name}</h3>
                    <p className="designer-category">{designer.desc}</p>
                    <button
                      className="btn btn-learn-more"
                      onClick={() => navigate(`/designer/${designer.id}`)}
                    >
                      LEARN MORE
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
