import React, { useState } from 'react';
import ContainerItens from './containerItens';
import CoffeeLoading from '../common/components/loading/coffe/coffeeLoading';
import ProgressBar from '../common/components/loading/coffe/progressBar';

function App() {
  const [loading, setLoading] = useState(true);
  const [exitClass, setExitClass] = useState(true);
  setTimeout(() => setLoading(true), 4300)
  setTimeout(() => setExitClass(true), 4000)
  const coffeeClassName = exitClass ? '' : 'animate__animated animate__fadeOutLeftBig';
  const constinersClassName = loading ? '' : 'animate__animated animate__fadeIn';
  return (
    <div className="body">
      {loading ?
        <div className={"center height100 flex flex-column " + coffeeClassName}>
          <CoffeeLoading />
          <ProgressBar />
        </div>
        :
        <div className={constinersClassName}>
          <ContainerItens />
        </div>
      }
    </div>
  );
}

export default App;
