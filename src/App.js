import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

const Home = () => (
  <div className="home">
    <h1>Welcome to Dinesh PhysioCare</h1>
    <p>Expert physiotherapy services to help you recover and stay healthy.</p>
    <div className="section">
      <h2>Why Choose Us?</h2>
      <p>We offer personalized treatment plans tailored to your specific needs, ensuring optimal recovery.</p>
      <ul>
        <li>✔ Experienced and certified physiotherapists</li>
        <li>✔ State-of-the-art equipment</li>
        <li>✔ Holistic and patient-centered approach</li>
        <li>✔ Flexible appointment scheduling</li>
      </ul>
    </div>
    <div className="section">
      <h2>Our Specialties</h2>
      <p>We specialize in treating sports injuries, chronic pain, post-surgical rehabilitation, and much more.</p>
    </div>
    <button className="btn">Book an Appointment</button>
  </div>
);

const Services = () => (
  <div className="page">
    <h1>Our Services</h1>
    <ul>
      <li>✔ Pain Management</li>
      <li>✔ Rehabilitation Therapy</li>
      <li>✔ Sports Injury Treatment</li>
      <li>✔ Posture Correction</li>
    </ul>
  </div>
);

const About = () => (
  <div className="page">
    <h1>About Us</h1>
    <p>We are experienced physiotherapists dedicated to improving your health and mobility.</p>
  </div>
);

const Contact = () => (
  <div className="page">
    <h1>Contact Us</h1>
    <p>Email: contact@physiocare.com</p>
    <p>Phone: +91 75987 76906</p>
  </div>
);

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

