import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import PopularJobs from "@/components/PopularJobs.js";

const Footer = dynamic(() => import("../components/Footer.js"), { ssr: false });

const theme = {
  colors: {
    primary: "#72BF78", // Main feature color for key highlights
    secondary: "#2F5233", // Dark green for accents
    background: "#D3EE98", // Light greenish white background
    heroBackground: "#A0D683", // Slightly deeper green for the hero section
    heroText: "#FFFFFF", // White for hero text
    subtitleText: "#FEFF9F", // Soft yellow for subtitle contrast
    stickyBackground: "#D3EE98", // Light greenish sticky header background
    stickyShadow: "rgba(0, 0, 0, 0.1)", // Subtle shadow for sticky effect
  },
};

const MainContainer = styled.main`
  scroll-behavior: smooth;
`;

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.heroBackground};
  color: ${({ theme }) => theme.colors.heroText};
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  margin-bottom: 40px;
  min-height: 80vh;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.subtitleText};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StickyHeader = styled.div`
  position: fixed;
  top: ${({ showHeader }) => (showHeader ? "0" : "-80px")};
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.stickyBackground};
  z-index: 1000;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.stickyShadow};
`;

const JobOpenings = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY || window.scrollY === 0);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <ThemeProvider theme={theme}>
      <StickyHeader showHeader={showHeader}>
        <Header />
      </StickyHeader>

      <HeroSection>
        <HeroTitle>Explore Exciting Job Opportunities</HeroTitle>
        <HeroSubtitle>
          Discover a variety of career opportunities that align with your passion and skills.
          Start your journey with us today!
        </HeroSubtitle>
      </HeroSection>

      <MainContainer>
        <PopularJobs />
      </MainContainer>

      <Footer />
    </ThemeProvider>
  );
};

export default JobOpenings;
