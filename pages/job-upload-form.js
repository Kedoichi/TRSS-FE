import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #00796b;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  background-color: #00796b;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`;

const JobUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Uploaded:', formData);
    // Submit form data to your backend or API
    setFormData({
      title: '',
      company: '',
      location: '',
      salary: '',
      description: '',
    });
  };

  return (
    <FormContainer>
      <FormTitle>Upload a Job</FormTitle>
      <form onSubmit={handleSubmit}>
        <Label>Job Title</Label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <Label>Company Name</Label>
        <Input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <Label>Salary</Label>
        <Input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <Label>Job Description</Label>
        <Textarea
          name="description"
          rows="6"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <Button type="submit">Submit Job</Button>
      </form>
    </FormContainer>
  );
};

export default JobUploadForm;
