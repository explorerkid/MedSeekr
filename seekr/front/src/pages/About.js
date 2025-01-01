// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of the application.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default About;
