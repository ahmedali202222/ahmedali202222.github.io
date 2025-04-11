import React from 'react';
import './styles.css'; // Ensure you have the CSS file
import { useNavigate } from 'react-router-dom';

const Education = () => {
    const navigate = useNavigate();

  return (
    <div className="education-container">
      <h1 className="edu-title">My Education</h1>

      <div className="edu-card">
        <h2>Bachelor of Science in Computer Science</h2>
        <p><strong>[Your University Name]</strong> – Graduation Year: 2024</p>
        <p>Relevant Coursework: Data Structures, Algorithms, Software Engineering, AI & Machine Learning.</p>
      </div>

      <h2 className="cert-title"> Certifications</h2>
      <div className="cert-container">
        <div className="cert-card">AWS Certified Solutions Architect</div>
        <div className="cert-card">Google IT Support Professional Certificate</div>
        <div className="cert-card">PLC Programming & Automation (Mitsubishi PLC)</div>
        <div className="cert-card">SQL for Data Science Certification</div>
        <div className="cert-card">Machine Learning & AI Fundamentals</div>
        <div className="cert-card">React & Frontend Development Certification</div>
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
      Back to Portfolio
    </button>    </div>
  );
};

export default Education;
