import React, { useState } from 'react';

const Checking = () => {
  const [symptom, setSymptom] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSymptomChange = (e) => {
    setSymptom(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDiagnosis(null);

    try {
      const response = await fetch('http://localhost:5000/api/check-symptom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptom }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch diagnosis');
      }

      const data = await response.json();
      setDiagnosis(data.diagnosis);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Symptom Checker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Symptom:
          <input
            type="text"
            value={symptom}
            onChange={handleSymptomChange}
            placeholder="Enter symptom"
          />
        </label>
        <button type="submit" disabled={loading}>Check Diagnosis</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {diagnosis && (
        <div>
          <h3>Diagnosis:</h3>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default Checking;
