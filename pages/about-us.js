import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Header from "../components/Header";

const CompanyOverview = dynamic(() => import("@/components/CompanyOverview"), { ssr: false });
const OurCoreValues = dynamic(() => import("../components/OurCoreValues"), { ssr: false });
const MeetOurTeam = dynamic(() => import("@/components/MeetOurTeam"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const MainContainer = styled(motion.main)`
  scroll-behavior: smooth;
  margin-bottom: 40px;
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 40px 20px;
  min-height: 80vh;
  background: url("/Images/Image3.jpg") no-repeat center center/cover;

  @media (max-width: 768px) {
    min-height: 60vh;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const Subtitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StickyHeader = styled.div`
  position: fixed;
  top: ${({ $showHeader }) => ($showHeader ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const AboutUs = () => {
  const [hydrated, setHydrated] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionsRef = useRef([]);
  const controlsArray = useRef([useAnimation(), useAnimation(), useAnimation()]);

  // Ensure hydration before rendering components
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const handleScrollSections = () => {
      sectionsRef.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const isInViewport = top < window.innerHeight * 0.8 && bottom > 0;
          controlsArray.current[index].start({ opacity: isInViewport ? 1 : 0 });
        }
      });
    };

    window.addEventListener("scroll", handleScrollSections);
    handleScrollSections();

    return () => {
      window.removeEventListener("scroll", handleScrollSections);
    };
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    const handleScrollHeader = () => {
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

    window.addEventListener("scroll", handleScrollHeader);
    return () => window.removeEventListener("scroll", handleScrollHeader);
  }, [hydrated, lastScrollY]);

  return (
    <>
      {/* Sticky Header */}
      {hydrated && (
        <StickyHeader $showHeader={showHeader}>
          <Header />
        </StickyHeader>
      )}

      {/* Hero Section */}
      {hydrated && (
        <HeroSection>
          <HeroOverlay />
          <HeroContent>
            <Subtitle>About Us</Subtitle>
            <Title>Empowering Businesses with Expert Recruitment</Title>
          </HeroContent>
        </HeroSection>
      )}

      {/* Main Content */}
      {hydrated &&
        [CompanyOverview, OurCoreValues, MeetOurTeam].map((Component, index) => (
          <MainContainer
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            initial={{ opacity: 0 }}
            animate={controlsArray.current[index]}
            transition={{ duration: 0.5 }}
          >
            <Component />
          </MainContainer>
        ))}

      {/* Footer */}
      {hydrated && <Footer />}
    </>
  );
};

export default AboutUs;