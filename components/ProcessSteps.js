import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const theme = {
  colors: {
    primary: "#72BF78", // Updated for the title color
    secondary: "#2F5233",
    background: "#E8F5E9",
    text: "#333333",
    mutedText: "#666666",
    stepCircle: "#A0D683", // Updated circle color
    stepText: "#FFFFFF",
  },
};

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 40px 80px;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};  /* Updated color */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-bottom: 40px;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Step = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StepCircle = styled.div`
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.stepCircle};  /* Updated circle color */
  color: ${({ theme }) => theme.colors.stepText};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const StepText = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StepTitle = styled.div`
  font-weight: bold;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.mutedText};
`;

const ImageContainer = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  img {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TextContainer = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const steps = [
  {
    title: "Client Engagement & Job Order",
    description: "Initial client request to discuss and finalize the job specifications and role requirements.",
  },
  {
    title: "Candidate Sourcing & Screening",
    description: "Receiving the job order to identify and submit the initial list of candidates.",
  },
  {
    title: "Interview Process",
    description: "Submitting the shortlist to schedule interviews and completing the interview rounds.",
  },
  {
    title: "Decision, Offer & Negotiation",
    description: "Extending an offer to the selected candidate after the final interview. Negotiations between client and candidate may occur.",
  },
  {
    title: "Placement & Onboarding",
    description: "Confirming the candidate’s start date after the offer is accepted and assisting with onboarding tasks.",
  },
];

const ProcessSteps = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ImageContainer
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Images/Image7.jpg"
            alt="Recruitment Process"
            width={600}
            height={400}
          />
        </ImageContainer>

        <TextContainer>
          <Title>Recruitment Process</Title>
          <Subtitle>Step-by-step guide to how we streamline the recruitment process for you.</Subtitle>
          <StepsContainer>
            {steps.map((step, index) => (
              <Step
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <StepCircle>{index + 1}</StepCircle>
                <StepText>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepText>
              </Step>
            ))}
          </StepsContainer>
        </TextContainer>
      </Container>
    </ThemeProvider>
  );
};

export default ProcessSteps;
