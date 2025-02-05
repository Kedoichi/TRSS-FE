import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ChevronDown, X } from "lucide-react";

const theme = {
  colors: {
    primary: "#72BF78", // Vibrant green for primary elements
    secondary: "#72BF78", // Deep green for text
    background: "white", // Very light green for section background
    hoverBackground: "#ffffff", // Slightly darker light green for hover
    border: "rgba(46, 125, 50, 0.2)", // Subtle green tint for borders and shadows
  },
};

const FAQSection = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h4`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  color: black;
  width: 50%;
  margin: auto;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: auto;
`;

const AccordionItem = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.border};
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;

  ${({ $isActive }) => $isActive && `transform: rotate(180deg);`}
`;

const QuestionText = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const AnswerContainer = styled.div`
  height: ${({ $isActive }) => ($isActive ? "auto" : "0")};
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: ${({ $isActive }) => ($isActive ? "10px" : "0")};
`;

const AnswerText = styled.p`
  font-size: 1rem;
  color: black;
  margin: 0;
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is your recruitment process?",
      answer:
        "Our recruitment process involves understanding your needs, sourcing candidates, conducting interviews, and facilitating job placements.",
    },
    {
      question: "How do you find candidates?",
      answer:
        "We use a variety of channels, including job boards, social media, and networking, to find the best candidates for your role.",
    },
    {
      question: "Do you help with candidate onboarding?",
      answer:
        "Yes, we assist with the entire onboarding process, including document management, scheduling, and ensuring the candidate is ready to start.",
    },
    {
      question: "What is the typical timeframe to fill a position?",
      answer:
        "Depending on the role and level of seniority, it usually takes 2 to 6 weeks to fill a position from start to finish.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <FAQSection>
        <Title>Frequently Asked Questions</Title>
        <Subtitle>All the information you need about our recruitment process.</Subtitle>
        <AccordionContainer>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <AccordionHeader>
                <QuestionText>{item.question}</QuestionText>
                <IconContainer $isActive={activeIndex === index}>
                  {activeIndex === index ? <X size={24} /> : <ChevronDown size={24} />}
                </IconContainer>
              </AccordionHeader>
              <AnswerContainer $isActive={activeIndex === index}>
                <AnswerText>{item.answer}</AnswerText>
              </AnswerContainer>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </FAQSection>
    </ThemeProvider>
  );
};

export default FAQ;
