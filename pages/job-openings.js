"use client";

import React, { useEffect, useState } from "react";
import Hero1 from "@/components/HeroSection";
import PopularJobs from "@/components/PopularJobs";

const JobOpenings = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
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
    </div>
  );
};

export default JobOpenings;