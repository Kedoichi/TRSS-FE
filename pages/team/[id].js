import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Section = styled.section`
  max-width: 900px;
  margin: 60px auto;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: #72bf78;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 10px;
`;

const DetailsContainer = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #1b1b1b;
`;

const Role = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #777;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const ContactDetails = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactItem = styled.a`
  font-size: 1.1rem;
  color: #72bf78;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

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

const TeamMemberDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const member = teamMembers.find((member) => member.id === id);

  if (!member) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Section>
        <HeaderContainer>
          <ImageContainer>{member.name.split(" ")[0][0]}</ImageContainer>
          <DetailsContainer>
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
          </DetailsContainer>
        </HeaderContainer>
        <Description>{member.description}</Description>

        <ContactDetails>
          <ContactItem href={`mailto:${member.email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
            {member.email}
          </ContactItem>
          <ContactItem href={`tel:${member.phone}`}>
            <FontAwesomeIcon icon={faPhoneAlt} />
            {member.phone}
          </ContactItem>
          <ContactItem href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            Connect on LinkedIn
          </ContactItem>
        </ContactDetails>
      </Section>
      <Footer />
    </>
  );
};

export default TeamMemberDetails;
