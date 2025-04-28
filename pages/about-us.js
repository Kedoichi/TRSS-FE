"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
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
      {/* SEO Head Tags */}
      <Head>
        <title>About Us | Talent Spree Solutions</title>
        <meta
          name="description"
          content="Discover Talent Spree Solutions' mission to empower people and organizations through digital innovation and impactful technology solutions."
        />
        <meta property="og:title" content="About Talent Spree Solutions" />
        <meta
          property="og:description"
          content="Learn about Talent Spree's commitment to innovation, empowerment, and achieving the impossible."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      {/* Hero Section */}
      <header>
        <Hero1
          title="About Us"
          subtitle="Empowering people and organizations to achieve more than they ever imagined"
          backgroundImage="/Images/Image3.jpg"
          height="medium"
          overlayOpacity="medium"
          curveColor="bg-background"
          className="pt-16"
        />
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="space-y-20 md:space-y-32">
          <section>
            <CompanyOverview />
          </section>

          <section>
            <OurCoreValues />
          </section>

          <section>
            <MeetOurTeam />
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;