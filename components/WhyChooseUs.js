import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const theme = {
  colors: {
    primary: "#72BF78", // Main feature color
    secondary: "#A0D683", // Secondary feature color
    text: "#333333", // Darker text color
    background: "#D3EE98", // Light background using third feature color
    buttonBackground: "#72BF78", // Main feature color for buttons
    buttonHover: "#5BA563", // Slightly darker green for hover effect
    cardText: "#1B5E20", // Dark green text inside cards
    cardBackground: "#ffffff", // White background for cards
    hoverCard: "#A0D683", // Hover effect for card background
    linkText: "#FEFF9F", // Fourth feature color for link text
  },
};

const Section = styled.section`
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 60px;
  gap: 40px;
  background-color: ${theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 0px;
  }
`;

const Card = styled.div`
  background-color: ${theme.colors.cardBackground};
  color: ${theme.colors.cardText};
  width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: transform 0.3s, background-color 0.3s;
  text-align: start;

  &:hover {
    transform: translateY(-5px);
    background-color: ${theme.colors.hoverCard};
    color: white;
  }

  h3 {
    color: ${theme.colors.cardText};
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.cardText};
    margin-bottom: 20px;
  }

  a {
    color: ${theme.colors.linkText};
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
  }

  &:hover h3, &:hover p, &:hover a {
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const HeadingWrapper = styled.div`
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  h4 {
    color: ${theme.colors.primary};
    margin-bottom: 10px;
  }
`;

const ExploreButton = styled.button`
  padding: 12px 20px;
  background-color: ${theme.colors.buttonBackground};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s;
  font-weight: bold;
  width: auto;
  max-width: 200px;

  &:hover {
    background-color: ${theme.colors.buttonHover};
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const LinkWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const CardColumnWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WhyChooseUs = () => {
  const handleExploreClick = () => {
    window.location.href = "/services";
  };

  return (
    <Section>
      <HeadingWrapper>
        <h4>Why Choose Us!</h4>
        <Title>Why Businesses Choose Our Recruitment Services</Title>
        <Subtitle>
          We offer specialized recruitment services tailored to help businesses find the best talent quickly and efficiently. Here’s why companies trust us with their hiring needs.
        </Subtitle>
        <ExploreButton onClick={handleExploreClick}>Explore More</ExploreButton>
      </HeadingWrapper>

      <CardContainer>
        <CardColumnWrapper>
          <Card>
            <IconWrapper>✔</IconWrapper>
            <h3>Speedy Placements</h3>
            <p>We understand the urgency of filling key positions and aim for fast, efficient placements without compromising on quality.</p>
            <LinkWrapper>
              <a href="/services">Read More <FontAwesomeIcon icon={faArrowRight} /></a>
            </LinkWrapper>
          </Card>
          <Card>
            <IconWrapper>✔</IconWrapper>
            <h3>Industry Expertise</h3>
            <p>Our team has extensive experience in multiple industries, allowing us to provide tailored solutions that meet specific hiring needs.</p>
            <LinkWrapper>
              <a href="/services">Read More <FontAwesomeIcon icon={faArrowRight} /></a>
            </LinkWrapper>
          </Card>
        </CardColumnWrapper>

        <CardColumnWrapper>
          <Card>
            <IconWrapper>✔</IconWrapper>
            <h3>Comprehensive Support</h3>
            <p>From recruitment to onboarding, we provide end-to-end support to ensure a seamless transition for both candidates and clients.</p>
            <LinkWrapper>
              <a href="/services">Read More <FontAwesomeIcon icon={faArrowRight} /></a>
            </LinkWrapper>
          </Card>
        </CardColumnWrapper>
      </CardContainer>
    </Section>
  );
};

export default WhyChooseUs;
