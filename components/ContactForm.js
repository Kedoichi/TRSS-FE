import React, { useState } from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const theme = {
  colors: {
    background: "rgb(232, 245, 233)", // Soft greenish white for the background
    primaryText: "#72BF78", // Rich dark green for headings and text
    formColor: "#A0D683", // Vibrant green for the form
    secondaryText: "black", // Muted dark green for subtitles and secondary text
    buttonBackground: "#72BF78", // Deep green for buttons
    buttonHover: "#FEFF9F", // Slightly darker green for hover effect
    buttonHoverText: "#72BF78", // White for hover text on buttons
    inputBackground: "#E8F5E9", // Light green for input fields
    inputText: "#1B5E20", // Dark green for input text
    dragDropBackgroundHover: "#D3EE98", // Soft green hover for drag-drop area
    dragDropTextHover: "#004D40", // Dark teal for hover text
    iconColor: "#72BF78", // Icon color to match buttons
    jobOpeningText: "#4CAF50", // Deep green for job opening text
  },
};

const contactData = {
  title: "Contact with Our Team of Experts",
  subtitle: "Get in touch with our team to discuss your project.",
  contactInfo: [
    { icon: faPhoneAlt, text: "+61283245788", action: "copy" },
    { icon: faEnvelope, text: "admin@talentspreesolutions.com", action: "copy" },
    { icon: faMapMarkerAlt, text: "Cebu City, Philippines", action: "link", url: "https://www.google.com/maps?q=Cebu+City,+Philippines" },
  ],
  jobOpening: {
    title: "Want to Join Our Talented Team?",
    text: "Visit Our Job Board",
    link: "/job-openings",
  },
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    phonePlaceholder: "Your Phone Number",
    messagePlaceholder: "Your Message",
    dragDropMessage: "Drag and drop your Resume/CV here or click to upload",
    buttonText: "Send",
  },
};

const ContactUsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px 0 20px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const OuterContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0px;
  width: 55%;
  text-align: center;
  height: 100%;
  justify-content: space-between;
  min-height: 38rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const InnerContactUs = styled.div`
  height: 60%;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 30px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
  display: flex;
  gap: 20px;
  justify-content: start;
  flex-wrap: wrap;

  p {
    display: flex;
    align-items: center;
    margin: 15px 0;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondaryText};

    svg {
      margin-right: 10px;
      color: ${({ theme }) => theme.colors.iconColor};
      font-size: 1.8rem;
    }

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.buttonBackground}; /* Hover color: #55883B */
    }
  }
`;

const JobOpeningContainer = styled(motion.div)`
  margin-top: 30px;
  background: white;
  display: flex;
  flex-direction: row;
  height: 40%;
  padding: 20px;
  padding-bottom: 0px;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InnerJobOpeningContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  text-align: start;

  h2 {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  p {
    color: ${({ theme }) => theme.colors.jobOpeningText};
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  p:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const JobOpeningsImage = styled.div`
  width: 60%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const FormContainer = styled(motion.form)`
  background-color: ${({ theme }) => theme.colors.formColor}; /* Changed to solid color */
  color: white;
  padding: 20px;
  width: 35%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  h2 {
    margin-bottom: 15px;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 15px;
    margin-top: 40px;
  }
`;

const Input = styled(motion.input)`
  padding: 12px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputText};

  &:focus {
    outline: none;
    background-color: #fff;
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 12px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputText};
  resize: vertical;

  &:focus {
    outline: none;
    background-color: #fff;
  }
`;

const Button = styled(motion.button)`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.buttonHoverText};
  }
`;

const DragDropArea = styled(motion.div)`
  border: 2px dashed white;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dragDropBackgroundHover};
    color: ${({ theme }) => theme.colors.dragDropTextHover};
  }
`;

const ContactForm = () => {
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { file, phone });
  };

  return (
    <ThemeProvider theme={theme}>
      <ContactUsContainer>
        <OuterContactUs>
          <ContactContainer>
            <InnerContactUs>
              <Title>{contactData.title}</Title>
              <Subtitle>{contactData.subtitle}</Subtitle>
              <ContactInfo>
                {contactData.contactInfo.map((info, index) => (
                  <motion.p
                    key={index}
                    onClick={() =>
                      info.action === "copy"
                        ? navigator.clipboard.writeText(info.text)
                        : window.open(info.url, "_blank")
                    }
                  >
                    <FontAwesomeIcon icon={info.icon} />
                    {info.text}
                  </motion.p>
                ))}
              </ContactInfo>
            </InnerContactUs>

            <JobOpeningContainer>
              <InnerJobOpeningContainer>
                <h2>{contactData.jobOpening.title}</h2>
                <p onClick={() => window.open(contactData.jobOpening.link, "_blank")}>
                  {contactData.jobOpening.text}
                  <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                </p>
              </InnerJobOpeningContainer>
              <JobOpeningsImage />
            </JobOpeningContainer>
          </ContactContainer>

          <FormContainer onSubmit={handleSubmit}>
            <h2>Let's Talk</h2>
            <Input type="text" placeholder={contactData.form.namePlaceholder} required />
            <Input type="email" placeholder={contactData.form.emailPlaceholder} required />
            <Input
              type="text"
              placeholder={contactData.form.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <TextArea rows="4" placeholder={contactData.form.messagePlaceholder} required />
            <DragDropArea>
              <input
                type="file"
                id="file-input"
                accept=".pdf"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              {file ? <p>{file.name}</p> : <p>{contactData.form.dragDropMessage}</p>}
            </DragDropArea>
            <Button type="submit">{contactData.form.buttonText}</Button>
          </FormContainer>
        </OuterContactUs>
      </ContactUsContainer>
    </ThemeProvider>
  );
};

export default ContactForm;
