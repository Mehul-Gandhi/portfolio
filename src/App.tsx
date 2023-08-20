import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";
import Notes from "./Notes";

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route index element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
