import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const themeColors = {
  primary: "#72BF78", // Green for titles
  textPrimary: "#1B1B1B", // Dark text for descriptions
  backgroundText: "#E0E0E0", // Lighter gray for background words
};

const Section = styled.section`
  padding: 80px 20px;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 60px;
    padding: 60px 15px;
  }
`;

const Row = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  z-index: 2;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  flex: 2;
  z-index: 2;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${themeColors.primary};
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Description = styled(motion.p)`
  margin-top: 2rem;
  font-size: 1.1rem;
  color: ${themeColors.textPrimary};
  line-height: 1.7;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

const BackgroundText = styled.h1`
  font-size: 12rem;
  font-weight: bold;
  color: ${themeColors.backgroundText};
  position: absolute;
  top: -10px;
  left: -40px;
  z-index: 1;
  line-height: 0.8;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.3;

  @media (max-width: 768px) {
    font-size: 6rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
`;

const animations = {
  row: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  text: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  },
};

const OurCoreValues = () => {
  const values = [
    {
      title: "We’re United",
      description:
        "We are united through trust as one inclusive, diverse team. This means we operate with a one-firm mindset, demonstrating teamwork, collaboration, integrity, and respect. We create a culture of belonging where everyone can bring their whole self and flourish.",
      backgroundWord: "United",
    },
    {
      title: "We’re Committed",
      description:
        "We are committed as one firm to our purpose. This means we help shape better decisions, create innovative solutions for evolving risks, and achieve results for each other, clients, shareholders, and society.",
      backgroundWord: "Committed",
    },
  ];

  return (
    <Section>
      {values.map((value, index) => (
        <Row
          key={index}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          {...animations.row}
        >
          <LeftContainer>
            <Title {...animations.text}>{value.title}</Title>
          </LeftContainer>
          <RightContainer>
            <Description {...animations.text}>{value.description}</Description>
          </RightContainer>
          <BackgroundText>{value.backgroundWord}</BackgroundText>
        </Row>
      ))}
    </Section>
  );
};

export default OurCoreValues;
