"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Hero1 from "@/components/hero1";
import PopularJobs from "@/components/PopularJobs";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-20 bg-muted/50 animate-pulse" />,
});

const JobOpenings = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        const currentScrollY = window.scrollY;
        setShowHeader(currentScrollY <= lastScrollYRef.current || currentScrollY === 0);
        lastScrollYRef.current = currentScrollY;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Sticky Header */}
      <motion.div
        className={`fixed top-0 left-0 right-0 bg-background z-50 transition-transform duration-300 ease-out ${
          showHeader ? "translate-y-0" : "-translate-y-28"
        }`}
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ stiffness: 120, damping: 15 }}
        style={{ willChange: "transform" }}
      >
        <Header />
      </motion.div>

      {/* Hero */}
      <Hero1
        title="Explore Exciting Job Opportunities"
        subtitle="Discover a variety of career opportunities that align with your passion and skills. Start your journey with us today!"
        backgroundImage="/Images/Image9.png"
        height="large"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      {/* Main */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <PopularJobs />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobOpenings;