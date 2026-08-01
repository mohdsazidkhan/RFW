import React, { useState, useEffect } from 'react';
import '../styles/BrandRequests.css';

const BrandRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || '';
      const response = await fetch(`${apiUrl}/api/get_brands.php`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (data.status === 'success') {
        setRequests(data.data);
      } else {
        throw new Error(data.message || 'Error fetching data');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedRequest(null);
  };

  const formatUrl = (url) => {
    if (!url) return '';
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  if (loading) {
    return <div className="brand-requests-page"><div className="brand-requests-container">Loading...</div></div>;
  }

  if (error) {
    return <div className="brand-requests-page"><div className="brand-requests-container">Error: {error}</div></div>;
  }

  return (
    <div className="brand-requests-page">
      <section className="calendar-hero-section">
        <div className="calendar-hero-background">
          <div className="calendar-hero-image"></div>
          <div className="calendar-hero-overlay">
            <h1 className="brand-reg-hero-title">BRAND REGISTRATION REQUESTS</h1>
          </div>
        </div>
      </section>

      <section className="brand-requests-section">
        <div className="brand-requests-container">
          <div className="table-responsive">
            <table className="brand-requests-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Brand Name (En)</th>
                  <th>Designer Name (En)</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests && requests.length > 0 ? (
                  requests.map((req) => (
                    <tr key={req.id}>
                      <td>{req.id}</td>
                      <td>{req.brandNameEn}</td>
                      <td>{req.designerNameEn}</td>
                      <td>{req.email}</td>
                      <td>{req.mobile}</td>
                      <td>{new Date(req.created_at).toLocaleDateString()}</td>
                      <td>
                        <button className="btn-view" onClick={() => setSelectedRequest(req)}>
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">No requests found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal for Details */}
      {selectedRequest && (
        <div className="brand-modal-overlay" onClick={closeModal}>
          <div className="brand-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="brand-modal-close" onClick={closeModal}>&times;</button>
            <h2 className="brand-modal-title">
              Registration Details (ID: {selectedRequest.id}) — {selectedRequest.brandNameEn}
            </h2>
            <div className="brand-modal-body">

              {/* ── SECTION 1: ELIGIBILITY ── */}
              <div className="brand-modal-section-label">ELIGIBILITY</div>
              <div className="brand-modal-grid">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Prior Participation هل شاركت سابقاً؟</span>
                  <span className="brand-modal-val">{selectedRequest.priorParticipation || '—'}</span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Commercial Registration هل لديك سجل تجاري؟</span>
                  <span className="brand-modal-val">{selectedRequest.commercialRegistration || '—'}</span>
                </div>
              </div>

              {/* ── SECTION 2: DOCUMENTS & UPLOADS ── */}
              <div className="brand-modal-section-label">DOCUMENTS &amp; UPLOADS</div>
              <div className="brand-modal-grid">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Commercial Registration Copy نسخة السجل التجاري</span>
                  <span className="brand-modal-val">
                    {selectedRequest.commercialRegistrationLink
                      ? <a href={formatUrl(selectedRequest.commercialRegistrationLink)} target="_blank" rel="noopener noreferrer">View File ↗</a>
                      : '—'}
                  </span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Logo Upload تحميل الشعار</span>
                  <span className="brand-modal-val">
                    {selectedRequest.logoLink
                      ? <a href={formatUrl(selectedRequest.logoLink)} target="_blank" rel="noopener noreferrer">View File ↗</a>
                      : '—'}
                  </span>
                </div>
              </div>

              {/* ── SECTION 2b: RUNWAY OR COLLECTION PRESENTATION ── */}
              <div className="brand-modal-section-label">RUNWAY OR COLLECTION PRESENTATION</div>
              <div className="brand-modal-grid brand-modal-grid--full">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Applying for / هل تتقدم بطلب للمشاركة في عرض أزياء أم لعرض تقديمي؟</span>
                  <span className="brand-modal-val">{selectedRequest.runwayOrPresentation || '—'}</span>
                </div>
              </div>

              {/* ── SECTION 3: STORE TYPE ── */}
              <div className="brand-modal-section-label">STORE TYPE</div>
              <div className="brand-modal-grid brand-modal-grid--full">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Type of Store نوع المتجر</span>
                  <span className="brand-modal-val">{selectedRequest.storeType || '—'}</span>
                </div>
              </div>

              {/* ── SECTION 4: BRAND & DESIGNER INFORMATION ── */}
              <div className="brand-modal-section-label">BRAND &amp; DESIGNER INFORMATION</div>
              <div className="brand-modal-grid">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Brand Name (English) اسم العلامة التجارية (إنجليزي)</span>
                  <span className="brand-modal-val">{selectedRequest.brandNameEn || '—'}</span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Brand Name (Arabic) اسم العلامة التجارية (عربي)</span>
                  <span className="brand-modal-val" dir="rtl">{selectedRequest.brandNameAr || '—'}</span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Designer Full Name (English) الاسم الكامل للمصمم (إنجليزي)</span>
                  <span className="brand-modal-val">{selectedRequest.designerNameEn || '—'}</span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Designer Full Name (Arabic) الاسم الكامل للمصمم (عربي)</span>
                  <span className="brand-modal-val" dir="rtl">{selectedRequest.designerNameAr || '—'}</span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Mobile Number رقم الجوال</span>
                  <span className="brand-modal-val">{selectedRequest.mobile || '—'}</span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Email Address البريد الإلكتروني</span>
                  <span className="brand-modal-val">{selectedRequest.email || '—'}</span>
                </div>
              </div>

              {/* ── SECTION 5: SOCIAL MEDIA ── */}
              <div className="brand-modal-section-label">SOCIAL MEDIA ACCOUNTS</div>
              <div className="brand-modal-grid">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">X (Twitter) Account حساب X</span>
                  <span className="brand-modal-val">
                    {selectedRequest.hasX || '—'}
                    {selectedRequest.xLink && <> — <a href={formatUrl(selectedRequest.xLink)} target="_blank" rel="noopener noreferrer">View Link ↗</a></>}
                  </span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Instagram Account حساب إنستغرام</span>
                  <span className="brand-modal-val">
                    {selectedRequest.hasInstagram || '—'}
                    {selectedRequest.instagramLink && <> — <a href={formatUrl(selectedRequest.instagramLink)} target="_blank" rel="noopener noreferrer">View Link ↗</a></>}
                  </span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">TikTok Account حساب تيك توك</span>
                  <span className="brand-modal-val">
                    {selectedRequest.hasTikTok || '—'}
                    {selectedRequest.tikTokLink && <> — <a href={formatUrl(selectedRequest.tikTokLink)} target="_blank" rel="noopener noreferrer">View Link ↗</a></>}
                  </span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">YouTube Account حساب يوتيوب</span>
                  <span className="brand-modal-val">
                    {selectedRequest.hasYouTube || '—'}
                    {selectedRequest.youTubeLink && <> — <a href={formatUrl(selectedRequest.youTubeLink)} target="_blank" rel="noopener noreferrer">View Link ↗</a></>}
                  </span>
                </div>
              </div>

              {/* ── SECTION 6: PROFILES ── */}
              <div className="brand-modal-section-label">PROFILES</div>
              <div className="brand-modal-grid">
                <div className="brand-modal-field brand-modal-field--full">
                  <span className="brand-modal-key">Designer Profile (English) الملف الشخصي للمصمم (إنجليزي)</span>
                  <span className="brand-modal-val brand-modal-val--block">{selectedRequest.designerProfileEn || '—'}</span>
                </div>
                <div className="brand-modal-field brand-modal-field--full">
                  <span className="brand-modal-key">Designer Profile (Arabic) الملف الشخصي للمصمم (عربي)</span>
                  <span className="brand-modal-val brand-modal-val--block" dir="rtl">{selectedRequest.designerProfileAr || '—'}</span>
                </div>
                <div className="brand-modal-field brand-modal-field--full">
                  <span className="brand-modal-key">Brand Profile (English) الملف التعريفي للعلامة التجارية (إنجليزي)</span>
                  <span className="brand-modal-val brand-modal-val--block">{selectedRequest.brandProfileEn || '—'}</span>
                </div>
                <div className="brand-modal-field brand-modal-field--full">
                  <span className="brand-modal-key">Brand Profile (Arabic) الملف التعريفي للعلامة التجارية (عربي)</span>
                  <span className="brand-modal-val brand-modal-val--block" dir="rtl">{selectedRequest.brandProfileAr || '—'}</span>
                </div>
              </div>

              {/* ── SECTION 7: BRAND DETAILS ── */}
              <div className="brand-modal-section-label">BRAND DETAILS</div>
              <div className="brand-modal-grid">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Date of Establishment تاريخ التأسيس</span>
                  <span className="brand-modal-val">{selectedRequest.dateOfEstablishment || '—'}</span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Brand Logo شعار العلامة التجارية</span>
                  <span className="brand-modal-val">
                    {selectedRequest.brandLogoLink
                      ? <a href={formatUrl(selectedRequest.brandLogoLink)} target="_blank" rel="noopener noreferrer">View File ↗</a>
                      : '—'}
                  </span>
                </div>
                <div className="brand-modal-field brand-modal-field--full">
                  <span className="brand-modal-key">Brand Category تصنيف العلامة التجارية</span>
                  <span className="brand-modal-val">{selectedRequest.brandCategory || '—'}</span>
                </div>
                <div className="brand-modal-field brand-modal-field--full">
                  <span className="brand-modal-key">Product Price Range (SAR) نطاق أسعار المنتجات</span>
                  <span className="brand-modal-val">{selectedRequest.priceRange ? `${selectedRequest.priceRange} SAR` : '—'}</span>
                </div>
              </div>

              {/* ── SECTION 8: CREATIVE MATERIALS ── */}
              <div className="brand-modal-section-label">CREATIVE MATERIALS</div>
              <div className="brand-modal-grid">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Moodboard تحميل المود بورد</span>
                  <span className="brand-modal-val">
                    {selectedRequest.moodboardLink
                      ? <a href={formatUrl(selectedRequest.moodboardLink)} target="_blank" rel="noopener noreferrer">View File ↗</a>
                      : '—'}
                  </span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Sketchbook (Min. 8 Looks) تحميل دفتر الرسومات</span>
                  <span className="brand-modal-val">
                    {selectedRequest.sketchbookLink
                      ? <a href={formatUrl(selectedRequest.sketchbookLink)} target="_blank" rel="noopener noreferrer">View File ↗</a>
                      : '—'}
                  </span>
                </div>
              </div>

              {/* ── SECTION 9: DECLARATION ── */}
              <div className="brand-modal-section-label">DECLARATION &amp; SUBMISSION</div>
              <div className="brand-modal-grid brand-modal-grid--full">
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Agreement to Terms &amp; Conditions الموافقة على الشروط والأحكام</span>
                  <span className={`brand-modal-val brand-modal-val--badge ${selectedRequest.agreesToTerms === '1' || selectedRequest.agreesToTerms === true ? 'brand-modal-val--yes' : 'brand-modal-val--no'}`}>
                    {selectedRequest.agreesToTerms === '1' || selectedRequest.agreesToTerms === true ? '✓ Agreed' : '✗ Not agreed'}
                  </span>
                </div>
                <div className="brand-modal-field">
                  <span className="brand-modal-key">Submitted At</span>
                  <span className="brand-modal-val">{selectedRequest.created_at ? new Date(selectedRequest.created_at).toLocaleString() : '—'}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandRequests;
