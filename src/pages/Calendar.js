import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { designers } from '../utils/data/calendar';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdAdd } from 'react-icons/md';
import '../styles/Calendar.css';

const Calendar = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedDesigner, setExpandedDesigner] = useState(null);
  const navigate = useNavigate();

  const toggleDay = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
    setExpandedDesigner(null); // Reset designer expansion when day changes
  };

  const toggleDesigner = (designerId) => {
    setExpandedDesigner(expandedDesigner === designerId ? null : designerId);
  };

  return (
    <div className="calendar-page">
      {/* Hero Section */}
      <section className="calendar-hero-section">
        <div className="calendar-hero-background">
          <div className="calendar-hero-image"></div>
          <div className="calendar-hero-overlay"></div>
        </div>
      </section>

      <div className="calendar-container">
        {/* Calendar Header */}
        <div className="calendar-header">
          <h1 className="calendar-title">RFW CALENDAR</h1>
          <p className="calendar-date-range">OCTOBER 17 - OCTOBER 21, 2025</p>
        </div>
        
        {/* Day Accordions */}
        <div className="calendar-accordions">
          {designers.map((day, dayIndex) => (
            <div key={dayIndex} className="day-accordion-item">
              <div className="day-accordion-header" onClick={() => toggleDay(dayIndex)}>
                <h2 className="day-accordion-title">{day.date}</h2>
                <div className="day-expand-icon">
                  {expandedDay === dayIndex ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                </div>
              </div>
              
              {expandedDay === dayIndex && (
                <div className="day-accordion-content">
                  <div className="designers-list">
                    {day.designers.map((designer, designerIndex) => (
                      <div key={designer.id} className="designer-item">
                        <div className="designer-header" onClick={() => toggleDesigner(designer.id)}>
                          <div className="designer-info">
                            <h3 className="designer-name">{designer.name}</h3>
                            <div className="designer-time">TIME: {designer.time}</div>
                            <div className="designer-category">{designer.desc}</div>
                          </div>
                          <div className="designer-action">
                            {expandedDesigner === designer.id ? (
                              <button 
                                className="btn-learn-more"
                                onClick={() => navigate(`/designer/${designer.id}`)}
                              >
                                LEARN MORE
                              </button>
                            ) : (
                              <div className="expand-icon">
                                <MdAdd />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

