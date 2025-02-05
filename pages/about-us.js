import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import dynamic from "next/dynamic";

import Header from "../components/Header";
import CompanyOverview from "@/components/CompanyOverview";

const OurCoreValues = dynamic(() => import("../components/OurCoreValues"), {
  ssr: false,
});
const MeetOurTeam = dynamic(() => import("@/components/MeetOurTeam"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const MainContainer = styled(motion.main)`
  scroll-behavior: smooth;
  margin-bottom: 40px;
`;

const HeroSection = styled(motion.section)`
  position: relative;
  background: url("/path/to/your/image.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 40px 20px;
  min-height: 80vh;

  @media (max-width: 768px) {
    min-height: 60vh;
  }
`;

const HeroOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const Subtitle = styled(motion.h4)`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StickyHeader = styled(motion.div)`
  position: fixed;
  top: ${({ showHeader }) => (showHeader ? "0" : "-80px")};
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const mainContainerRefs = useRef([]);
  const controlsArray = useRef([useAnimation(), useAnimation(), useAnimation()]);

  // Handle animations for each section
  useEffect(() => {
    const handleScroll = () => {
      mainContainerRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const isInViewport = top < window.innerHeight * 0.8 && bottom > 0;
          controlsArray.current[index].start({ opacity: isInViewport ? 1 : 0 });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle header visibility on scroll
  useEffect(() => {
    setIsClient(true);

    const handleScrollHeader = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScrollHeader);
    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
    };
  }, [lastScrollY]);

  if (!isClient) return null;

  return (
    <>
      <StickyHeader
        showHeader={showHeader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
      </StickyHeader>

      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
        <HeroContent>
          <Subtitle
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            About Us
          </Subtitle>
          <Title
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Empowering people and organizations to achieve more than they ever imagined
          </Title>
        </HeroContent>
      </HeroSection>

      {[CompanyOverview, OurCoreValues, MeetOurTeam].map((Component, index) => (
        <MainContainer
          key={index}
          ref={(el) => (mainContainerRefs.current[index] = el)}
          initial={{ opacity: 0 }}
          animate={controlsArray.current[index]}
          transition={{ duration: 0.5 }}
        >
          <Component />
        </MainContainer>
      ))}

      <Footer />
    </>
  );
};

export default AboutUs;