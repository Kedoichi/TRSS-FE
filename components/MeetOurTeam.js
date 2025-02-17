import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const themeColors = {
  primary: "#72BF78",
  secondary: "#A0D683",
  accent: "#FEFF9F",
  textPrimary: "#ffffff",
  overlay: "rgba(0, 0, 0, 0.6)",
};

const Section = styled.section`
  padding: 100px 20px;
  position: relative;
  text-align: center;
  color: ${themeColors.textPrimary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 15px;
    min-height: auto;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/Images/Image2.jpg") no-repeat center center/cover;
  filter: grayscale(100%);
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${themeColors.overlay};
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 50px;
  color: ${themeColors.accent};
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TestimonialContainer = styled.div`
  position: relative;
  background: #ffffff;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 30px 20px;
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeColors.primary};
  border-radius: 50%;

  img {
    width: 60px;
    height: auto;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Author = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ $isActive }) => ($isActive ? themeColors.secondary : themeColors.primary)};
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Company = styled.p`
  font-size: 1.2rem;
  color: #777;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
`;

const Arrow = styled.button`
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #ffffff;
  color: ${themeColors.textPrimary};
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${themeColors.primary};
    transform: scale(1.1);
  }

  ${({ isleft }) => (isleft ? "left: 40px;" : "right: 40px;")}
  position: absolute;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    ${({ isleft }) => (isleft ? "left: 10px;" : "right: 10px;")}
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background: ${({ $isActive }) => ($isActive ? themeColors.secondary : "#ccc")};
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${themeColors.primary};
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonialsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonialsData.length - 1
    );
  };

  return (
    <Section>
      <Background />
      <Overlay />
      <Title>From Our Clients</Title>
      <Subtitle>What our clients are saying</Subtitle>

      <TestimonialContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <IconWrapper>
              <img src={testimonialsData[currentIndex].logo} alt="Client Logo" />
            </IconWrapper>
            <TestimonialText>"{testimonialsData[currentIndex].text}"</TestimonialText>
            <Author $isActive={true}>
              {testimonialsData[currentIndex].author}
            </Author>
            <Company>{testimonialsData[currentIndex].company}</Company>
          </motion.div>
        </AnimatePresence>
      </TestimonialContainer>

      <ArrowContainer>
        <Arrow isleft onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow>
        <Arrow onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow>
      </ArrowContainer>

      <DotsContainer>
        {testimonialsData.map((_, index) => (
          <Dot
            key={index}
            $isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </Section>
  );
};

const testimonialsData = [
  {
    text: "Talent Spree Solutions helped us find the perfect candidates. Their attention to detail and understanding of our needs was remarkable.",
    author: "John Doe",
    company: "CEO, Example Corp",
    logo: "/Images/client-logo1.png",
  },
  {
    text: "A fantastic experience from start to finish. The process was seamless, and we were matched with exceptional talent.",
    author: "Jane Smith",
    company: "HR Manager, Tech Innovators",
    logo: "/Images/client-logo2.png",
  },
  {
    text: "We were impressed by how quickly they found us top-tier candidates. They truly care about long-term success.",
    author: "Emily Johnson",
    company: "COO, Digital Enterprises",
    logo: "/Images/client-logo3.png",
  },
  {
    text: "Their professionalism and dedication to delivering results exceeded our expectations. Highly recommended.",
    author: "Mark Wilson",
    company: "Director, Growth Solutions",
    logo: "/Images/client-logo4.png",
  },
];

export default Testimonials;