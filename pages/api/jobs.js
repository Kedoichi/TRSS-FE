// pages/api/jobs.js
import axios from 'axios';
import https from 'https';

export default async function handler(req, res) {
  // Create axios instance with SSL verification disabled
  const api = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });

  try {
    const response = await api.get('http://13.77.50.113/api/jobs', {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 5000
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

    return res.status(500).json({
      message: 'Error fetching jobs',
      error: error.message,
      status: error.response?.status
    });
  }
}