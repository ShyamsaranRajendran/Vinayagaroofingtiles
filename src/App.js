import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import{Hero} from './components/Hero.jsx';
import{Products} from './components/Products.jsx';
import{Services} from './components/Services.jsx';
import{AboutUs} from './components/About/AboutUs.jsx';
import{ProjectGallery} from './components/Gallery/ProjectGallery.jsx';
import{FAQSection} from './components/FAQ/FAQSection.jsx';
import{BlogSection} from './components/Blog/BlogSection.jsx';
import{Contact} from './components/Contact.jsx';
import{WhatsAppButton} from './components/WhatsAppButton.jsx';
import'./App.css';
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<ProjectGallery />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
