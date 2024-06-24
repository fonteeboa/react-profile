import React, { useState, useEffect } from 'react';
import { Steps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMugHot, faBlender, faThermometerHalf, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const { Step } = Steps;

const steps = [
  {
    id: 0,
    title: 'Moendo Grãos',
    description: 'Desfrute do aroma fresco dos grãos sendo moídos para obter o melhor sabor.',
    icon: <FontAwesomeIcon icon={faCoffee} />,
  },
  {
    id: 1,
    title: 'Fervendo Água',
    description: 'Aquecendo a água até a temperatura perfeita para liberar os sabores do café.',
    icon: <FontAwesomeIcon icon={faThermometerHalf} />,
  },
  {
    id: 2,
    title: 'Preparando Café',
    description: 'Misturando a água quente com os grãos moídos para criar uma bebida rica e aromática.',
    icon: <FontAwesomeIcon icon={faBlender} />,
  },
  {
    id: 3,
    title: 'Servindo uma Xícara',
    description: 'Vertendo o café recém-preparado em uma xícara para você saborear.',
    icon: <FontAwesomeIcon icon={faMugHot} />,
  },
  {
    id: 4,
    title: 'Tudo Pronto!',
    description: 'Agora é só relaxar e aproveitar seu café feito com carinho.',
    icon: <FontAwesomeIcon icon={faLocationDot} />,
  },
];

function ProgressBar({ className = '' }) {
  const [currentDirection, setCurrentDirection] = useState('horizontal');
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 700);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    const updateDirection = () => { setCurrentDirection(window.innerWidth > 768 ? 'horizontal' : 'vertical'); };
    updateDirection();
    window.addEventListener('resize', updateDirection);
    return () => { window.removeEventListener('resize', updateDirection); };
  }, []);

  return (
    <div className={className !== '' ? "progress-container " + className : "progress-container"} data-testid="progress-container">
      <div className="custom-progress-bar" data-testid="custom-progress-bar">
        <Steps
          current={currentStep}
          labelPlacement="vertical"
          direction={currentDirection}
          data-testid="steps"
        >
          {steps.map((item, index) => (
            <Step
              key={index}
              title={item?.title}
              icon={item?.icon}
              data-testid={`step-${index}`}
            />
          ))}
        </Steps>
        <div className="steps-content" style={{ marginTop: '20px', textAlign: 'center' }} data-testid="steps-content">
          {steps[currentStep] ? steps[currentStep].description : 'Loading page..'}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;