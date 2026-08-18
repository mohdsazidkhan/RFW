import React, { useState } from 'react';
import '../styles/BrandRegistration.css';

const BrandRegistration = () => {

  const [formData, setFormData] = useState({
    // Section 1: Eligibility
    priorParticipation: '',
    commercialRegistration: '',
    // Section 2: Documents & Uploads
    commercialRegistrationLink: '',
    logoLink: '',
    // Section 2b: Runway or Collection Presentation
    runwayOrPresentation: '',
    // Section 3: Store Type
    storeType: '',
    // Section 4: Brand & Designer Info
    brandNameEn: '',
    brandNameAr: '',
    designerNameEn: '',
    designerNameAr: '',
    mobile: '',
    email: '',
    // Section 5: Social Media
    hasX: '',
    xLink: '',
    hasInstagram: '',
    instagramLink: '',
    hasTikTok: '',
    tikTokLink: '',
    hasYouTube: '',
    youTubeLink: '',
    // Section 6: Profiles
    designerProfileEn: '',
    designerProfileAr: '',
    brandProfileEn: '',
    brandProfileAr: '',
    // Section 7: Brand Details
    dateOfEstablishment: '',
    brandLogoLink: '',
    brandCategory: '',
    priceRange: '',
    // Section 8: Creative Materials
    moodboardLink: '',
    sketchbookLink: '',
    // Section 9: Declaration
    agreesToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreesToTerms) {
      alert('Please agree to the Terms & Conditions before submitting.');
      return;
    }
    try {
      const apiUrl = process.env.REACT_APP_API_URL || '';
      const response = await fetch(`${apiUrl}/api/save_brand.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your registration. Please try again later.');
    }
  };

  if (submitted) {
    return (
      <div className="brand-reg-page">
        <section className="brand-reg-section">
          <div className="brand-reg-container">
            <div className="brand-reg-success">
              <h1 className="brand-reg-success-title">THANK YOU</h1>
              <p className="brand-reg-success-text">
                Your registration has been received. We will be in touch shortly.
              </p>
              <p className="brand-reg-success-text">
                If you have any trouble, email{' '}
                <a href="mailto:info@riyadhfashionweek.com">info@riyadhfashionweek.com</a> with
                subject line <em>New Registration Submission</em>.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="brand-reg-page">
      {/* Hero Section */}
      <section className="calendar-hero-section">
        <div className="calendar-hero-background">
          <div className="calendar-hero-image"></div>
          <div className="calendar-hero-overlay">
            <h1 className="brand-reg-hero-title">BRAND REGISTRATION</h1>
          </div>
        </div>
      </section>

      {/* What Participation Includes */}
      {/* <section className="brand-reg-includes-section">
        <div className="brand-reg-container">
          <div className="brand-reg-includes-text">
            <h2 className="brand-reg-section-heading">WHAT PARTICIPATION INCLUDES</h2>
            <ol className="brand-reg-includes-list">
              <li>Venue</li>
              <li>Hair &amp; Makeup</li>
              <li>Photo &amp; video from the show</li>
              <li>Social media &amp; press coverage</li>
              <li>Designs are kept away from political matters</li>
            </ol>
          </div>
        </div>
      </section> */}

      {/* Form */}
      <section className="brand-reg-form-section">
        <div className="brand-reg-form-container">
          <form className="brand-reg-form" onSubmit={handleSubmit} noValidate>

            {/* ── SECTION 1: ELIGIBILITY ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">ELIGIBILITY</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-label">
                  PRIOR PARTICIPATION <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> هل شاركت سابقاً؟</span>
                </label>
                <p className="brand-reg-hint">
                  Did you participate in Riyadh, the Red Sea, Paris, or elsewhere?
                </p>
                <div className="brand-reg-radio-group">
                  {['Yes / نعم', 'No / لا'].map((opt) => (
                    <label key={opt} className="brand-reg-radio-label">
                      <input
                        type="radio"
                        name="priorParticipation"
                        value={opt}
                        checked={formData.priorParticipation === opt}
                        onChange={handleChange}
                        required
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label">
                  COMMERCIAL REGISTRATION <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> هل لديك سجل تجاري؟</span>
                </label>
                <div className="brand-reg-radio-group">
                  {['Yes / نعم', 'No / لا'].map((opt) => (
                    <label key={opt} className="brand-reg-radio-label">
                      <input
                        type="radio"
                        name="commercialRegistration"
                        value={opt}
                        checked={formData.commercialRegistration === opt}
                        onChange={handleChange}
                        required
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SECTION 2: DOCUMENTS & UPLOADS ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">DOCUMENTS &amp; UPLOADS</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="commercialRegistrationLink">
                  COMMERCIAL REGISTRATION COPY <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> نسخة السجل التجاري</span>
                </label>
                <p className="brand-reg-hint">Add a shareable file link (Google Drive, Dropbox, etc.)</p>
                <input
                  id="commercialRegistrationLink"
                  type="url"
                  name="commercialRegistrationLink"
                  className="brand-reg-input"
                  placeholder="https://"
                  value={formData.commercialRegistrationLink}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="logoLink">
                  LOGO UPLOAD <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> تحميل الشعار</span>
                </label>
                <p className="brand-reg-hint">Add a shareable file link</p>
                <input
                  id="logoLink"
                  type="url"
                  name="logoLink"
                  className="brand-reg-input"
                  placeholder="https://"
                  value={formData.logoLink}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* ── SECTION 2b: RUNWAY OR COLLECTION PRESENTATION ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">PREFERRED PARTICIPATION FORMAT</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="runwayOrPresentation">
                  Preferred Participation Format <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> صيغة المشاركة المفضلة</span>
                </label>
                <select
                  id="runwayOrPresentation"
                  name="runwayOrPresentation"
                  className="brand-reg-input brand-reg-select"
                  value={formData.runwayOrPresentation}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Runway">Runway</option>
                  <option value="Collection Presentation">Collection Presentation</option>
                  <option value="Showroom">Showroom</option>
                </select>
              </div>
            </div>

            {/* ── SECTION 3: STORE TYPE ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">STORE TYPE</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-label">
                  TYPE OF STORE <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> نوع المتجر</span>
                </label>
                <div className="brand-reg-radio-group brand-reg-radio-group--col">
                  {[
                    'Online / متجر إلكتروني',
                    'Brick and Mortar / محلات التجزئة',
                    'Both / كلاهما',
                    'Neither / ولا أي منهما',
                  ].map((opt) => (
                    <label key={opt} className="brand-reg-radio-label">
                      <input
                        type="radio"
                        name="storeType"
                        value={opt}
                        checked={formData.storeType === opt}
                        onChange={handleChange}
                        required
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SECTION 4: BRAND & DESIGNER INFORMATION ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">BRAND &amp; DESIGNER INFORMATION</h2>

              <div className="brand-reg-two-col">
                <div className="brand-reg-field">
                  <label className="brand-reg-label" htmlFor="brandNameEn">
                    BRAND NAME (ENGLISH) <span className="brand-reg-required">*</span>
                    <span className="brand-reg-label-ar"> اسم العلامة التجارية <span className="brand-reg-label-ar-en">(إنجليزي)</span></span>
                  </label>
                  <input
                    id="brandNameEn"
                    type="text"
                    name="brandNameEn"
                    className="brand-reg-input"
                    value={formData.brandNameEn}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="brand-reg-field">
                  <label className="brand-reg-label" htmlFor="brandNameAr">
                    BRAND NAME (ARABIC) <span className="brand-reg-required">*</span>
                    <span className="brand-reg-label-ar"> اسم العلامة التجارية (عربي)</span>
                  </label>
                  <input
                    id="brandNameAr"
                    type="text"
                    name="brandNameAr"
                    className="brand-reg-input"
                    dir="rtl"
                    value={formData.brandNameAr}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="brand-reg-two-col">
                <div className="brand-reg-field">
                  <label className="brand-reg-label" htmlFor="designerNameEn">
                    DESIGNER FULL NAME (ENGLISH) <span className="brand-reg-required">*</span>
                    <span className="brand-reg-label-ar"> الاسم الكامل للمصمم <span className="brand-reg-label-ar-en">(إنجليزي)</span></span>
                  </label>
                  <input
                    id="designerNameEn"
                    type="text"
                    name="designerNameEn"
                    className="brand-reg-input"
                    value={formData.designerNameEn}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="brand-reg-field">
                  <label className="brand-reg-label" htmlFor="designerNameAr">
                    DESIGNER FULL NAME (ARABIC) <span className="brand-reg-required">*</span>
                    <span className="brand-reg-label-ar"> الاسم الكامل للمصمم (عربي)</span>
                  </label>
                  <input
                    id="designerNameAr"
                    type="text"
                    name="designerNameAr"
                    className="brand-reg-input"
                    dir="rtl"
                    value={formData.designerNameAr}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="brand-reg-two-col">
                <div className="brand-reg-field">
                  <label className="brand-reg-label" htmlFor="mobile">
                    MOBILE NUMBER <span className="brand-reg-required">*</span>
                    <span className="brand-reg-label-ar"> رقم الجوال</span>
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    className="brand-reg-input"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="brand-reg-field">
                  <label className="brand-reg-label" htmlFor="email">
                    EMAIL ADDRESS <span className="brand-reg-required">*</span>
                    <span className="brand-reg-label-ar"> البريد الإلكتروني</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="brand-reg-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* ── SECTION 5: SOCIAL MEDIA ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">SOCIAL MEDIA ACCOUNTS</h2>

              {[
                { platform: 'X (TWITTER)', nameHas: 'hasX', nameLink: 'xLink', ar: 'حساب X', arLink: 'رابط حساب X' },
                { platform: 'INSTAGRAM', nameHas: 'hasInstagram', nameLink: 'instagramLink', ar: 'حساب إنستغرام', arLink: 'رابط حساب إنستغرام' },
                { platform: 'TIKTOK', nameHas: 'hasTikTok', nameLink: 'tikTokLink', ar: 'حساب تيك توك', arLink: 'رابط حساب تيك توك' },
                { platform: 'YOUTUBE', nameHas: 'hasYouTube', nameLink: 'youTubeLink', ar: 'حساب يوتيوب', arLink: 'رابط حساب يوتيوب' },
              ].map(({ platform, nameHas, nameLink, ar, arLink }) => (
                <div key={platform} className="brand-reg-social-block">
                  <div className="brand-reg-field">
                    <label className="brand-reg-label">
                      {platform} ACCOUNT <span className="brand-reg-required">*</span>
                      <span className="brand-reg-label-ar"> {ar}</span>
                    </label>
                    <div className="brand-reg-radio-group">
                      {['Yes / نعم', 'No / لا'].map((opt) => (
                        <label key={opt} className="brand-reg-radio-label">
                          <input
                            type="radio"
                            name={nameHas}
                            value={opt}
                            checked={formData[nameHas] === opt}
                            onChange={handleChange}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="brand-reg-field">
                    <label className="brand-reg-label" htmlFor={nameLink}>
                      {platform} ACCOUNT LINK
                      <span className="brand-reg-label-ar"> {arLink}</span>
                    </label>
                    <p className="brand-reg-hint">If yes, paste the full URL</p>
                    <input
                      id={nameLink}
                      type="url"
                      name={nameLink}
                      className="brand-reg-input"
                      placeholder="https://"
                      value={formData[nameLink]}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── SECTION 6: PROFILES ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">PROFILES</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="designerProfileEn">
                  DESIGNER PROFILE (ENGLISH) <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> الملف الشخصي للمصمم (إنجليزي)</span>
                </label>
                <textarea
                  id="designerProfileEn"
                  name="designerProfileEn"
                  className="brand-reg-textarea"
                  rows="5"
                  value={formData.designerProfileEn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="designerProfileAr">
                  DESIGNER PROFILE (ARABIC) <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> الملف الشخصي للمصمم (عربي)</span>
                </label>
                <textarea
                  id="designerProfileAr"
                  name="designerProfileAr"
                  className="brand-reg-textarea"
                  rows="5"
                  dir="rtl"
                  value={formData.designerProfileAr}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="brandProfileEn">
                  BRAND PROFILE (ENGLISH) <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> الملف التعريفي للعلامة التجارية (إنجليزي)</span>
                </label>
                <textarea
                  id="brandProfileEn"
                  name="brandProfileEn"
                  className="brand-reg-textarea"
                  rows="5"
                  value={formData.brandProfileEn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="brandProfileAr">
                  BRAND PROFILE (ARABIC) <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> الملف التعريفي للعلامة التجارية (عربي)</span>
                </label>
                <textarea
                  id="brandProfileAr"
                  name="brandProfileAr"
                  className="brand-reg-textarea"
                  rows="5"
                  dir="rtl"
                  value={formData.brandProfileAr}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* ── SECTION 7: BRAND DETAILS ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">BRAND DETAILS</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="dateOfEstablishment">
                  DATE OF ESTABLISHMENT <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> تاريخ التأسيس</span>
                </label>
                <input
                  id="dateOfEstablishment"
                  type="date"
                  name="dateOfEstablishment"
                  className="brand-reg-input brand-reg-input--date"
                  value={formData.dateOfEstablishment}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="brandLogoLink">
                  BRAND LOGO <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> شعار العلامة التجارية</span>
                </label>
                <p className="brand-reg-hint">Add a shareable file link</p>
                <input
                  id="brandLogoLink"
                  type="url"
                  name="brandLogoLink"
                  className="brand-reg-input"
                  placeholder="https://"
                  value={formData.brandLogoLink}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label">
                  BRAND CATEGORY <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> تصنيف العلامة التجارية</span>
                </label>
                <p className="brand-reg-hint">Select one:</p>
                <div className="brand-reg-radio-group brand-reg-radio-group--col">
                  {[
                    'STREETWEAR (MEN)',
                    'STREETWEAR (WOMEN)',
                    'ACCESSORIES',
                    'JEWELRY',
                    'READY TO WEAR (MEN)',
                    'READY TO WEAR (WOMEN)',
                    'HAUTE COUTURE',
                  ].map((opt) => (
                    <label key={opt} className="brand-reg-radio-label">
                      <input
                        type="radio"
                        name="brandCategory"
                        value={opt}
                        checked={formData.brandCategory === opt}
                        onChange={handleChange}
                        required
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label">
                  PRODUCT PRICE RANGE (Average Unit Price) <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> نطاق أسعار المنتجات</span>
                </label>
                <p className="brand-reg-hint">Select one:</p>
                <div className="brand-reg-radio-group brand-reg-radio-group--col">
                  {['100 – 1,000', '1,001 – 5,000', '10,000 – 50,000', '50,000 and above'].map((opt) => (
                    <label key={opt} className="brand-reg-radio-label">
                      <input
                        type="radio"
                        name="priceRange"
                        value={opt}
                        checked={formData.priceRange === opt}
                        onChange={handleChange}
                        required
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SECTION 8: CREATIVE MATERIALS ── */}
            <div className="brand-reg-form-section-block">
              <h2 className="brand-reg-form-section-title">CREATIVE MATERIALS</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="moodboardLink">
                  MOODBOARD <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> تحميل المود بورد</span>
                </label>
                <p className="brand-reg-hint">Add a shareable file link</p>
                <input
                  id="moodboardLink"
                  type="url"
                  name="moodboardLink"
                  className="brand-reg-input"
                  placeholder="https://"
                  value={formData.moodboardLink}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="brand-reg-field">
                <label className="brand-reg-label" htmlFor="sketchbookLink">
                  SKETCHBOOK (MIN. 8 LOOKS) <span className="brand-reg-required">*</span>
                  <span className="brand-reg-label-ar"> تحميل دفتر الرسومات</span>
                </label>
                <p className="brand-reg-hint">Add a shareable file link — minimum 8 looks required</p>
                <input
                  id="sketchbookLink"
                  type="url"
                  name="sketchbookLink"
                  className="brand-reg-input"
                  placeholder="https://"
                  value={formData.sketchbookLink}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* ── SECTION 9: DECLARATION & SUBMISSION ── */}
            <div className="brand-reg-form-section-block">

              <div className="brand-reg-includes-terms">
                <h3 className="brand-reg-section-heading">TERMS &amp; CONDITIONS</h3>
                <ol className="brand-reg-terms-list">
                  <li>
                    <strong className="brand-reg-term-title">Originality of Collection</strong>
                    <p className="brand-reg-term-desc">The Designer shall provide a minimum of 25 looks that have not been previously presented at any fashion week or fashion-related event.</p>
                  </li>
                  <li>
                    <strong className="brand-reg-term-title">Brand Eligibility</strong>
                    <p className="brand-reg-term-desc">The Designer's brand must be legally registered with a valid commercial registration, and must have maintained active market presence for a minimum of two (2) years.</p>
                  </li>
                  <li>
                    <strong className="brand-reg-term-title">Accessories and Jewelry</strong>
                    <p className="brand-reg-term-desc">It is the sole responsibility of the Designer to supply all jewelry, accessories, and related items necessary to complement and complete the presented looks.</p>
                  </li>
                  <li>
                    <strong className="brand-reg-term-title">Compliance with 'Abde'a' Terms</strong>
                    <p className="brand-reg-term-desc">The Designer agrees to abide by the applicable terms set forth by 'Abde'a':{' '}
                      <a
                        href="https://abdea.moc.gov.sa/permits/fashion/fashion-show-permit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://abdea.moc.gov.sa/permits/fashion/fashion-show-permit
                      </a>
                    </p>
                  </li>
                  <li>
                    <strong className="brand-reg-term-title">Submission of Collection Materials</strong>
                    <p className="brand-reg-term-desc">The Designer shall submit a collection mood board illustrating the overarching creative concept.</p>
                  </li>
                  <li>
                    <strong className="brand-reg-term-title">Sketch Requirements</strong>
                    <p className="brand-reg-term-desc">The Designer shall provide a minimum of 8 looks sketches, accurately representing the designs to be showcased.</p>
                  </li>
                </ol>
              </div>
              <h2 className="brand-reg-form-section-title">DECLARATION &amp; SUBMISSION</h2>

              <div className="brand-reg-field">
                <label className="brand-reg-checkbox-label">
                  <input
                    type="checkbox"
                    name="agreesToTerms"
                    checked={formData.agreesToTerms}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    AGREEMENT TO TERMS &amp; CONDITIONS <span className="brand-reg-required">*</span>
                    <span className="brand-reg-label-ar"> الموافقة على الشروط والأحكام</span>
                    <br />
                    <span className="brand-reg-checkbox-desc">
                      Yes, I acknowledge and agree to all terms and conditions above / نعم، أقر وأوافق على جميع الشروط والأحكام أعلاه
                    </span>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-brand-reg">
                SUBMIT REGISTRATION
              </button>

              <p className="brand-reg-fallback">
                <strong>Submission Issues?</strong> If you have any trouble submitting, email your
                registration to{' '}
                <a href="mailto:info@riyadhfashionweek.com">info@riyadhfashionweek.com</a> with
                subject line <em>New Registration Submission</em>. Include responses to all fields
                listed in this form.
              </p>

              <p className="brand-reg-copyright">
                RIYADH, SAUDI ARABIA <span className="brand-reg-copyright-sep">|</span>{' '}
                <a href="mailto:info@riyadhfashionweek.com">info@riyadhfashionweek.com</a>{' '}
                <span className="brand-reg-copyright-sep">|</span> &copy; 2026 RIYADH FASHION WEEK.
                All Rights Reserved.
              </p>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
};

export default BrandRegistration;
