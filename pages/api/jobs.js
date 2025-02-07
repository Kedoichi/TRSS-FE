// pages/api/jobs.js
import axios from "axios";
import https from "https";

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  // Create axios instance with SSL verification disabled
  const api = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    baseURL:
      "https://trssbe-eydfbremb6avhybz.australiasoutheast-01.azurewebsites.net",
    timeout: 8000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  try {
    // Make the request to the external API
    const response = await api.get("/api/jobs");

    // Ensure we have valid data
    if (!response.data) {
      throw new Error("No data received from external API");
    }

    // Return success response with data
    return res.status(200).json({
      success: true,
      data: {
        jobs: response.data?.data?.jobs || [],
      },
    });
  } catch (error) {
    // Log detailed error for debugging
    console.error("API Error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      stack: error.stack,
    });

    // Return structured error response
    return res.status(error.response?.status || 500).json({
      success: false,
      message: "Error fetching jobs",
      error: error.message,
      details: error.response?.data,
    });
  }
}
