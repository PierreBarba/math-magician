import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="containerCalculator">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttonsContainer">
          <button onClick={this.handleClick} type="button" className="buttonCalculator">AC</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">+/-</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">%</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator color-right">÷</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">7</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">8</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">9</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator color-right">x</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">4</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">5</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">6</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator color-right">-</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">1</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">2</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">3</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator color-right">+</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator zero">0</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator">.</button>
          <button onClick={this.handleClick} type="button" className="buttonCalculator color-equal">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
