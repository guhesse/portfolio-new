import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import ProjectDetails from './ProjectDetails';
import ScriptCaptura from './scripts/scriptCaptura'; // Importe o componente

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/storyboarder" element={<ScriptCaptura />} /> {/* Adicione a nova rota */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;