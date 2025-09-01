import React, { useState } from 'react';
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="section-container">
          <div className="contact-content">
            {/* Left Column - Contact Information */}
            <div className="contact-info-column">
              <h1 className="contact-title">CONTACT US.</h1>
              <div className="contact-details">
                <div className="contact-item">
                  <a href="mailto:info@riyadhfashionweek.com" className="contact-email">
                    INFO@RIYADHFASHIONWEEK.COM
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-address">RIYADH, SAUDI ARABIA</span>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="contact-social-icons">
                <a href="http://www.instagram.com/riyadhfashionweek" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="social-icon" viewBox="0 0 64 64">
                    <path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"/>
                  </svg>
                </a>
                
                <a href="http://x.com/riyadhfw" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <svg className="social-icon" viewBox="0 0 64 64">
                    <g>
                      <path d="M34.426 29.9327L43.9189 18.5H41.6694L33.4267 28.4268L26.8432 18.5H19.25L29.2055 33.5111L19.25 45.5H21.4997L30.2042 35.0169L37.1568 45.5H44.75L34.426 29.9327ZM22.3102 20.2546H25.7656L41.6704 43.8252H38.2151L22.3102 20.2546Z"/>
                    </g>
                  </svg>
                </a>
                
                <a href="http://www.facebook.com/riyadhfashionweek" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="social-icon" viewBox="0 0 64 64">
                    <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"/>
                  </svg>
                </a>
                
                <a href="http://youtube.com/@riyadhfashionweek" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="social-icon" viewBox="0 0 64 64">
                    <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"/>
                  </svg>
                </a>
                
                <a href="https://www.tiktok.com/@riyadhfashionweek/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg className="social-icon" viewBox="0 0 64 64">
                    <path d="M37.9281 17C38.4298 21.2545 40.825 23.7941 45 24.0658V28.8451C42.5859 29.0794 40.4652 28.3016 38.0038 26.821V35.7423C38.0038 47.147 25.4788 50.7361 20.4233 42.5457C17.1856 37.3073 19.1642 28.1048 29.5496 27.73V32.781C28.7296 32.9058 27.9219 33.1002 27.1355 33.362C24.835 34.1398 23.5191 35.583 23.8883 38.1413C24.5889 43.033 33.6584 44.4856 32.901 34.9176V17H37.9091H37.9281Z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
           {/* Right Column - Contact Form */}
<div className="contact-form-column">
  <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="form-label">NAME <span className='form-label-required'>(REQUIRED)</span></label>
      <div className="name-fields">
        <div className="name-field">
          <label className="name-sub-label">FIRST NAME</label>
          <input
            type="text"
            name="firstName"
            className="form-input"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="name-field">
          <label className="name-sub-label">LAST NAME</label>
          <input
            type="text"
            name="lastName"
            className="form-input"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
    
    <div className="form-group">
      <label className="form-label">EMAIL <span className='form-label-required'>(REQUIRED)</span></label>
      <input
        type="email"
        name="email"
        className="form-input"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    
    <div className="form-group">
      <label className="form-label">MESSAGE <span className='form-label-required'>(REQUIRED)</span></label>
      <textarea
        name="message"
        className="form-textarea"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
    </div>
    
    <button type="submit" className="btn btn-contact">
      SEND
    </button>
  </form>
</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;