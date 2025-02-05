import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HomeOurServices from "@/components/HomeOurServices";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Testimonials from "@/components/DesktopTestimonials";
import FAQ from "@/components/FAQ";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

const HeroButton = ({ children, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[400px] w-full relative overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <Button
          size="lg"
          className="bg-transparent text-5xl font-bold text-base-300 hover:text-white transition-colors duration-300 mb-4"
          onClick={() => (window.location.href = href)}
        >
          {children}
        </Button>

        <motion.div
          className="h-1 bg-primary-foreground"
          animate={{ width: isHovered ? "200px" : "80px" }}
          transition={{ duration: 0.3 }}
        />

        <motion.p
          className="text-base-300 text-xl mt-6 max-w-md text-center"
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {href === "/job-seekers"
            ? "Find your next career opportunity."
            : "Connect with top-tier talent."}
        </motion.p>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
};

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY || window.scrollY === 0);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!isClient) return null;

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 bg-background z-50 transition-transform duration-500 ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-28"
        }`}
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <Header />
      </motion.div>

      <section
        className="relative flex flex-col md:flex-row justify-center items-stretch min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/gray1.jpg')" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <motion.div
            className="w-full md:w-1/2 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="bg-transparent border-none shadow-none">
              <HeroButton href="/job-seekers">Job Seekers</HeroButton>
            </Card>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 max-w-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="bg-transparent border-none shadow-none">
              <HeroButton href="/employers">Employers</HeroButton>
            </Card>
          </motion.div>
        </div>
      </section>

      <main className="scroll-smooth">
        <HomeOurServices />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
};

export default Home;
