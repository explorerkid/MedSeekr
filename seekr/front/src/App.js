import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PDash from './pages/pdash';
import DDash from './pages/ddash';
import Virtual from './pages/Virtual';
import Booking from './pages/Booking';
import Checking from './pages/Checking';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pdash" element={<PDash />} />
                <Route path="/ddash" element={<DDash />} />
                <Route path="/virtual" element={<Virtual />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/checking" element={<Checking />} />
            </Routes>
        </Router>
    );
};

export default App;
