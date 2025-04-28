"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import HomeOurServices from "@/components/HomeOurServices";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const HeroButton = ({ children, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} passHref>
      <motion.div
        className="flex flex-col items-center justify-center h-72 sm:h-80 md:h-96 w-full relative overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center px-4">
          <Button
            size="lg"
            className={`bg-transparent text-4xl sm:text-5xl md:text-6xl text-white font-bold transition-colors duration-300 mb-4 shadow-none hover:shadow-none ${bebasNeue.className}`}
          >
            {children}
          </Button>

          <motion.div
            className="h-1.5 bg-[#72BF78]"
            animate={{ width: isHovered ? "160px" : "80px" }}
            transition={{ duration: 0.3 }}
          />

          <motion.p
            className="text-white/80 text-base sm:text-lg mt-4 sm:mt-6 max-w-sm sm:max-w-md text-center"
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {href === "/browse-jobs"
              ? "Find your next career opportunity."
              : "Get matched with the services you need."}
          </motion.p>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </motion.div>
    </Link>
  );
};

const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Head>
        <title>Talent Spree Solutions | Find Jobs and Services</title>
        <meta
          name="description"
          content="Discover career opportunities and service solutions with Talent Spree Solutions. Browse jobs, seek services, and build your future today."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="Talent Spree Solutions | Find Jobs and Services" />
        <meta property="og:description" content="Discover career opportunities and service solutions with Talent Spree Solutions." />
        <meta property="og:url" content="https://yourdomain.com/" />
      </Head>

      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row justify-center items-stretch min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/gray1.jpg')" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-[0px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="sr-only"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Talent Spree Solutions - Find Jobs and Services
        </motion.h1>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="bg-transparent border-none shadow-none">
              <HeroButton href="/job-openings">Browse Jobs</HeroButton>
            </Card>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="bg-transparent border-none shadow-none">
              <HeroButton href="/services">Seek Services</HeroButton>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="scroll-smooth">
        <HomeOurServices />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
    </>
  );
};

export default Home;