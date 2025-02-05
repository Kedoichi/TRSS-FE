import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const themeColors = {
  primary: "#72BF78",
  secondary: "#A0D683",
  accent: "#FEFF9F",
  textPrimary: "#ffffff",
  overlay: "rgba(0, 0, 0, 0.6)",
};

const Section = styled.section`
  padding: 100px 20px;
  background: url('/Images/testimonial-bg.jpg') no-repeat center center/cover;
  position: relative;
  text-align: center;
  color: ${themeColors.textPrimary};
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
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 50px;
  color: ${themeColors.accent};
  position: relative;
  z-index: 2;
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

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeColors.primary};
  border-radius: 50%;

  img {
    width: 70px;
    height: auto;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  color: #333;
  margin-bottom: 30px;
`;

const Author = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${themeColors.primary};
  margin-bottom: 5px;
`;

const Company = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const Arrow = styled.button`
  background: transparent;
  border: none;
  color: ${themeColors.primary};
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.isLeft && 'left: -40px;'}
  ${(props) => !props.isLeft && 'right: -40px;'}

  &:hover {
    color: ${themeColors.secondary};
  }

  @media (max-width: 768px) {
    ${(props) => props.isLeft && 'left: -20px;'}
    ${(props) => !props.isLeft && 'right: -20px;'}
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
      <Overlay />
      <Title>From Our Clients</Title>

      <TestimonialContainer>
        <IconWrapper>
          <img src={testimonialsData[currentIndex].logo} alt="Client Logo" />
        </IconWrapper>
        <TestimonialText>"{testimonialsData[currentIndex].text}"</TestimonialText>
        <Author>{testimonialsData[currentIndex].author}</Author>
        <Company>{testimonialsData[currentIndex].company}</Company>

        <Arrow isLeft onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow>
        <Arrow onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow>
      </TestimonialContainer>
    </Section>
  );
};

const testimonialsData = [
  {
    text: 'Talent Spree Solutions helped us find the perfect candidates. Their attention to detail and understanding of our needs was remarkable.',
    author: 'John Doe',
    company: 'CEO, Example Corp',
    logo: '/Images/client-logo1.png', // Replace with actual logos
  },
  {
    text: 'A fantastic experience from start to finish. The process was seamless, and we were matched with exceptional talent.',
    author: 'Jane Smith',
    company: 'HR Manager, Tech Innovators',
    logo: '/Images/client-logo2.png',
  },
  {
    text: 'We were impressed by how quickly they found us top-tier candidates. They truly care about long-term success.',
    author: 'Emily Johnson',
    company: 'COO, Digital Enterprises',
    logo: '/Images/client-logo3.png',
  },
  {
    text: 'Their professionalism and dedication to delivering results exceeded our expectations. Highly recommended.',
    author: 'Mark Wilson',
    company: 'Director, Growth Solutions',
    logo: '/Images/client-logo4.png',
  },
];

export default Testimonials;
