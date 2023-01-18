import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="containerCalculator">
        <h3 className="result">0</h3>
        <div className="buttonsContainer">
          <button type="button" className="buttonCalculator">AC</button>
          <button type="button" className="buttonCalculator">+/-</button>
          <button type="button" className="buttonCalculator">%</button>
          <button type="button" className="buttonCalculator color-right">÷</button>
          <button type="button" className="buttonCalculator">7</button>
          <button type="button" className="buttonCalculator">8</button>
          <button type="button" className="buttonCalculator">9</button>
          <button type="button" className="buttonCalculator color-right">x</button>
          <button type="button" className="buttonCalculator">4</button>
          <button type="button" className="buttonCalculator">5</button>
          <button type="button" className="buttonCalculator">6</button>
          <button type="button" className="buttonCalculator color-right">-</button>
          <button type="button" className="buttonCalculator">1</button>
          <button type="button" className="buttonCalculator">2</button>
          <button type="button" className="buttonCalculator">3</button>
          <button type="button" className="buttonCalculator color-right">+</button>
          <button type="button" className="buttonCalculator zero">0</button>
          <button type="button" className="buttonCalculator">.</button>
          <button type="button" className="buttonCalculator color-right">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
