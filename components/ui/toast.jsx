"use client";

import React from "react";

const Toast = ({ type, message }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white text-sm z-50 ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;