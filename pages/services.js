"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero1 from "@/components/HeroSection";
import OurServices from "@/components/OurServices";

const ProcessSteps = dynamic(() => import("@/components/ProcessSteps"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] bg-muted/50 animate-pulse rounded-lg" />
  ),
});

const OurIndustries = dynamic(() => import("@/components/OurIndustries"), {
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

const Services = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
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
          <OurServices />
          <ProcessSteps />
          <OurIndustries />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default Services;