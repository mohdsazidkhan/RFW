import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Casting from './pages/Casting';
import Sponsorship from './pages/Sponsorship';
import Press from './pages/Press';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
import Designers from './pages/Designers';
import DesignerDetail from './pages/DesignerDetail';
import Livestream from './pages/Livestream';
import BrandRegistration from './pages/BrandRegistration';
import BrandRequests from './pages/BrandRequests';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/casting" element={<Casting />} /> */}
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/livestream" element={<Livestream />} />
              <Route path="/designers" element={<Designers />} />
              <Route path="/designer/:designerSlug" element={<DesignerDetail />} />
              <Route path="/brand-registration" element={<BrandRegistration />} />
              <Route path="/brand-requests" element={<BrandRequests />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
