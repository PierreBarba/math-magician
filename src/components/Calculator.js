function Calculator() {
  return (
    <div className="container-calculator">
      <input className="calc-input" placeholder="0" type="text" />
      <div className="line">
        <button type="button" className="buttonC">AC</button>
        <button type="button" className="buttonC">+/-</button>
        <button type="button" className="buttonC">%</button>
        <button type="button" className="buttonC color">÷</button>
      </div>
      <div className="line">
        <button type="button" className="buttonC">7</button>
        <button type="button" className="buttonC">8</button>
        <button type="button" className="buttonC">9</button>
        <button type="button" className="buttonC color">x</button>
      </div>
      <div className="line">
        <button type="button" className="buttonC">4</button>
        <button type="button" className="buttonC">5</button>
        <button type="button" className="buttonC">6</button>
        <button type="button" className="buttonC color">-</button>
      </div>
      <div className="line">
        <button type="button" className="buttonC">1</button>
        <button type="button" className="buttonC">2</button>
        <button type="button" className="buttonC">3</button>
        <button type="button" className="buttonC color">+</button>
      </div>
      <div className="line">
        <button type="button" className="buttonC">0</button>
        <button type="button" className="buttonC">.</button>
        <button type="button" className="buttonC color">=</button>
      </div>
    </div>
  );
}

export default Calculator;