import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const themeColors = {
  primary: "#72BF78",
  iconHover: "#FEFF9F",
};

const Section = styled.section`
  max-width: 900px;
  margin: 80px auto;
  padding: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${themeColors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    font-size: 3rem;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
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

const ContactIcons = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 15px;
`;

const IconLink = styled.a`
  font-size: 1.8rem;
  color: ${themeColors.primary};
  transition: color 0.3s;

  &:hover {
    color: ${themeColors.iconHover};
  }
`;

const Description = styled.div`
  margin-top: 30px;
  font-size: 1.2rem;
  line-height: 1.8;

  p {
    margin-bottom: 15px;
  }
`;

const teamMembers = [
  {
    id: "vuong-do",
    name: "Vuong Do",
    role: "Director of Connections/Founder",
    description: [
      `Vuong graduated with a Bachelor of Accounting and Finance from Monash University. 
      As the founder of OneLedger, a business offering accounting, finance, and insurance services, 
      Vuong has extensive experience in starting and growing multiple successful businesses, 
      both in Australia and offshore.`,
      `His entrepreneurial journey has given him valuable insights into the challenges of offshoring, 
      leading him to identify a gap in the recruitment market—especially when it comes to ensuring a seamless 
      recruitment process in Australia for offshore ventures.`,
      `Outside of work, Vuong is a passionate sports fan who loves all teams red and black - 
      Chicago Bulls, Essendon Bombers, Man United, and Ferrari. 
      He is also a proud husband and father of two boys and hopes to one day travel to Mars.`,
    ],
    email: "vuong.do@oneledger.com.au",
    phone: "+123456789",
    linkedin: "https://www.linkedin.com/in/vuong-do-b3b8b576/",
  },
  {
    id: "vanessa",
    name: "Vanessa",
    role: "Head of Executive Recruitment",
    description: [
      `Vanessa kicked off her career in the banking industry after college but soon discovered her passion 
      for recruitment when she joined a startup outsourcing company in Cebu.`,
      `With over seven years of experience in end-to-end hiring, she has worked closely with clients in Australia 
      and the US to provide tailored recruitment solutions. She has a knack for finding top talent in Recruitment, 
      Executive Assistance, and Finance roles—always believing that the best candidates aren’t “perfect,” but 
      the ones whose values align with the business.`,
      `Outside of work, Vanessa keeps active with running—she’s conquered a full marathon and plans to make it a yearly goal! 
      She also enjoys functional workouts and loves traveling with family. Game nights are her thing, and she’s always the 
      enthusiastic game master at family parties. When she’s not on the move, she’s hanging out with her adorable three-year-old pup, Rafa.`,
    ],
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
            <ContactIcons>
              <IconLink href={`mailto:${member.email}`} title="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </IconLink>
              <IconLink href={`tel:${member.phone}`} title="Phone">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </IconLink>
              <IconLink href={member.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </IconLink>
            </ContactIcons>
          </DetailsContainer>
        </HeaderContainer>

        <Description>
          {member.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Description>
      </Section>
      <Footer />
    </>
  );
};

export default TeamMemberDetails;