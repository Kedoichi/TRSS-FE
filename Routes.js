import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import AboutUs from './pages/about-us';
import Services from './pages/services';
import JobOpenings from './pages/job-openings';
import JobDescription from './pages/job-description';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/job-openings" element={<JobOpenings />} />
      <Route path="/job-description/:id" element={<JobDescription />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
