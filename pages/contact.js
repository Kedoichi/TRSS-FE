"use client";

import React from "react";
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
      <Hero1
        title="Contact Us"
        subtitle={contactData.hero.subtitle}
        backgroundImage="/Images/Image6.jpg"
        height="normal"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      <ContactFormSection/>
    </div>
  );
};

export default ContactUs;