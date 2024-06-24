import React, { useState } from 'react';
import ContainerItens from './containerItens';
import CoffeeLoading from '../common/components/loading/coffe/coffeeLoading';
import ProgressBar from '../common/components/loading/coffe/progressBar';

function App() {
  const [loading, setLoading] = useState(true);
  const [exitClass, setExitClass] = useState(true);
  setTimeout(() => setLoading(false), 4300)
  setTimeout(() => setExitClass(false), 4000)
  const coffeeClassName = exitClass ? '' : 'animate__animated animate__fadeOutLeftBig';
  const constinersClassName = loading ? '' : 'animate__animated animate__fadeIn';
  return (
    <div className='body'>
      <section className='main-content' data-testid='main-content'>
        {loading ?
          <div className={'center height100 flex flex-column ' + coffeeClassName}>
            <CoffeeLoading />
            <ProgressBar />
          </div>
          :
          <div className={constinersClassName}>
            <ContainerItens />
          </div>
        }
      </section>
      <section className='warning-message' data-testid='warning-message'>
      Desculpe, mas esta aplicação não é compatível com telas menores que 320px de largura. Por favor, utilize um dispositivo com uma tela maior.
      </section>
    </div>
  );
}

export default App;
