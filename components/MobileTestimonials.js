import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  text-align: center;
  padding: 60px 20px;
  width: 80%;
  margin: auto;
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 30px;
`;

const Title = styled.h4`
  margin-bottom: 10px;
  color: #00796b;
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 90%;
  margin: 10px;
  max-width: 350px;
  max-height: 500px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const IconWrapper = styled.div`
  background-color: #00796b;
  color: white;
  font-size: 4rem;
  border-radius: 50%;
  padding: 30px;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #333;
  margin: 20px 0px;
`;

const Author = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #00796b;
  margin-bottom: 5px;
`;

const Company = styled.p`
  color: #777;
  margin-bottom: 20px;
`;

const Arrow = styled.button`
  position: absolute;
  top: 67%;
  z-index: 1;
  background-color: transparent;
  cursor: pointer;
  color: #00796b;
  font-size: 2rem;
  border: none;
  padding: 10px;
  transform: translateY(-50%); /* Align vertically to the center */

  ${(props) => (props.left ? 'left: -15px;' : 'right: -15px;')}

  &:focus {
    outline: none;
  }
`;

const testimonialsData = [
  {
    text: 'This is a great service! The team understood our needs and delivered exceptional results.',
    author: 'Jane Doe',
    company: 'CEO, Company A',
  },
  {
    text: 'We couldn\'t have asked for better results. The entire process was smooth and efficient.',
    author: 'Lisa Day',
    company: 'CEO, Company B',
  },
  {
    text: 'The service we received was top-notch, and the team was incredibly responsive to our requests.',
    author: 'John Smith',
    company: 'CTO, Company C',
  },
  {
    text: 'A highly professional experience, delivering excellent talent that perfectly fit our requirements.',
    author: 'Mary Johnson',
    company: 'HR Manager, Company D',
  },
];

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
      <TitleWrapper>
        <Title>Testimonial</Title>
        <Subtitle>What Our Clients Say!</Subtitle>
      </TitleWrapper>

      <TestimonialContainer>
        {testimonialsData.slice(currentIndex, currentIndex + 1).map((testimonial, index) => (
          <TestimonialCard key={index}>
            <IconWrapper>
              <FontAwesomeIcon icon={faUserCircle} />
            </IconWrapper>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <Author>{testimonial.author}</Author>
            <Company>{testimonial.company}</Company>
          </TestimonialCard>
        ))}
      </TestimonialContainer>

      <Arrow left onClick={prevSlide} aria-label="Previous testimonial">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrow>
      <Arrow onClick={nextSlide} aria-label="Next testimonial">
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    </Section>
  );
};

export default Testimonials;
