import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUserTie, faUsers, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const theme = {
  colors: {
    primary: "#72BF78", // First color for icons, buttons, and section titles
    secondary: "#2F5233", // Dark green for secondary elements
    background: "#F9F9F9", // Light background for the section
    cardBackground: "#ffffff", // White for cards
    text: "#333333", // Dark gray for text
    title: "#72BF78", // First color for service data titles
    buttonText: "#ffffff", // White for button text
    hoverButton: "#5BA563", // Slightly darker green for button hover
  },
};

const Section = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled(motion.h4)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  width: 50%;
  margin: auto;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  transition: transform 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const Button = styled(motion.button)`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 40px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
`;

const servicesData = [
  {
    icon: faComments,
    title: "Client Consultation",
    description: "We help businesses hire the best talent.",
  },
  {
    icon: faUserTie,
    title: "Talent Sourcing",
    description: "We deliver top candidates for your needs.",
  },
  {
    icon: faUsers,
    title: "Employee Onboarding",
    description: "We ensure a smooth start for new hires.",
  },
  {
    icon: faDesktop,
    title: "IT Support",
    description: "We provide solutions for your IT systems and support needs.",
  },
];

const HomeOurServices = () => {
  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Providing Expert Recruitment Services to Connect Talent with Opportunity
        </Subtitle>
        <CardContainer>
          {servicesData.map(({ icon, title, description }, index) => (
            <Card
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <IconWrapper>
                <FontAwesomeIcon icon={icon} />
              </IconWrapper>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </Card>
          ))}
        </CardContainer>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => (window.location.href = "/services")}
        >
          Explore Our Services
        </Button>
      </Section>
    </ThemeProvider>
  );
};

export default HomeOurServices;
