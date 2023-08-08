import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Header/>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
