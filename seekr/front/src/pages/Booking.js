// src/pages/Booking.js
import React, { useState } from 'react';

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment booking logic here
    alert(`Appointment booked with Dr. ${doctor} on ${date} at ${time}`);
  };

  return (
    <div className="booking-container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor</label>
          <input
            type="text"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            placeholder="Enter doctor's name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default Booking;
