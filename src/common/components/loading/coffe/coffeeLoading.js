import React from 'react';
import img from '../../../images/coffee.png';

function CoffeeLoading({ className = '' }) {
  return (
    <div className={className !== '' ? "coffeeContainer " + className : "coffeeContainer"} data-testid="coffee-container">
      <img className="coffee" width={'250px'} height={'250px'} src={img} color={'#74512D'} alt='coffee' data-testid="coffee-img"/>
    </div>
  );
}

export default CoffeeLoading;
