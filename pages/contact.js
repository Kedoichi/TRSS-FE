import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactData = {
  hero: {
    title: "Contact Us",
    subtitle:
      "Thank you for your interest in our services. Please complete the form below, and our team will get in touch with you shortly.",
  },
  contactInfo: [
    { icon: faPhoneAlt, text: "+61283245788", action: "copy", type: "phone" },
    { icon: faEnvelope, text: "admin@talentspreesolutions.com", action: "copy", type: "email" },
    {
      icon: faMapMarkerAlt,
      text: "Cebu City, Philippines",
      action: "link",
      url: "https://www.google.com/maps?q=Cebu+City,+Philippines",
    },
  ],
  form: {
    buttonText: "Contact us",
  },
};

const HeroSection = styled.section`
  background-color: #72bf78;
  color: ${({ theme }) => theme.primaryText || "#ffffff"};
  text-align: center;
  padding: 100px 20px;
  position: relative;
  z-index: 1;
  min-height: 60vh;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 50px 20px;
    min-height: 50vh;
  }
`;

const HeroContent = styled.div`
  padding: 20px;
  display: inline-block;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  bottom: -75px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactInfoBox = styled.div`
  background-color: #a0d683;
  color: white;
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p {
    margin-top: 5px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  &:hover {
    background-color: #d3ee98;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 5px;
  color: white;
`;

const FormSection = styled.section`
  background-color: white;
  padding: 40px;
  max-width: 800px;
  margin: 20px auto;
  margin-bottom: 80px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
    margin-top: 50px;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: #72bf78;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormSubtitle = styled.p`
  font-size: 1.2rem;
  color: #2f5233;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #e8f5e9;
  color: #1b5e20;

  &:focus {
    outline: none;
    border-color: #d3ee98;
  }
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #e8f5e9;
  color: #1b5e20;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #72bf78;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a0d683;
    color: #ffffff;
  }
`;

const FileInput = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #e8f5e9;
`;

const PaddingAdjustment = styled.div`
  padding-top: 120px;

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

const StickyHeader = styled.div`
  position: fixed;
  top: ${({ $showHeader }) => ($showHeader ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: #f1faf4;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const handleCopy = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${text} copied to clipboard!`);
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
    });
};

const handleLocationClick = (url) => {
  window.open(url, "_blank");
};

const ContactUs = () => {
  const [hydrated, setHydrated] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cvFile, setCvFile] = useState(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hydrated, lastScrollY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
    console.log("Form submitted");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setCvFile(file);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  if (!hydrated) {
    return (
      <>
        <StickyHeader $showHeader={true}>
          <Header />
        </StickyHeader>

        <HeroSection>
          <HeroContent>
            <HeroTitle>{contactData.hero.title}</HeroTitle>
            <HeroSubtitle>{contactData.hero.subtitle}</HeroSubtitle>
          </HeroContent>
          <ContactInfoContainer>
            {contactData.contactInfo.map((info, index) => (
              <ContactInfoBox
                key={index}
                onClick={() =>
                  info.action === "copy"
                    ? handleCopy(info.text)
                    : info.action === "link" && handleLocationClick(info.url)
                }
              >
                <IconWrapper>
                  <FontAwesomeIcon icon={info.icon} />
                </IconWrapper>
                <p>{info.text}</p>
              </ContactInfoBox>
            ))}
          </ContactInfoContainer>
        </HeroSection>

        <PaddingAdjustment />

        <FormSection>
          <FormTitle>Send Us a Message</FormTitle>
          <FormSubtitle>
            We’d love to hear from you. Please complete the form below and we will get in touch with you shortly.
          </FormSubtitle>

          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="First Name" required />
            <Input type="text" placeholder="Last Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" required />
            <Select required>
              <option value="">How can we help you?</option>
              <option value="Recruitment">Recruitment</option>
              <option value="Consulting">Consulting</option>
              <option value="Job Seekers">Job Seekers</option>
            </Select>

            <FileInput type="file" accept=".pdf" onChange={handleFileChange} />
            {cvFile && <p>{cvFile.name}</p>}

            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox type="checkbox" required />
              <label>
                Yes, I would like to receive regular updates. I understand that I can withdraw my consent at any time.
              </label>
            </div>
            <Button type="submit">Contact us</Button>
          </Form>

          {showConfirmation && (
            <div style={{ color: "green", textAlign: "center" }}>
              Your form has been submitted successfully!
            </div>
          )}
        </FormSection>

        <Footer />
      </>
    );
  }

  return (
    <>
      <StickyHeader $showHeader={showHeader}>
        <Header />
      </StickyHeader>

      <HeroSection>
        <HeroContent>
          <HeroTitle>{contactData.hero.title}</HeroTitle>
          <HeroSubtitle>{contactData.hero.subtitle}</HeroSubtitle>
        </HeroContent>
        <ContactInfoContainer>
          {contactData.contactInfo.map((info, index) => (
            <ContactInfoBox
              key={index}
              onClick={() =>
                info.action === "copy"
                  ? handleCopy(info.text)
                  : info.action === "link" && handleLocationClick(info.url)
              }
            >
              <IconWrapper>
                <FontAwesomeIcon icon={info.icon} />
              </IconWrapper>
              <p>{info.text}</p>
            </ContactInfoBox>
          ))}
        </ContactInfoContainer>
      </HeroSection>

      <PaddingAdjustment />

      <FormSection>
        <FormTitle>Send Us a Message</FormTitle>
        <FormSubtitle>
          We’d love to hear from you. Please complete the form below and we will get in touch with you shortly.
        </FormSubtitle>

        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="First Name" required />
          <Input type="text" placeholder="Last Name" required />
          <Input type="email" placeholder="Email Address" required />
          <Input type="tel" placeholder="Phone Number" required />
          <Select required>
            <option value="">How can we help you?</option>
            <option value="Recruitment">Recruitment</option>
            <option value="Consulting">Consulting</option>
            <option value="Job Seekers">Job Seekers</option>
          </Select>

          <FileInput type="file" accept=".pdf" onChange={handleFileChange} />
          {cvFile && <p>{cvFile.name}</p>}

          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox type="checkbox" required />
            <label>
              Yes, I would like to receive regular updates. I understand that I can withdraw my consent at any time.
            </label>
          </div>
          <Button type="submit">Contact us</Button>
        </Form>

        {showConfirmation && (
          <div style={{ color: "green", textAlign: "center" }}>
            Your form has been submitted successfully!
          </div>
        )}
      </FormSection>

      <Footer />
    </>
  );
};

export default ContactUs;