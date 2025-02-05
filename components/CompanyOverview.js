import React from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const theme = {
  colors: {
    primary: "#72BF78", // Main feature color
    text: "#2F5233", // Dark greenish text color
  },
};

// Styled Components
const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 40px 0;
  text-align: center;
  min-height: 200px;
`;

const Icon = styled(motion.div)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 20px;
  }
`;

// Animation Configurations
const animations = {
  section: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  },
  icon: {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    transition: { duration: 0.5 },
  },
  title: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.5 },
  },
  description: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2 },
  },
};

// Component
const CompanyOverview = () => (
  <ThemeProvider theme={theme}>
    <Section {...animations.section}>
      <Icon {...animations.icon}>
        <FontAwesomeIcon icon={faUsers} />
      </Icon>
      <Title {...animations.title}>Why Talent Spree</Title>
      <Description {...animations.description}>
        Talent Spree Solutions is committed to connecting businesses with top talent by leveraging our deep industry expertise, innovative technology, and a network of outstanding professionals. We help clients build and optimize their workforce, creating lasting value and delivering exceptional results.
      </Description>
    </Section>
  </ThemeProvider>
);

export default CompanyOverview;
