import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import { translations } from '../translations';
import './App.css';
import Footer from './component/Foter/Footer';
import AiAdvisor from './component/Ai Advisor/AiAdvisor';
import Contact from './component/Contact/Contact';
import Services from './component/services /Services';

function App() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <Router>
      <div
        className={`min-h-screen transition-all duration-300 ${
          isRtl ? 'text-right' : 'text-left'
        }`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <Navbar lang={lang} setLang={setLang} t={t} isRtl={isRtl} />
        
        <Routes>
          <Route path="/" element={<Home t={t} isRtl={isRtl} />} />
          <Route path="/about" element={<About t={t} isRtl={isRtl} />} />
          <Route path="/services" element={<Services t={t} isRtl={isRtl} />} />
          <Route path="/contact" element={<Contact t={t} isRtl={isRtl} />} />
          <Route path="/AIAdvisor" element={<AiAdvisor t={t} isRtl={isRtl} />} /> 

        </Routes>
        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App;