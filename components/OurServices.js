import React from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Check } from "lucide-react";

const theme = {
  colors: {
    primary: "#72BF78", // Main feature color for buttons and title
    secondary: "#2F5233", // Dark greenish color for list items
    background: "#ffffff", // White for background
    text: "#333", // General text color
    mutedText: "#555", // Muted gray for descriptions
    highlight: "#A0D683", // Highlight color for icons
    buttonText: "#ffffff", // White for button text
    buttonHover: "#5A9E6B", // Slightly darker green for hover effect
  },
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 100px 70px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  gap: 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 50%;

  .image-item {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 50%;

  @media (max-width: 768px) {
    text-align: center;
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};  /* Updated to main feature color */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;

  li {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};  /* Updated to dark greenish color */
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.colors.highlight};
      margin-right: 10px;
      font-size: 1.5rem;
    }
  }
`;

const Button = styled(motion.button)`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  max-width: 200px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const OurServices = () => {
  const router = useRouter();

  const servicesData = {
    title: "Our Expertise in Connecting Talent and Opportunity",
    description:
      "At Talent Spree Solutions, we specialize in connecting businesses with top talent in the industry. We provide innovative solutions to help you find the best candidates quickly and efficiently.",
    list: [
      "Streamlined recruitment process to find the best talent.",
      "Tailored solutions to meet your specific hiring needs.",
      "Expert guidance for both employers and job seekers.",
    ],
    buttonText: "Discover More",
    buttonLink: "/job-openings",
    images: [
      "/Images/Image3.jpg",
      "/Images/Image4.jpg",
      "/Images/Image5.jpg",
      "/Images/Image2.jpg",
    ],
  };

  const handleButtonClick = () => {
    router.push(servicesData.buttonLink);
  };

  return (
    <ThemeProvider theme={theme}>
      <Section
        as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ImageContainer
          as={motion.div}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          {servicesData.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Team Image ${index + 1}`}
              width={500}
              height={400}
              className="image-item"
            />
          ))}
        </ImageContainer>

        <TextContainer
          as={motion.div}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          <Title>{servicesData.title}</Title>
          <Description>{servicesData.description}</Description>
          <List>
            {servicesData.list.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Check />
                {item}
              </motion.li>
            ))}
          </List>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
          >
            {servicesData.buttonText}
          </Button>
        </TextContainer>
      </Section>
    </ThemeProvider>
  );
};

export default OurServices;
