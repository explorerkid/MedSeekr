import React from 'react';
import { Link } from 'react-router-dom';

const ddash = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Doctor Dashboard</h1>
      <p>Manage your appointments, consult with patients, and monitor their health.</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="/Appointments" style={linkStyle}>View Appointments</Link>
        <br />
        <Link to="/virtual" style={linkStyle}>Virtual Consultations</Link>
        <br />
        <Link to="/patients" style={linkStyle}>Patient Records</Link>
      </div>
    </div>
  );
};

const linkStyle = {
  display: 'inline-block',
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  fontSize: '16px',
};

export default ddash;
