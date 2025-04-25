"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Hero1 from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";

const OurCoreValues = dynamic(() => import("@/components/OurCoreValues"), {
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

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
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
    </div>
  );
};

export default AboutUs;