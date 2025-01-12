import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ProjectDetails from './components/pages/ProjectDetails';
import AnimatedCursor from 'react-animated-cursor';
import './App.css';

function App() {

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkIfTouchDevice();
    window.addEventListener('resize', checkIfTouchDevice);

    return () => {
      window.removeEventListener('resize', checkIfTouchDevice);
    };
  }, []);

  return (
    <div className="app-container">
      <Router>
        {!isTouchDevice && (
          <AnimatedCursor
            innerSize={5}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            color='0, 0, 0'
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: ' #e0e0e0',
              mixBlendMode: 'exclusion'
            }}
            outerStyle={{
              border: '3px solid #e0e0e0',
              mixBlendMode: 'exclusion'
            }}
            clickables={[
              'a',
              '.MuiChip-root',
              '.MuiModal-root',
              '.MuiIconButton-root',
              '.MuiProjectDetails-root',
              '.MuiProjectMedia-root',
              '.MuiCardActionArea-root',
              '.MuiCardMedia-root',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              {
                target: '.custom',
                options: {
                  innerSize: 12,
                  outerSize: 12,
                  color: '255, 255, 255',
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 5
                }
              }
            ]}
          />
        )}
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;