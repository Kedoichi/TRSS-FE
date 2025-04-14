"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import Hero1 from "@/components/hero1";
import CompanyOverview from "@/components/CompanyOverview";

const OurCoreValues = dynamic(() => import("../components/OurCoreValues"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] bg-muted/50 animate-pulse rounded-lg" />
  ),
});

const MeetOurTeam = dynamic(() => import("@/components/MeetOurTeam"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] bg-muted/50 animate-pulse rounded-lg" />
  ),
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
  loading: () => <div className="h-20 bg-muted/50 animate-pulse" />,
});

const AboutUs = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        const currentY = window.scrollY;
        // Show header when scrolling up or at the top; hide when scrolling down.
        setShowHeader(currentY <= lastScrollYRef.current || currentY === 0);
        lastScrollYRef.current = currentY;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
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
        title="About Us"
        subtitle="Empowering people and organizations to achieve more than they ever imagined"
        backgroundImage="/Images/Image3.jpg"
        height="medium"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      {/* Main Content */}
      <main className="relative z-10">
        <div className="space-y-20 md:space-y-32">
          <CompanyOverview />
          <OurCoreValues />
          <MeetOurTeam />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;