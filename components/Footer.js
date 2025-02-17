import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

const theme = {
  colors: {
    primary: "#72BF78", // Main feature color for background
    secondary: "#A0D683", // Secondary feature color
    text: "#ffffff", // White text
    hoverText: "#D3EE98", // Third feature color for hover text
    border: "rgba(112, 191, 120, 0.2)", // Light green for borders
    icon: "#FEFF9F", // Fourth feature color for icons
  },
};

const FooterContainer = styled.footer`
  padding: 40px 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const SectionText = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
  transition: color 0.3s;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 150px;
  margin-bottom: 10px;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinksItem = styled.li`
  margin-bottom: 5px;
`;

const LinksAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverText};
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const SocialMediaLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.icon};
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverText};
  }
`;

const OpeningHoursText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transition: color 0.3s;
  color: ${({ theme }) => theme.colors.icon};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover ${StyledIcon}, &:hover ${SectionText} {
    color: ${({ theme }) => theme.colors.hoverText};
  }
`;

const footerData = {
  logo: "/Images/demoLogo.png",
  aboutUs: "Talent Spree Solutions connects businesses with top talent through innovative solutions and exceptional service.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Job Openings", href: "/job-openings" },
    { label: "Contact Us", href: "/contact" },
  ],
  socialLinks: [
    { platform: "LinkedIn", href: "https://www.linkedin.com", icon: faLinkedin },
    { platform: "Facebook", href: "https://www.facebook.com", icon: faFacebook },
  ],
  contact: {
    phone: "(+123) 456-7890",
    email: "admin@talentspreesolutions.com",
  },
  openingHours: {
    "Monday - Friday": "9:00 AM - 6:00 PM",
    Saturday: "Closed",
    Sunday: "Closed",
  },
};

const Footer = () => {
  const { logo, aboutUs, quickLinks, socialLinks, contact, openingHours } = footerData;

  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <FooterWrapper>
          <FooterSection>
            <LogoSection>
              <Logo src={logo} alt="Talent Spree Solutions Logo" />
              <SectionText>&copy; {new Date().getFullYear()} Talent Spree Solutions. All rights reserved.</SectionText>
            </LogoSection>
          </FooterSection>
          <FooterSection>
            <SectionTitle>About Us</SectionTitle>
            <SectionText>{aboutUs}</SectionText>
          </FooterSection>
          <FooterSection>
            <SectionTitle>Quick Links</SectionTitle>
            <LinksList>
              {quickLinks.map((link, index) => (
                <LinksItem key={index}>
                  <LinksAnchor href={link.href}>{link.label}</LinksAnchor>
                </LinksItem>
              ))}
            </LinksList>
          </FooterSection>
          <FooterSection>
            <SectionTitle>Opening Hours</SectionTitle>
            {Object.entries(openingHours).map(([day, hours], index) => (
              <OpeningHoursText key={index}>
                {day}: {hours}
              </OpeningHoursText>
            ))}
          </FooterSection>
          <FooterSection>
            <SectionTitle>Follow Us</SectionTitle>
            <SocialMediaLinks>
              {socialLinks.map((social, index) => (
                <SocialMediaLink key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} />
                </SocialMediaLink>
              ))}
            </SocialMediaLinks>
            <SectionTitle>Contact Us</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <StyledIcon icon={faPhoneAlt} />
                <SectionText>{contact.phone}</SectionText>
              </ContactItem>
              <ContactItem>
                <StyledIcon icon={faEnvelope} />
                <SectionText>{contact.email}</SectionText>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterWrapper>
      </FooterContainer>
    </ThemeProvider>
  );
};

export default Footer;
