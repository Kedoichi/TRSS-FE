"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
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
      {/* SEO Head */}
      <Head>
        <title>Our Services | Talent Spree Solutions</title>
        <meta
          name="description"
          content="Explore the tailored services offered by Talent Spree Solutions, including web development, digital transformation, and technology consulting for your business growth."
        />
        <meta property="og:title" content="Services | Talent Spree Solutions" />
        <meta
          property="og:description"
          content="Discover how Talent Spree empowers businesses through customized software solutions, strategic consulting, and innovation-driven technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <link rel="canonical" href="https://yourdomain.com/services" />
      </Head>

      {/* Hero Section */}
      <header>
        <Hero1
          title="Our Services"
          subtitle="Empowering Your Business with Tailored Solutions"
          backgroundImage="/Images/Image6.jpg"
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
            <OurServices />
          </section>

          <section>
            <ProcessSteps />
          </section>

          <section>
            <OurIndustries />
          </section>

          <section>
            <ContactForm />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Services;