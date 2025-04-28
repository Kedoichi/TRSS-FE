"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
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
      {/* SEO Head */}
      <Head>
        <title>Job Openings | Talent Spree Solutions</title>
        <meta
          name="description"
          content="Explore exciting job openings at Talent Spree Solutions. Join a dynamic team passionate about innovation, technology, and driving change. Apply today!"
        />
        <meta property="og:title" content="Career Opportunities at Talent Spree Solutions" />
        <meta
          property="og:description"
          content="Discover the latest career opportunities and become part of our journey to create impactful digital solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/jobs" />
        <link rel="canonical" href="https://yourdomain.com/jobs" />
      </Head>

      {/* Hero */}
      <header>
        <Hero1
          title="Explore Exciting Job Opportunities"
          subtitle="Discover a variety of career opportunities that align with your passion and skills. Start your journey with us today!"
          backgroundImage="/Images/Image9.png"
          height="large"
          overlayOpacity="medium"
          curveColor="bg-background"
          className="pt-16"
        />
      </header>

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