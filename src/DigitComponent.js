import React, { Component } from 'react';
import './DigitComponent.css';

class DigitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digito: 10,
        }
    }

    componentDidMount() {
        //Simulate init state
        setTimeout(()=> {
            this.setState( { digito: 0 })
        }, 2000)
    }

    digitToString(number) {
        let nameNumbers = ["zero", "one", "two", "three", "fourth", "five", "six", "seven", "eight", "nine"];
        if (typeof number === "string") {
            let stringNumber = nameNumbers.indexOf(number);
            return stringNumber === -1 ? 'undefined' : stringNumber;
        }
        return nameNumbers[number];
    }

    stateDigitoToString() {
        return this.digitToString(this.state.digito);
    }

    handleDigit(type) {
        let { digito } = this.state;
        if(digito === 10) return false;
        switch (type) {
            case 'ADD':
                digito++;
                digito = digito > 9 ? 0 : digito;
                break;
            case 'SUBTRACT':
                digito--;
                digito = digito < 0 ? 9 : digito;
                break;
        }
        this.setState({ digito });
    }

    render() {
        return (
            <div
                onClick={() => this.handleDigit('ADD')}
                onContextMenu={() => this.handleDigit('SUBTRACT')}
                className={"digit " + this.stateDigitoToString()}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default DigitComponent;