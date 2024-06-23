import img from '../../../images/coffee.png'
function CoffeeLoading({ className = '' }) {
  return (
    <div className={className !== '' ? "coffeeContainer " + className : "coffeeContainer"}>
      <img className="coffee" width={'250px'} height={'250px'} src={img} color={'#74512D'} alt='coffee'/>
    </div>
  );
}

export default CoffeeLoading;
