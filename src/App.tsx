import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import Resume from "./Resume"
function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route index element={<About />} />
      <Route path="/resume" element={<Resume />} />

    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
