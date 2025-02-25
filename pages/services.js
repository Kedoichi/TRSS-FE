import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import OurServices from "../components/OurServices";

const OurIndustries = dynamic(() => import("@/components/OurIndustries.js"), { ssr: false });
const ProcessSteps = dynamic(() => import("@/components/ProcessSteps.js"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/ContactForm.js"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer.js"), { ssr: false });

const HeroSection = styled(motion.section)`
  position: relative;
  background: url("/Images/Image6.jpg") no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 40px 20px;
  min-height: 80vh;

  @media (max-width: 768px) {
    padding: 30px 15px;
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MainContainer = styled(motion.main)`
  scroll-behavior: smooth;
`;

const StickyHeader = styled(motion.div)`
  position: fixed;
  top: ${({ $showHeader }) => ($showHeader ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: #ffffff;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Services = () => {
  const [hydrated, setHydrated] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sectionsRef = useRef([]);
  const controlsArray = useRef([useAnimation(), useAnimation(), useAnimation(), useAnimation()]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const handleScrollSections = () => {
      sectionsRef.current.forEach((ref, index) => {
        if (ref && controlsArray.current[index]) {
          const { top, bottom } = ref.getBoundingClientRect();
          if (top < window.innerHeight * 0.8 && bottom > 0) {
            controlsArray.current[index].start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            });
          } else {
            controlsArray.current[index].start({
              opacity: 0,
              y: 50,
              transition: { duration: 0.3 },
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSections);
    handleScrollSections();

    return () => window.removeEventListener("scroll", handleScrollSections);
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

  if (!hydrated) {
    return (
      <>
        <StickyHeader $showHeader={true}>
          <Header />
        </StickyHeader>
        <HeroSection>
          <HeroOverlay />
          <HeroContent>
            <Subtitle>Our Services</Subtitle>
            <Title>Empowering Your Business with Tailored Solutions</Title>
          </HeroContent>
        </HeroSection>
        <OurServices />
        <ProcessSteps />
        <OurIndustries />
        <ContactForm />
        <Footer />
      </>
    );
  }

  return (
    <>
      <StickyHeader
        $showHeader={showHeader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.2 }}
        />
        <HeroContent>
          <Subtitle
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Our Services
          </Subtitle>
          <Title
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Your Business with Tailored Solutions
          </Title>
        </HeroContent>
      </HeroSection>

      {[OurServices, ProcessSteps, OurIndustries, ContactForm].map((Component, index) => (
        <MainContainer
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsArray.current[index]}
        >
          <Component />
        </MainContainer>
      ))}

      <Footer />
    </>
  );
};

export default Services;