import React from "react";
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
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover .overlay {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
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
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  box-sizing: border-box;

  @media (max-width: 768px) {
    position: relative;
    opacity: 1;
    height: auto;
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

const TeamMemberCard = ({ name, role, id }) => {
  const router = useRouter();

  return (
    <CardContainer>
      <ImageContainer>{name.split(" ")[0]}</ImageContainer>
      <Overlay className="overlay">
        <Name>{name}</Name>
        <Role>{role}</Role>
        <ReadMoreButton onClick={() => router.push(`/team/${id}`)}>Read More</ReadMoreButton>
      </Overlay>
    </CardContainer>
  );
};

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: "vuong-do",
      name: "Vuong Do",
      role: "Director of Connections/Founder",
      description: "Vuong is a visionary leader with a strong background in fostering connections and driving organizational success.",
      email: "vuong.do@oneledger.com.au",
      phone: "+123456789",
      linkedin: "https://www.linkedin.com/in/vuong-do-b3b8b576/",
    },
    {
      id: "vanessa",
      name: "Vanessa",
      role: "Head of Executive Recruitment",
      description: "Vanessa leads executive and recruitment efforts, ensuring businesses are matched with the best talent.",
      email: "admin@talentspreesolutions.com",
      phone: "+123456789",
      linkedin: "https://www.linkedin.com/in/jennylloyd",
    },
  ];

  return (
    <Section>
      <Title>Meet The Team</Title>
      <GridContainer>
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </GridContainer>
    </Section>
  );
};

export default MeetOurTeam;
