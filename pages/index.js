import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import HomeOurServices from "@/components/HomeOurServices";

const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const DesktopTestimonials = dynamic(() => import("@/components/DesktopTestimonials"), {
  ssr: false,
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

const MainContainer = styled.main`
  scroll-behavior: smooth;
`;

/* Use a transient prop ($showHeader) to avoid passing it to DOM */
const StickyHeader = styled.div`
  position: fixed;
  top: ${({ $showHeader }) => ($showHeader ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 40px 5%;
  background: url("/Images/Image1.jpg") no-repeat center center/cover;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 60px 15px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const ContentBox = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 45%;
  padding: 50px;
  color: #ffffff;
  text-align: center;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    padding: 60px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
    &:hover {
      padding: 55px;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const GreenUnderline = styled.div`
  width: 80px;
  height: 5px;
  background-color: #72bf78;
  margin: 10px auto 20px;
`;

const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY + 5) {
        // Hide header if scrolled down more than 5px
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY - 5) {
        // Show header if scrolled up more than 5px
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <StickyHeader $showHeader={showHeader}>
        <Header />
      </StickyHeader>

      <HeroSection>
        <HeroOverlay />
        <ContentBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Job Seekers</h2>
          <GreenUnderline />
          <p>Find your next career opportunity.</p>
        </ContentBox>
        <ContentBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Employers</h2>
          <GreenUnderline />
          <p>Connect with top-tier talent.</p>
        </ContentBox>
      </HeroSection>

      <MainContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <HomeOurServices />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <DesktopTestimonials />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FAQ />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </MainContainer>

      <Footer />
    </>
  );
};

export default Home;