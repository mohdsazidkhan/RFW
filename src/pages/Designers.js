import { useNavigate } from 'react-router-dom';
const Designers = () => {
const designers= [
  { id: "1886", name: "1886", desc: "STREETWEAR", logo: require('../images/designers/1886.webp') },
  { id: "abadia", name: "Abadia", desc: "READY-TO-WEAR", logo: require('../images/designers/abadia.webp') },
  { id: "adnan-akbar", name: "Adnan Akbar", desc: "COUTURE", logo: require('../images/designers/adnan-akbar.webp') },
  { id: "aram", name: "Aram", desc: "READY-TO-WEAR", logo: require('../images/designers/aram.webp') },
  { id: "ashwaq-almarshad", name: "Ashwaq Al Marshad", desc: "COUTURE", logo: require('../images/designers/ashwaq-almarshad.webp') },
  { id: "atelier-hikayat", name: "Atelier Hekayat", desc: "COUTURE", logo: require('../images/designers/atelier-hikayat.webp') },
  { id: "awaken", name: "Awaken", desc: "STREETWEAR", logo: require('../images/designers/atelier-hikayat.webp') },
  { id: "dar-alhanouf", name: "Dar alhanouf", desc: "COUTURE", logo: require('../images/designers/dar-alhanouf.webp') },
  { id: "fatima-alabdul-qader", name: "Fatima AlAbdulQader", desc: "COUTURE", logo: require('../images/designers/fatima-alabdul-qader.webp') },
  { id: "freeminds", name: "FREEMINDS", desc: "STREETWEAR", logo: require('../images/designers/freeminds.webp') },
  { id: "hajruss", name: "Hajruss", desc: "READY-TO-WEAR", logo: require('../images/designers/hajruss.webp') },
  { id: "hala-algharbawi", name: "HALA ALGHARBAWI", desc: "COUTURE", logo: require('../images/designers/hala-algharbawi.webp') },
  { id: "hindamme", name: "HINDAMME", desc: "READY-TO-WEAR", logo: require('../images/designers/hindamme.webp') },
  { id: "honayda", name: "Honayda", desc: "READY-TO-WEAR", logo: require('../images/designers/honayda.webp') },
  { id: "house-of-cenmar", name: "HOUSE OF CENMAR", desc: "STREETWEAR", logo: require('../images/designers/house-of-cenmar.webp') },
  { id: "jubb", name: "Jubb", desc: "READY-TO-WEAR", logo: require('../images/designers/jubb.webp') },
  { id: "kaf-by-kaf", name: "Kaf by Kaf", desc: "READY-TO-WEAR", logo: require('../images/designers/kaf-by-kaf.webp') },
  { id: "khawla-alaiban", name: "KHAWLA ALAIBAN", desc: "COUTURE", logo: require('../images/designers/khawla-alaiban.webp') },
  { id: "kml", name: "KML", desc: "READY-TO-WEAR", logo: require('../images/designers/kml.webp') },
  { id: "makram-marzuki", name: "MAKRAM MARZUKI", desc: "READY-TO-WEAR", logo: require('../images/designers/makram-marzuki.webp') },
  { id: "mashael-al-faris", name: "MASHAEL AL FARIS", desc: "COUTURE", logo: require('../images/designers/mashael-al-faris.webp') },
  { id: "mazrood", name: "Mazrood", desc: "READY-TO-WEAR", logo: require('../images/designers/mazrood.webp') },
  { id: "noble-fresh", name: "Noble & Fresh", desc: "READY-TO-WEAR", logo: require('../images/designers/noble-fresh.webp') },
  { id: "nora-al-shaikh", name: "Nora Al Shaikh", desc: "READY-TO-WEAR", logo: require('../images/designers/nora-al-shaikh.webp') },
  { id: "nour-aldahri", name: "NOUR ALDHAHRI", desc: "COUTURE", logo: require('../images/designers/nour-aldahri.webp') },
  { id: "noura-sulaiman", name: "Noura Sulaiman", desc: "READY-TO-WEAR", logo: require('../images/designers/noura-sulaiman.webp') },
  { id: "pavone", name: "PAVONE", desc: "COUTURE", logo: require('../images/designers/pavone.webp') },
  { id: "qormuz", name: "QORMUZ", desc: "READY-TO-WEAR", logo: require('../images/designers/qormuz.webp') },
  { id: "razan-alazzouni", name: "RAZAN ALAZZOUNI", desc: "READY-TO-WEAR", logo: require('../images/designers/razan-alazzouni.webp') },
  { id: "rba", name: "RBA", desc: "READY-TO-WEAR", logo: require('../images/designers/rba.webp') },
  { id: "samar-nasraldin", name: "SAMAR NASRALDIN", desc: "READY-TO-WEAR", logo: require('../images/designers/samar-nasraldin.webp') },
  { id: "tima-abid", name: "Tima Abid", desc: "COUTURE", logo: require('../images/designers/tima-abid.webp') },
  { id: "uscita", name: "USCITA", desc: "READY-TO-WEAR", logo: require('../images/designers/uscita.webp') },
  { id: "waad-aloqaili", name: "Waad AloqAili", desc: "COUTURE", logo: require('../images/designers/waad-aloqaili.webp') },
  { id: "yehya-al-bishri", name: "Yahya ALBISHRI", desc: "COUTURE", logo: require('../images/designers/yehya-al-bishri.webp') },
];
console.log(designers.length,"Length")

  const navigate = useNavigate();
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
              {designers?.map((designer, index) => (
                <div key={index} className="designer-profile">
                  <div className="designer-image">
                    <img 
                      style={{width: '100%', height: '100%', objectFit: 'cover'}}
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
        </div>
      </section>
    </div>
  );
};

export default Designers;
