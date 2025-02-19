import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const theme = {
  colors: {
    primary: "#72BF78",
    secondary: "#1B5E20",
    background: "#FFFFFF",
    text: "#333",
    mutedText: "#666",
    jobTypeBackground: "#FEFF9F",
    jobTypeText: "#72BF78",
    jobTypeBorder: "#72BF78",
    buttonBackground: "#72BF78",
    buttonHover: "#FEFF9F",
    buttonHoverText: "#72BF78",
    buttonHoverBorder: "#72BF78",
    iconColor: "#72BF78",
  },
};

const JobsSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  margin: 0 60px;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.mutedText};
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto 20px;
`;

const JobCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: start;
  width: 100%;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CompanyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const JobType = styled.p`
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.jobTypeBackground};
  color: ${({ theme }) => theme.colors.jobTypeText};
  border: 2px solid ${({ theme }) => theme.colors.jobTypeBorder};
  border-radius: 5px;
  font-size: 0.9rem;
`;

const JobTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 20px 0 10px;
`;

const JobDetailsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const JobLocation = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const JobDate = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ApplyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.background};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.buttonHoverText};
    border: 2px solid ${({ theme }) => theme.colors.buttonHoverBorder};
  }
`;

const PopularJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data?.data?.jobs || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <JobsSection>Loading jobs...</JobsSection>;
  if (error)
    return (
      <JobsSection>
        <SectionTitle>Error</SectionTitle>
        <SectionSubtitle>{error}</SectionSubtitle>
      </JobsSection>
    );

  return (
    <ThemeProvider theme={theme}>
      <JobsSection>
        <SectionTitle>Explore Popular Jobs</SectionTitle>
        <SectionSubtitle>
          Discover top opportunities tailored to your career aspirations.
        </SectionSubtitle>
        {jobs.length === 0 ? (
          <p>No jobs available at the moment.</p>
        ) : (
          <JobCardContainer>
            {jobs.map(({ _id, company, type, title, location, createdAt }) => (
              <JobCard key={_id}>
                <CompanyRow>
                  <CompanyName>{company}</CompanyName>
                  <JobType>{type}</JobType>
                </CompanyRow>
                <JobTitle>{title}</JobTitle>
                <JobDetailsWrapper>
                  <JobLocation>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: theme.colors.iconColor }} />
                    {location}
                  </JobLocation>
                  <JobDate>
                    <FontAwesomeIcon icon={faCalendarAlt} style={{ color: theme.colors.iconColor }} />
                    {new Date(createdAt).toLocaleDateString()}
                  </JobDate>
                </JobDetailsWrapper>
                <ApplyButton>Apply Now</ApplyButton>
              </JobCard>
            ))}
          </JobCardContainer>
        )}
      </JobsSection>
    </ThemeProvider>
  );
};

export default PopularJobs;
