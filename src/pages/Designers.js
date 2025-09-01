import { useNavigate } from 'react-router-dom';
const Designers = () => {
const designers = [
{
    "id": "1886",
    "name": "1886",
    "category": "STREETWEAR",
    "image": "./images/designers/1886.webp"
},
{
    "id": "abadia",
    "name": "Abadia",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/abadia.webp"
},
{
    "id": "adnan-akbar",
    "name": "Adnan Akbar",
    "category": "COUTURE",
    "image": "./images/designers/adnan-akbar.webp"
},
{
    "id": "aram",
    "name": "Aram",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/aram.webp"
},
{
    "id": "ashwaq-almarshad",
    "name": "Ashwaq Al Marshad",
    "category": "COUTURE",
    "image": "./images/designers/ashwaq-almarshad.webp"
},
{
    "id": "atelier-hikayat",
    "name": "Atelier Hekayat",
    "category": "COUTURE",
    "image": "./images/designers/atelier-hikayat.webp"
},
{
    "id": "awaken",
    "name": "Awaken",
    "category": "STREETWEAR",
    "image": "./images/designers/atelier-hikayat.webp"
},
{
    "id": "dar-alhanouf",
    "name": "Dar alhanouf",
    "category": "COUTURE",
    "image": "./images/designers/dar-alhanouf.webp"
},
{
    "id": "fatima-alabdul-qader",
    "name": "Fatima AlAbdulQader",
    "category": "COUTURE",
    "image": "./images/designers/fatima-alabdul-qader.webp"
},
{
    "id": "freeminds",
    "name": "FREEMINDS",
    "category": "STREETWEAR",
    "image": "./images/designers/freeminds.webp"
},
{
    "id": "hajruss",
    "name": "Hajruss",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/hajruss.webp"
},
{
    "id": "hala-algharbawi",
    "name": "HALA ALGHARBAWI",
    "category": "COUTURE",
    "image": "./images/designers/hala-algharbawi.webp"
},
{
    "id": "hindamme",
    "name": "HINDAMME",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/hindamme.webp"
},
{
    "id": "honayda",
    "name": "Honayda",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/honayda.webp"
},
{
    "id": "house-of-cenmar",
    "name": "HOUSE OF CENMAR",
    "category": "STREETWEAR",
    "image": "./images/designers/house-of-cenmar.webp"
},
{
    "id": "jubb",
    "name": "Jubb",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/jubb.webp"
},
{
    "id": "kaf-by-kaf",
    "name": "Kaf by Kaf",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/kaf-by-kaf.webp"
},
{
    "id": "khawla-alaiban",
    "name": "KHAWLA ALAIBAN",
    "category": "COUTURE",
    "image": "./images/designers/khawla-alaiban.webp"
},
{
    "id": "kml",
    "name": "KML",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/kml.webp"
},
{
    "id": "makram-marzuki",
    "name": "MAKRAM MARZUKI",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/makram-marzuki.webp"
},
{
    "id": "mashael-al-faris",
    "name": "MASHAEL AL FARIS",
    "category": "COUTURE",
    "image": "./images/designers/mashael-al-faris.webp"
},
{
    "id": "mazrood",
    "name": "Mazrood",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/mazrood.webp"
},
{
    "id": "noble-fresh",
    "name": "Noble & Fresh",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/noble-fresh.webp"
},
{
    "id": "nora-al-shaikh",
    "name": "Nora Al Shaikh",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/nora-al-shaikh.webp"
},
{
    "id": "nour-aldahri",
    "name": "NOUR ALDHAHRI",
    "category": "COUTURE",
    "image": "./images/designers/nour-aldahri.webp"
},
{
    "id": "noura-sulaiman",
    "name": "Noura Sulaiman",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/noura-sulaiman.webp"
},
{
    "id": "pavone",
    "name": "PAVONE",
    "category": "COUTURE",
    "image": "./images/designers/pavone.webp"
},
{
    "id": "qormuz",
    "name": "QORMUZ",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/qormuz.webp"
},
{
    "id": "razan-alazzouni",
    "name": "RAZAN ALAZZOUNI",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/razan-alazzouni.webp"
},
{
    "id": "rba",
    "name": "RBA",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/rba.webp"
},
{
    "id": "samar-nasraldin",
    "name": "SAMAR NASRALDIN",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/samar-nasraldin.webp"
},
{
    "id": "tima-abid",
    "name": "Tima Abid",
    "category": "COUTURE",
    "image": "./images/designers/tima-abid.webp"
},
{
    "id": "uscita",
    "name": "USCITA",
    "category": "READY-TO-WEAR",
    "image": "./images/designers/uscita.webp"
},
{
    "id": "waad-aloqaili",
    "name": "Waad AloqAili",
    "category": "COUTURE",
    "image": "./images/designers/waad-aloqaili.webp"
},
{
    "id": "yehya-al-bishri",
    "name": "Yahya ALBISHRI",
    "category": "COUTURE",
    "image": "./images/designers/yehya-al-bishri.webp"
},
]
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
                      src={designer.image} 
                      alt={designer.name}
                      />
                    {/* <div className="designer-image-placeholder">
                      {designer.name.split(' ').map(word => word[0]).join('')}
                    </div> */}
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
