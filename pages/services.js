import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import OurServices from "../components/OurServices";
import Hero1 from "@/components/hero1";
import OurIndustries from "@/components/OurIndustries";

// Dynamic imports with loading states
const ProcessSteps = dynamic(() => import("@/components/ProcessSteps"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] bg-muted/50 animate-pulse rounded-lg" />
  ),
});

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[500px] bg-muted/50 animate-pulse rounded-lg" />
  ),
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
  loading: () => <div className="h-20 bg-muted/50 animate-pulse" />,
});

const Services = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowHeader(window.scrollY <= lastScrollY || window.scrollY === 0);
        setLastScrollY(window.scrollY);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Fixed Header */}
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

      {/* Hero Section */}
      <Hero1
        title="Our Services"
        subtitle="Empowering Your Business with Tailored Solutions"
        backgroundImage="/Images/Image6.jpg"
        height="medium"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      {/* Main Content */}
      <main className="relative z-10">
        <div className="space-y-20 md:space-y-32">
          {/* Services Section */}
          <OurServices />

          {/* Process Steps */}
          <ProcessSteps />

          {/* Industries */}
          <OurIndustries />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
