import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faChartLine, faSearch, faPaintBrush, faRocket, faCog } from "@fortawesome/free-solid-svg-icons";

const theme = {
  colors: {
    primary: "#72BF78", // Main feature green
    secondary: "#2F5233", // Dark green for accents
    background: "#FFFFFF", // Keeping the white background
    cardBackground: "#A0D683", // Light green for cards
    cardHoverBackground: "#72BF78", // Medium green for hover effect
    text: "#2F5233", // Dark greenish-gray for main text
    lightText: "#ffffff", // White for text on cards
    header: "#72BF78", // Green header
    title: "#2F5233", // Darker green for section titles
  },
};

const IndustriesSection = styled.section`
  text-align: center;
  padding: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionHeader = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.header};
`;

const IndustriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;
  width: 60%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
  }
`;

const IndustryBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.lightText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.cardHoverBackground};
  }

  h3 {
    color: ${({ theme }) => theme.colors.lightText}; /* White text for contrast */
    margin-top: 10px;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.lightText};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.lightText};
`;

const OurIndustries = () => {
  const industries = [
    {
      icon: faChartLine,
      title: "Accounting",
      description: "Professional accounting services to manage financial records and tax filings.",
    },
    {
      icon: faCog,
      title: "Finance",
      description: "Strategic financial services including investment advice and financial planning.",
    },
    {
      icon: faSearch,
      title: "IT Services",
      description: "Expert IT solutions to support and optimize technology infrastructures.",
    },
    {
      icon: faLightbulb,
      title: "Consulting",
      description: "Providing business consultancy to improve strategy and operations.",
    },
    {
      icon: faRocket,
      title: "Marketing",
      description: "Creative marketing solutions for brand building and customer acquisition.",
    },
    {
      icon: faPaintBrush,
      title: "Design",
      description: "Graphic and UX/UI design services to enhance user experience and branding.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <IndustriesSection>
        <SectionContent>
          <SectionHeader>Our Industries</SectionHeader>
          <SectionTitle>We Serve a Range of Professional Careers</SectionTitle>
          <SectionSubtitle>
            Our industry expertise spans across accounting, finance, IT, and more, offering innovative solutions for business growth.
          </SectionSubtitle>
        </SectionContent>
        <IndustriesContainer>
          {industries.map(({ icon, title, description }, index) => (
            <IndustryBox
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper>
                <FontAwesomeIcon icon={icon} />
              </IconWrapper>
              <h3>{title}</h3>
              <p>{description}</p>
            </IndustryBox>
          ))}
        </IndustriesContainer>
      </IndustriesSection>
    </ThemeProvider>
  );
};

export default OurIndustries;
