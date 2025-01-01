import React from 'react';
import { Link } from 'react-router-dom';

const pdash = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Patient Dashboard</h1>
      <p>Here you can manage your healthcare services efficiently.</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="/Booking" style={linkStyle}>Book an Appointment</Link>
        <br />
        <Link to="/Checking" style={linkStyle}>Symptom Checker</Link>
        <br />
        <Link to="/virtual" style={linkStyle}>Virtual Consultation</Link>
      </div>
    </div>
  );
};

const linkStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '16px',
};

export default pdash;
