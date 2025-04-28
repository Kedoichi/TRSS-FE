"use client";

import React from "react";
import Head from "next/head";
import Hero1 from "@/components/HeroSection";
import ContactFormSection from "@/components/ContactFormSection";

const contactData = {
  hero: {
    title: "Contact Us",
    subtitle:
      "Thank you for your interest in our services. Please complete the form below, and our team will get in touch with you shortly.",
  }
};

const ContactUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* SEO Head */}
      <Head>
        <title>Contact Us | Talent Spree Solutions</title>
        <meta
          name="description"
          content="Get in touch with Talent Spree Solutions for tailored software development, web solutions, and digital innovation services. We're here to help your business grow."
        />
        <meta property="og:title" content="Contact Talent Spree Solutions" />
        <meta
          property="og:description"
          content="Contact us today for digital solutions that drive real business results. Let's start a conversation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Head>

      {/* Hero Section */}
      <header>
        <Hero1
          title={contactData.hero.title}
          subtitle={contactData.hero.subtitle}
          backgroundImage="/Images/Image6.jpg"
          height="normal"
          overlayOpacity="medium"
          curveColor="bg-background"
          className="pt-16"
        />
      </header>

      {/* Contact Form Section */}
      <main>
        <ContactFormSection />
      </main>
    </div>
  );
};

export default ContactUs;