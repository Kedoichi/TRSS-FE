import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  background-color: #00796b;
  color: white;
  margin: 20px auto;
  width: 100%;
  height: 15vw;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    height: auto;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Image = styled.img`
  max-width: 30%;
  height: auto;
  margin: 20px 0 0 0;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    margin: 20px auto;
  }
`;

const Button = styled.a`
  padding: 10px 20px;
  font-size: 1rem;
  color: #00796b;
  background-color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #005c4f;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    width: 100%;
    padding: 12px 0;
  }
`;

const CallToAction = () => (
  <Container>
    <TextContainer>
      <Title>Let us drive your success story</Title>
      <Description>See how our consulting services can help you achieve your business goals.</Description>
    </TextContainer>
    
    <Image src="https://via.placeholder.com/600x300" alt="Success Illustration" />
    
    <Button href="/contact">Get in Touch</Button>
  </Container>
);

export default CallToAction;
