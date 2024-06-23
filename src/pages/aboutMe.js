import React from 'react';
import { Typography, Row, Col } from "antd";
import profileImage from '../common/images/profilePicture.jpg';

const { Title, Paragraph } = Typography;

function AboutMe() {
  return (
    <>
      <div className="about-me-container">
        <Row className="about-me-content" gutter={[16, 16]}>
          <Col xs={24} md={6} className="about-me-image-col animate__animated animate__bounceInLeft">
            <img src={profileImage} alt="Profile" className="about-me-image zoomImg" />
          </Col>
          <Col xs={24} md={18}>
            <Title level={2} className="about-me-title">About Me</Title>
            <Paragraph className="about-me-paragraph">
              Over the years, I have worked on various products for companies, ranging from marketing websites to complex solutions and enterprise applications, always focusing on creating fast, elegant, and accessible user experiences. I have worked on projects such as food delivery apps like iFood, point-of-sale systems, embedded projects, cybersecurity project portals, and more.
              Currently, I work at Blockbit as a Tech Lead, driving system improvements and innovations, resolving bugs, and introducing unit tests in React and Golang. I am responsible for defining best practices and project structuring, as well as enhancing product UX, contributing to the protection of thousands of companies and millions of users against digital threats.
              Previously, I was a PHP developer at DBC Company, working remotely on contracts (outsourced to Blockbit), and a developer at Blockbit, where I implemented features using advanced PHP, SQL (PostgreSQL), NoSQL, Git, APIs, JavaScript, jQuery, React, Golang, and Perl, and adopted TDD practices.
            </Paragraph>
            <Paragraph className="about-me-paragraph">
              I was also a Full Stack Developer at Teknisa, working with advanced PHP, Doctrine, SQL (MySQL, Oracle), NoSQL (MongoDB), Git, APIs, JavaScript, jQuery, Vue, and TypeScript.
              My initial experience included internships in IT at GASMIG and the City Hall of Betim, where I assisted with email control, helpdesk support, corporate system maintenance, and printer support, as well as collaborating on system project implementations and solving technical problems.
              Each of these positions has contributed to my expertise in creating thoughtful and inclusive experiences, adhering to web standards, and ensuring high-quality solutions for users.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AboutMe;
