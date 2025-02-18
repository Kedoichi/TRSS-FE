import React, { useEffect, useState } from "react";
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
    description: `Vuong graduated with a Bachelor of Accounting and Finance from Monash University. As the founder of OneLedger, a business offering accounting, finance, and insurance services, he has extensive experience in launching and scaling successful businesses, both in Australia and offshore.

    His entrepreneurial journey exposed him to the challenges of offshoring, leading him to identify a crucial gap in the recruitment market—ensuring a seamless hiring process in Australia for offshore ventures.

    Outside of work, Vuong is a passionate sports fan who supports all teams red and black—Chicago Bulls, Essendon Bombers, Manchester United, and Ferrari. A proud husband and father of two boys, he dreams of one day traveling to Mars.`,
    email: "vuong.do@oneledger.com.au",
    phone: "+123456789",
    linkedin: "https://www.linkedin.com/in/vuong-do-b3b8b576/",
  },
  {
    id: "vanessa",
    name: "Vanessa",
    role: "Head of Executive Recruitment",
    description: `Vanessa started her career in banking but soon found her true passion in recruitment when she joined a startup outsourcing company in Cebu. With over seven years of experience in end-to-end hiring, she has worked closely with clients in Australia and the US to deliver customized recruitment solutions.

    She specializes in sourcing top talent for Recruitment, Executive Assistance, and Finance roles, believing that the best candidates aren’t necessarily “perfect,” but rather those whose values align with a company’s mission.

    Outside of work, Vanessa is an avid runner—having completed a full marathon and planning to make it a yearly goal! She enjoys functional workouts, traveling with her family, and hosting lively game nights. When she’s not staying active, she loves spending time with her adorable three-year-old pup, Rafa.`,
    email: "admin@talentspreesolutions.com",
    phone: "+123456789",
    linkedin: "https://www.linkedin.com/in/jennylloyd",
  },
];

const TeamMemberDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!router.isReady || !isClient) {
    return <p>Loading...</p>;
  }

  const member = teamMembers.find((member) => member.id === id);

  if (!member) return <p>Member not found.</p>;

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
          {isClient && (
            <>
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
            </>
          )}
        </ContactDetails>
      </Section>
      <Footer />
    </>
  );
};

export default TeamMemberDetails;