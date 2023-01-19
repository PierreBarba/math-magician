import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;
  return (
    <section className="containerCalculator">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <div className="buttonsContainer">
        <button onClick={handleClick} type="button" className="buttonCalculator">AC</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">+/-</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">%</button>
        <button onClick={handleClick} type="button" className="buttonCalculator color-right">÷</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">7</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">8</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">9</button>
        <button onClick={handleClick} type="button" className="buttonCalculator color-right">x</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">4</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">5</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">6</button>
        <button onClick={handleClick} type="button" className="buttonCalculator color-right">-</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">1</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">2</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">3</button>
        <button onClick={handleClick} type="button" className="buttonCalculator color-right">+</button>
        <button onClick={handleClick} type="button" className="buttonCalculator zero">0</button>
        <button onClick={handleClick} type="button" className="buttonCalculator">.</button>
        <button onClick={handleClick} type="button" className="buttonCalculator color-equal">=</button>
      </div>
    </section>
  );
};

export default Calculator;
