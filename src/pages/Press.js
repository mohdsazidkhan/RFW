import { pressArray } from '../utils/data/pressData';
import '../styles/Press.css'
const Press = () => {

  return (
    <div className="press-page">
      {/* Hero Section */}
      {/* Press Resources Section */}
     <section className="press-resources-section">
  <div className="section-container-press">
    <div className="press-resources-content">
      <div className="press-resources-grid">
  {pressArray.map((resource, index) => (
    <div
      key={index}
      className={
        "press-resource-item" +
        (index % 2 === 1 ? " reverse-row" : "")
      }
    >
      <div className="resource-image">
        <img src={resource.image} alt={resource.title} />
      </div>
      <div
        className={
          "resource-content" +
          (index % 2 === 1 ? " align-right" : " align-left")
        }
        lang={resource.lang || "en"} 
      >
        <div className="resource-title" style={{direction:resource.lang==="ar"?"rtl":"ltr",textAlign:resource.lang==="ar"?"right":"left"}}>{resource.title}</div>
        <div className="resource-description" style={{direction:resource.lang==="ar"?"rtl":"ltr",textAlign:resource.lang==="ar"?"right":"left"}}>{resource.description}</div>
        <a className="resource-button" href={resource.url} target='_blank' rel="noopener noreferrer">
          {resource.button}
        </a>
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

export default Press;
