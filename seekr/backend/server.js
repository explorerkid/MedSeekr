// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai'); // Add OpenAI import for llama model

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Initialize OpenAI client for Llama 3.1
const openai = new OpenAI({
  apiKey: process.env.LLAMA_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Symptom checking route
app.post('/api/check-symptom', async (req, res) => {
  const { symptom } = req.body;

  if (!symptom) {
    return res.status(400).json({ error: 'Symptom is required.' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'nvidia/llama-3.1-nemotron-70b-instruct',
      messages: [
        {
          role: 'user',
          content: `Given the symptom: ${symptom}, provide a diagnosis and initial medical care advice.`,
        },
      ],
      temperature: 0.5,
      top_p: 1,
      max_tokens: 150,
      stream: false,
    });

    const diagnosis = completion.choices[0].message.content; // Get the result from Llama

    res.json({ diagnosis });  // Send the diagnosis response
  } catch (error) {
    console.error('Error in symptom check:', error);
    res.status(500).json({ error: 'Error processing the symptom check.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
