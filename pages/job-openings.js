import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import PopularJobs from "@/components/PopularJobs.js";
import Hero1 from "@/components/hero1";

const Footer = dynamic(() => import("../components/Footer.js"), {
  ssr: false,
  loading: () => <div className="h-20 bg-muted/50 animate-pulse" />,
});

const JobOpenings = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient) {
    return (
      <div className="min-h-screen bg-background animate-pulse">
        <div className="h-screen bg-muted/20" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background">
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

      {/* Hero Section with jobs theme */}
      <Hero1
        title="Explore Exciting Job Opportunities"
        subtitle="Discover a variety of career opportunities that align with your passion and skills. Start your journey with us today!"
        backgroundImage="/Images/Image9.png"
        height="large"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      {/* Main Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PopularJobs />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default JobOpenings;
