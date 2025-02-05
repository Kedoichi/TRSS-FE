import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const themeColors = {
  primary: "#72BF78", // Green for titles
  textPrimary: "#1B1B1B", // Dark text for descriptions
  backgroundText: "#E0E0E0", // Lighter gray for background words
};

const Section = styled.section`
  padding: 100px 20px;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  gap: 150px;

  @media (max-width: 768px) {
    gap: 80px;
  }
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const RightContainer = styled.div`
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${themeColors.primary};
  margin-bottom: 20px;
  text-align: left;
`;

const Description = styled(motion.p)`
  margin-top: 3rem;
  font-size: 1rem;
  color: ${themeColors.textPrimary};
  line-height: 1.8;
  text-align: left;
`;

const BackgroundText = styled.h1`
  font-size: 14rem;
  font-weight: bold;
  color: ${themeColors.backgroundText};
  position: absolute;
  left: -50px;
  top: 0;
  z-index: 1;
  line-height: 0.8;
  text-transform: uppercase;
  white-space: nowrap;
  margin-top: 4rem;

  @media (max-width: 768px) {
    font-size: 8rem;
    left: 10px;
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
      title: 'We’re United',
      description:
        'We are united through trust as one inclusive, diverse team. This means we operate with a one-firm mindset, demonstrating teamwork, collaboration, integrity, and respect. We create a culture of belonging where everyone can bring their whole self and flourish.',
      backgroundWord: 'United',
    },
    {
      title: 'We’re Committed',
      description:
        'We are committed as one firm to our purpose. This means we help shape better decisions, create innovative solutions for evolving risks, and achieve results for each other, clients, shareholders, and society.',
      backgroundWord: 'Committed',
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
