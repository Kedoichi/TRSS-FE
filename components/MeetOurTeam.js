import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Section = styled.section`
  margin: 60px 0;
  text-align: center;
`;

const Title = styled.h4`
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

const GridContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  min-height: 30vw;
`;

const CardContainer = styled.div`
  width: 250px;
  overflow: hidden; /* For desktop overlay corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  /* Desktop hover: reveal overlay, pointer events on */
  &:hover .overlay {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 300px;
    margin: 0 auto;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  height: 300px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0 5px;
`;

const Role = styled.p`
  font-size: 1rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s;
  pointer-events: none; /* Not clickable unless active */

  @media (max-width: 768px) {
    /* We'll use inline style to toggle on mobile */
    position: absolute; 
  }
`;

const ReadMoreButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  background-color: #72bf78;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #5ba563;
  }
`;

const TeamMemberCard = ({ name, role, id, activeCard, setActiveCard }) => {
  const router = useRouter();
  const isActive = activeCard === id;

  const handleTap = () => {
    if (window.innerWidth <= 768) {
      // If this card is active, close it; else open it
      setActiveCard(isActive ? null : id);
    }
  };

  const handleReadMore = (e) => {
    e.stopPropagation(); // Prevent toggling overlay when tapping button
    router.push(`/team/${id}`);
  };

  return (
    <CardContainer onClick={handleTap}>
      <ImageContainer>{name.split(" ")[0]}</ImageContainer>
      {/* Desktop: .overlay is shown on hover
          Mobile: use isActive to set inline style (opacity=1, pointerEvents=auto) */}
      <Overlay
        className="overlay"
        style={
          window.innerWidth <= 768 && isActive
            ? { opacity: 1, pointerEvents: "auto" }
            : {}
        }
      >
        <Name>{name}</Name>
        <Role>{role}</Role>
        <ReadMoreButton onClick={handleReadMore}>Read More</ReadMoreButton>
      </Overlay>
    </CardContainer>
  );
};

const MeetOurTeam = () => {
  const [activeCard, setActiveCard] = useState(null);

  const teamMembers = [
    {
      id: "vuong-do",
      name: "Vuong Do",
      role: "Director of Connections/Founder",
    },
    {
      id: "vanessa",
      name: "Vanessa",
      role: "Head of Executive Recruitment",
    },
    // ... more members if needed
  ];

  return (
    <Section>
      <Title>Meet The Team</Title>
      <GridContainer>
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            {...member}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </GridContainer>
    </Section>
  );
};

export default MeetOurTeam;