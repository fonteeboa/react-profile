import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Row, Col } from 'react-bootstrap';
import { Typography, Tooltip } from 'antd';
import companyImage from '../common/images/gpt-dev-terroso.jpg';

const workExperiences = [
  {
    position: 'Tech Lead',
    company: 'Blockbit',
    period: 'Feb 2023 - Present',
    responsibilities: 'Liderança técnica e desenvolvimento de soluções de segurança.',
    logo: 'https://www.blockbit.com/wp-content/uploads/2024/03/cropped-ico-bb-32x32.png',
    link: 'https://www.blockbit.com',
  },
  {
    position: 'Developer',
    company: 'Blockbit',
    period: 'Jun 2022 - Mar 2023',
    responsibilities: 'Desenvolvimento de sistemas de segurança.',
    logo: 'https://www.blockbit.com/wp-content/uploads/2024/03/cropped-ico-bb-32x32.png',
    link: 'https://www.blockbit.com',
  },
  {
    position: 'PHP Developer',
    company: 'DBC Company',
    period: 'Nov 2021 - Jun 2022',
    responsibilities: 'Desenvolvimento de aplicações PHP.',
    logo: 'https://media.licdn.com/dms/image/C4D0BAQFszK2MGQUCUA/company-logo_100_100/0/1668687291660?e=1726704000&v=beta&t=KdVg71016l7bg3jqdgvAVsSq4nnZmQzAEfMX0sMOZL8',
    link: 'https://www.dbccompany.com.br',
  },
  {
    position: 'Full Stack Developer',
    company: 'Teknisa',
    period: 'Apr 2019 - Nov 2021',
    responsibilities: 'Desenvolvimento full stack.',
    logo: 'https://media.licdn.com/dms/image/C560BAQFgwOw-EcXUig/company-logo_100_100/0/1630580201884/teknisaoficial_logo?e=1726704000&v=beta&t=lJuoaJMldX1FAVk8v5slvc7pGk_KgodDoohU5A8hKBI',
    link: 'https://www.teknisa.com',
  },
  {
    position: 'Estagiário de TI',
    company: 'GASMIG',
    period: 'Jun 2018 - Nov 2018',
    responsibilities: 'Suporte e manutenção de sistemas.',
    logo: 'https://media.licdn.com/dms/image/D4D0BAQEGFXwcuQYM9Q/company-logo_100_100/0/1716982652624/gasmig_logo?e=1726704000&v=beta&t=OPWYzjxDVuJIzwNfC_ObdgUdVCEhpo6BousSvrItTUE',
    link: 'https://www.gasmig.com.br',
  },
  {
    position: 'Estagiário de TI',
    company: 'Prefeitura Municipal de Betim',
    period: 'Mar 2015 - Feb 2017',
    responsibilities: 'Desenvolvimento e manutenção de sistemas.',
    logo: 'https://media.licdn.com/dms/image/D4D0BAQG5GDRpXyN9ZA/company-logo_100_100/0/1717425350749/prefeiturabetim_logo?e=1726704000&v=beta&t=XY4ujPNih2p0L75dADnwhAF9DGez2Za_5DteghDI6RU',
    link: 'https://www.betim.mg.gov.br',
  },
];

const Jobs = () => {
  return (
    <>
      <div className="jobs-container">
        <Row className="content-row flex center jobs-content-row">
          <Col xs={24} md={12} className="jobs-image-col  jobs-timeline-col animate__animated animate__fadeIn">
            <Timeline position="alternate" className="jobs-timeline">
              {workExperiences.map((experience, index) => (
                <TimelineItem key={index} className="jobs-timeline-item">
                  <TimelineOppositeContent color="text.secondary">
                    {experience.period}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {index < workExperiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Tooltip title={experience.responsibilities} arrow>
                      <Typography variant="h6" component="span">
                        <a href={experience.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={experience.logo}
                            alt={experience.company}
                            className="company-logo jobs-company-logo"
                          />
                          {experience.company} - {experience.position}
                        </a>
                      </Typography>
                    </Tooltip>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Col>
          <Col xs={24} md={12} className="jobs-image-col animate__animated animate__backInRight">
            <img src={companyImage} alt="Company Overview" className="styled-company-image zoomImg" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Jobs;