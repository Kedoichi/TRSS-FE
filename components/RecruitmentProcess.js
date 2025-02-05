import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faSearch, faCalendar, faExchangeAlt, faFileAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  margin: auto;
  text-align: center;
  padding: 80px 20px;
  background-color: #00796b;
  color: white;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;  
  margin-bottom: 40px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow-x: auto;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  position: relative;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #00796b;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2rem;
  margin: 0 10px;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RecruitmentProcess = () => (
  <Section>
    <Title>Our Recruitment Process</Title>
    <StepsContainer>
      <StepWrapper>
        <Circle>
          <IconWrapper>
            <FontAwesomeIcon icon={faHandshake} />
          </IconWrapper>
        </Circle>
        <StepTitle>Client Engagement</StepTitle>
      </StepWrapper>
      <ArrowIcon icon={faChevronRight} />
      <StepWrapper>
        <Circle>
          <IconWrapper>
            <FontAwesomeIcon icon={faSearch} />
          </IconWrapper>
        </Circle>
        <StepTitle>Candidate Sourcing</StepTitle>
      </StepWrapper>
      <ArrowIcon icon={faChevronRight} />
      <StepWrapper>
        <Circle>
          <IconWrapper>
            <FontAwesomeIcon icon={faCalendar} />
          </IconWrapper>
        </Circle>
        <StepTitle>Interview Process</StepTitle>
      </StepWrapper>
      <ArrowIcon icon={faChevronRight} />
      <StepWrapper>
        <Circle>
          <IconWrapper>
            <FontAwesomeIcon icon={faExchangeAlt} />
          </IconWrapper>
        </Circle>
        <StepTitle>Offer & Negotiation</StepTitle>
      </StepWrapper>
      <ArrowIcon icon={faChevronRight} />
      <StepWrapper>
        <Circle>
          <IconWrapper>
            <FontAwesomeIcon icon={faFileAlt} />
          </IconWrapper>
        </Circle>
        <StepTitle>Placement & Onboarding</StepTitle>
      </StepWrapper>
    </StepsContainer>
  </Section>
);

export default RecruitmentProcess;
