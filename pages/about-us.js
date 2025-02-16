import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Hero1 from "@/components/hero1";
import Header from "../components/Header";
import CompanyOverview from "@/components/CompanyOverview";

// Dynamic imports with loading states
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

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-20 bg-muted/50 animate-pulse" />,
});

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!isClient) return null;

  return (
    <>
      <AnimatePresence>
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
      </AnimatePresence>

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
      <main className="scroll-smooth space-y-20 md:space-y-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <CompanyOverview />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <OurCoreValues />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <MeetOurTeam />
        </motion.section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
