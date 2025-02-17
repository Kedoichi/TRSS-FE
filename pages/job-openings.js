import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import PopularJobs from "@/components/PopularJobs.js";

const Footer = dynamic(() => import("../components/Footer.js"), { ssr: false });

const theme = {
  colors: {
    primary: "#72BF78",
    secondary: "#2F5233",
    background: "#D3EE98",
    heroText: "#FFFFFF",
    subtitleText: "#FEFF9F",
    stickyBackground: "#D3EE98",
    stickyShadow: "rgba(0, 0, 0, 0.1)",
  },
};

const MainContainer = styled.main`
  scroll-behavior: smooth;
`;

const HeroSection = styled.section`
  position: relative;
  background: url("/Images/Image9.png") no-repeat center center/cover;
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

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
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
  top: ${({ $showHeader }) => ($showHeader ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.stickyBackground};
  z-index: 1000;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.stickyShadow};
`;

const JobOpenings = () => {
  const [hydrated, setHydrated] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hydrated, lastScrollY]);

  if (!hydrated) {
    return (
      <ThemeProvider theme={theme}>
        <StickyHeader $showHeader={true}>
          <Header />
        </StickyHeader>

        <HeroSection>
          <HeroOverlay />
          <HeroContent>
            <HeroTitle>Explore Exciting Job Opportunities</HeroTitle>
            <HeroSubtitle>
              Discover a variety of career opportunities that align with your passion and skills.
              Start your journey with us today!
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <MainContainer>
          <PopularJobs />
        </MainContainer>

        <Footer />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StickyHeader $showHeader={showHeader}>
        <Header />
      </StickyHeader>

      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Explore Exciting Job Opportunities</HeroTitle>
          <HeroSubtitle>
            Discover a variety of career opportunities that align with your passion and skills.
            Start your journey with us today!
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <MainContainer>
        <PopularJobs />
      </MainContainer>

      <Footer />
    </ThemeProvider>
  );
};

export default JobOpenings;
