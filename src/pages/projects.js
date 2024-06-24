// src/components/Projects.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Row, Typography, Alert, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Substitua 'seu-username' pelo seu nome de usuário no GitHub
    axios.get('https://api.github.com/users/fonteeboa/repos')
      .then(response => {
        const reposAux = response.data.filter(item => item.name !== 'fonteeboa');
        if (reposAux.length === 0) {
          setError(true);
        }
        setRepos(reposAux);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do GitHub', error);
        setError(true);
      });
  }, []);

  return (
    <div className='projects-div'>
      <div className='projects-container' data-testid="projects-container">
        <Row className="title-row" justify="center">
          <Title level={2} className="title" data-testid="projects-title">Projetos GitHub</Title>
        </Row>
        <Row justify="center" className="content-row">
          <Col span={24} className="carousel-wrapper">
            {error ? (
              <Alert
                data-testid="projects-alert"
                message="Não foi possível buscar informações da API do GitHub."
                description={
                  <div>
                    <p>Você pode acessar o GitHub diretamente para ver os projetos.</p>
                    <p>
                      <RightOutlined /> Clique no botão flutuante à direita para acessar seu perfil do GitHub.
                    </p>
                  </div>
                }
                type="error"
                showIcon
                className="custom-alert"
              />
            ) : (
              <div className='carouse'>
                <Carousel autoplay="true" arrow="true" className='carousel-container' data-testid="projects-carousel">
                  {repos.map(repo => (
                    <div key={repo.id} className="carousel-slide">
                      <div className="carousel-slide-bg" style={{ backgroundImage: `url(https://opengraph.githubassets.com/1/${repo.full_name})` }} />
                      <div className="carousel-caption">
                        <h3>{repo.full_name}</h3>
                        <p>{repo.description}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
