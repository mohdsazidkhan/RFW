import React, { useState } from 'react';

const Calendar = () => {
  const [activeDay, setActiveDay] = useState(0);

  const calendarData = [
    {
      date: "OCTOBER 17",
      events: [
        {
          designer: "ADNAN AKBAR",
          time: "17:00",
          category: "COUTURE",
          hasLearnMore: true
        },
        {
          designer: "DAR ALHANOUF",
          time: "18:00",
          category: "",
          hasLearnMore: false
        },
        {
          designer: "TIMA ABID",
          time: "19:00",
          category: "",
          hasLearnMore: false
        },
        {
          designer: "HONAYDA",
          time: "20:00",
          category: "",
          hasLearnMore: false
        }
      ]
    },
    {
      date: "OCTOBER 18",
      events: [
        {
          designer: "DESIGNER 1",
          time: "17:00",
          category: "READY-TO-WEAR",
          hasLearnMore: true
        },
        {
          designer: "DESIGNER 2",
          time: "18:00",
          category: "",
          hasLearnMore: false
        },
        {
          designer: "DESIGNER 3",
          time: "19:00",
          category: "",
          hasLearnMore: false
        }
      ]
    },
    {
      date: "OCTOBER 19",
      events: [
        {
          designer: "DESIGNER 4",
          time: "17:00",
          category: "COUTURE",
          hasLearnMore: true
        },
        {
          designer: "DESIGNER 5",
          time: "18:00",
          category: "",
          hasLearnMore: false
        }
      ]
    },
    {
      date: "OCTOBER 20",
      events: [
        {
          designer: "DESIGNER 6",
          time: "17:00",
          category: "READY-TO-WEAR",
          hasLearnMore: true
        },
        {
          designer: "DESIGNER 7",
          time: "18:00",
          category: "",
          hasLearnMore: false
        }
      ]
    },
    {
      date: "OCTOBER 21",
      events: [
        {
          designer: "DESIGNER 8",
          time: "17:00",
          category: "COUTURE",
          hasLearnMore: true
        },
        {
          designer: "DESIGNER 9",
          time: "18:00",
          category: "",
          hasLearnMore: false
        }
      ]
    }
  ];

  return (
    <div className="calendar-page">
      {/* Hero Section */}
      <section className="calendar-hero-section">
        <div className="calendar-hero-background">
          <div className="calendar-hero-image"></div>
          <div className="calendar-hero-overlay"></div>
        </div>
        <div className="calendar-hero-content">
          <div className="rfw-logo-hero">RFW</div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="calendar-main-section">
        <div className="section-container">
          <div className="calendar-content">
            <h1 className="calendar-title">RFW CALENDAR</h1>
            <p className="calendar-date-range">OCTOBER 17 - OCTOBER 21</p>
            
            {/* Day Tabs */}
            <div className="calendar-tabs">
              {calendarData.map((day, index) => (
                <button
                  key={index}
                  className={`calendar-tab ${index === activeDay ? 'active' : ''}`}
                  onClick={() => setActiveDay(index)}
                >
                  {day.date}
                </button>
              ))}
            </div>
            
            {/* Events List */}
            <div className="events-list">
              {calendarData[activeDay].events.map((event, index) => (
                <div key={index} className="event-item">
                  <div className="event-content">
                    <div className="event-designer">{event.designer}</div>
                    <div className="event-time">TIME: {event.time}</div>
                    {event.category && (
                      <div className="event-category">{event.category}</div>
                    )}
                  </div>
                  
                  <div className="event-actions">
                    {event.hasLearnMore ? (
                      <button className="btn btn-learn-more">LEARN MORE</button>
                    ) : (
                      <div className="expand-icon">+</div>
                    )}
                  </div>
                  
                  {index < calendarData[activeDay].events.length - 1 && (
                    <div className="event-divider"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;

