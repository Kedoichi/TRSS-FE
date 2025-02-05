import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

// Lazy load Header and Footer
const Header = React.lazy(() => import('../components/Header'));
const Footer = React.lazy(() => import('../components/Footer'));

const JobPageContainer = styled.div`
  padding: 40px 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const JobHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const JobTitle = styled.h1`
  font-size: 3rem;
  color: #00796b;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const JobLocation = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-top: 10px;
`;

const JobDate = styled.p`
  font-size: 1.1rem;
  color: #00796b;
  margin-top: 10px;
`;

const Salary = styled.p`
  font-size: 1.2rem;
  color: #00796b;
  margin-top: 10px;
`;

const JobType = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-top: 10px;
`;

const JobDescriptionContainer = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border-radius: 8px;
  max-width: 900px;
  margin: 0 auto;
`;

const JobDescriptionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #00796b;
`;

const JobDescriptionText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  text-align: justify;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  color: #00796b;
  margin-top: 30px;
  text-transform: uppercase;
  font-weight: 600;
`;

const SectionText = styled.ul`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  list-style-type: disc;
  margin-left: 20px;
`;

const ApplyButton = styled.button`
  background-color: #00796b;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #004d40;
  }
`;

const JobDescription = () => {
  const [jobDetails] = useState({
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Ltd.',
    location: 'Sydney, Australia',
    date: '2 Days Ago',
    salary: '$90,000 - $120,000/year',
    jobType: 'Full-time',
    description: `As a Senior Software Engineer, you will be responsible for leading the development and implementation of software solutions for various business needs. Your primary focus will be on creating scalable and high-performance applications with a strong focus on quality, security, and maintaining software integrity.

    You will work closely with cross-functional teams to define system requirements and provide insights into design and development decisions. You will also mentor junior developers and ensure adherence to best practices and coding standards.`,
    aboutCompany: `Tech Innovations Ltd. is a leading tech company specializing in innovative software solutions. We work with businesses to solve complex challenges through cutting-edge technology and strategic consulting. Our mission is to drive digital transformation and empower companies to succeed in a rapidly changing world.`,
    requiredSkills: [
      'Strong experience in software development (Java, C++, Python)',
      'Familiarity with cloud platforms (AWS, Azure, GCP)',
      'Proficient in version control tools like Git',
      'Experience with Agile methodologies',
      'Excellent problem-solving and debugging skills',
      'Strong communication skills, both written and verbal'
    ],
    requiredExperience: [
      'Minimum 5 years of experience in software engineering',
      'Experience leading technical projects and mentoring junior developers',
      'Previous work in an agile development environment',
      'Bachelor\'s degree in Computer Science, Engineering, or a related field'
    ],
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <JobPageContainer>
        <JobHeader>
          <JobTitle>{jobDetails.title}</JobTitle>
          <CompanyName>{jobDetails.company}</CompanyName>
          <JobLocation>{jobDetails.location}</JobLocation>
          <JobDate>{jobDetails.date}</JobDate>
          <Salary>{jobDetails.salary}</Salary>
          <JobType>{jobDetails.jobType}</JobType>
        </JobHeader>

        <JobDescriptionContainer>
          <JobDescriptionTitle>Job Description</JobDescriptionTitle>
          <JobDescriptionText>{jobDetails.description}</JobDescriptionText>

          <SectionTitle>About the Company</SectionTitle>
          <JobDescriptionText>{jobDetails.aboutCompany}</JobDescriptionText>

          <SectionTitle>Required Skills</SectionTitle>
          <SectionText>
            {jobDetails.requiredSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </SectionText>

          <SectionTitle>Required Experience</SectionTitle>
          <SectionText>
            {jobDetails.requiredExperience.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </SectionText>
        </JobDescriptionContainer>


        <div style={{ textAlign: 'center' }}>
          <ApplyButton>Apply Now</ApplyButton>
        </div>
      </JobPageContainer>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default JobDescription;
