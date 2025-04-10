"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faMapMarkerAlt, faCalendar, faArrowLeft, faBriefcase, faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Hero1 from "@/components/hero1";

// Lazy load Header and Footer
const Header = React.lazy(() => import("../../components/Header"));
const Footer = React.lazy(() => import("../../components/Footer"));

const JobDescriptionPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5100/job/${id}`);
        if (!response.ok) throw new Error("Job not found");
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      const minScrollThreshold = 10;

      if (scrollDifference > minScrollThreshold) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isClient]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 border-4 border-[#E2E8F0] rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#72BF78] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium animate-pulse">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <FontAwesomeIcon icon={faBriefcase} className="text-red-400 text-3xl" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Job Not Found</h1>
            <p className="text-gray-500">This job posting may have been removed or is no longer available.</p>
          </div>
          <button
            onClick={() => router.push("/job-openings")}
            className="inline-flex items-center gap-2 text-[#72BF78] hover:text-[#5FA461] font-medium transition-all duration-300 hover:gap-3"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            Back to Job Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        className={`fixed top-0 left-0 right-0 bg-white z-50 transition-transform duration-300 ease-out ${showHeader ? "translate-y-0" : "-translate-y-28"}`}
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ stiffness: 120, damping: 15 }}
        style={{ willChange: "transform" }}
      >
        <React.Suspense fallback={<div className="h-16 bg-white shadow-sm animate-pulse" />}>
          <Header />
        </React.Suspense>
      </motion.div>

      {/* Hero Section with job details */}
      <Hero1
        title={job.title}
        backgroundImage="/Images/Image9.png"
        height="large"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="mb-8">
          <button
            onClick={() => router.push("/job-openings")}
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-[#72BF78] transition-all duration-300"
          >
            <FontAwesomeIcon 
              icon={faArrowLeft} 
              className="text-sm transform group-hover:-translate-x-1 transition-transform duration-300" 
            />
            <span>Back to Job Listings</span>
          </button>
        </nav>

        {/* Job Content */}
        <div className="space-y-8">
          {/* Job Overview Card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#72BF78] px-6 py-8 sm:p-10">
              <div className="flex items-center gap-2 text-white/90 mb-2">
                <FontAwesomeIcon icon={faBuilding} className="text-white/90" />
                <span className="font-medium">{job.company}</span>
              </div>
            </div>
            
            <div className="px-6 py-6 sm:p-8 grid gap-6 sm:grid-cols-3 bg-white">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center shadow-inner">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#72BF78]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center shadow-inner">
                  <FontAwesomeIcon icon={faClock} className="text-[#72BF78]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Job Type</p>
                  <p className="font-medium">{job.type || "Full Time"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center shadow-inner">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#72BF78]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Posted</p>
                  <p className="font-medium">{new Date(job.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#72BF78] rounded-full"></span>
              Job Description
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {job.description.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4">{paragraph}</p>
                )
              ))}
            </div>
          </div>

          {/* Apply Now Button */}
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={() => router.push(`/contact`)}
              className="w-full sm:w-auto px-8 py-4 bg-[#72BF78] hover:bg-[#5FA461] text-white text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 shadow-md hover:shadow-lg"
            >
              Apply Now
              <FontAwesomeIcon icon={faArrowLeft} className="rotate-180" />
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <React.Suspense fallback={<div className="h-16 bg-white shadow-sm animate-pulse" />}>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default JobDescriptionPage;
