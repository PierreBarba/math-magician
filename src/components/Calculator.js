import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="container-calculator">
                <h3 className="result">0</h3>
                <div className="buttonsCalculator">
                    <button type="button" className="btnCalculator">AC</button>
                    <button type="button" className="btnCalculator">+/-</button>
                    <button type="button" className="btnCalculator">%</button>
                    <button type="button" className="btnCalculator color-right">÷</button>
                    <button type="button" className="btnCalculator">7</button>
                    <button type="button" className="btnCalculator">8</button>
                    <button type="button" className="btnCalculator">9</button>
                    <button type="button" className="btnCalculator color-right">x</button>
                    <button type="button" className="btnCalculator">4</button>
                    <button type="button" className="btnCalculator">5</button>
                    <button type="button" className="btnCalculator">6</button>
                    <button type="button" className="btnCalculator color-right">-</button>
                    <button type="button" className="btnCalculator">1</button>
                    <button type="button" className="btnCalculator">2</button>
                    <button type="button" className="btnCalculator">3</button>
                    <button type="button" className="btnCalculator color-right">+</button>
                    <button type="button" className="btnCalculator zero">0</button>
                    <button type="button" className="btnCalculator">.</button>
                    <button type="button" className="btnCalculator color-right">=</button>
                </div>
            </section>
        );
    }
}

export default Calculator;