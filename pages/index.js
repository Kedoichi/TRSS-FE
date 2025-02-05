import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import HomeOurServices from "@/components/HomeOurServices";

const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const DesktopTestimonials = dynamic(() => import("@/components/DesktopTestimonials"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

const MainContainer = styled.main`
  scroll-behavior: smooth;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  min-height: 80vh;
  background: url("/Images/Image1.jpg") no-repeat center center/cover;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SectionContainer = styled.div`
  position: relative;
  width: 45%;
  text-align: center;
  z-index: 2;
`;

const TitleButton = styled(motion.button)`
  background-color: transparent;
  border: transparent;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    color: #72bf78;
  }

  &:focus {
    outline: none;
  }
`;

const Underline = styled.div`
  width: 80px;
  height: 5px;
  background-color: #72bf78;
  margin: 10px auto 0;
`;

const SubtitleSection = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  margin-top: 10px;
`;

const StickyHeader = styled.div`
  position: fixed;
  top: ${({ showHeader }) => (showHeader ? "0" : "-80px")};
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`;

const SectionWrapper = styled(motion.div)``;

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering to prevent hydration errors
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY || window.scrollY === 0);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Render a fallback or nothing until the component is hydrated
  if (!isClient) {
    return null;
  }

  return (
    <>
      <StickyHeader showHeader={showHeader}>
        <Header />
      </StickyHeader>

      <HeroSection>
        <HeroOverlay />
        <SectionContainer>
          <TitleButton
            onClick={() => (window.location.href = "/job-seekers")}
          >
            Job Seekers
          </TitleButton>
          <Underline />
          <SubtitleSection>Find your next career opportunity.</SubtitleSection>
        </SectionContainer>

        <SectionContainer>
          <TitleButton
            onClick={() => (window.location.href = "/employers")}
          >
            Employers
          </TitleButton>
          <Underline />
          <SubtitleSection>Connect with top-tier talent.</SubtitleSection>
        </SectionContainer>
      </HeroSection>

      <MainContainer>
        <SectionWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <HomeOurServices />
        </SectionWrapper>
        <SectionWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <DesktopTestimonials />
        </SectionWrapper>
        <SectionWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FAQ />
        </SectionWrapper>
        <SectionWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </SectionWrapper>
      </MainContainer>

      <Footer />
    </>
  );
};

export default Home;
