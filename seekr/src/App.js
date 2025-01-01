import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';  // Assuming Home.js is in the pages folder
import Login from './pages/Login';
import Signup from './pages/Signup';
import PDash from './pages/pdash';  // Assuming pdash.js is in the pages folder
import DDash from './pages/ddash';  // Assuming ddash.js is in the pages folder
import About from './pages/About';
import Booking from './pages/Booking';
import Checking from './pages/Checking';
import Virtual from './pages/Virtual';

// Protected Route for authentication checking
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to login if no token is found
    window.location.href = '/login';
    return null;
  }
  return children;
};

const App = () => {
  useEffect(() => {
    // Optional: Check token or perform any setup actions when App loads
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        
        {/* Protected routes */}
        <Route path="/Booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
        <Route path="/Checking" element={<ProtectedRoute><Checking /></ProtectedRoute>} />
        <Route path="/virtual" element={<ProtectedRoute><Virtual /></ProtectedRoute>} />

        {/* Patient and Doctor Dashboards */}
        <Route path="/pdash" element={<ProtectedRoute><PDash /></ProtectedRoute>} />
        <Route path="/ddash" element={<ProtectedRoute><DDash /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
