import React, { Component } from 'react';
import './DigitComponent.css';

class DigitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digito: null
        }
        this.onClick = this.onClick.bind(this);
    }
    digitToString(number) {
        let nameNumbers = ["zero", "one", "two", "three", "fourth", "five", "six", "seven", "eight", "nine"];
        if (typeof number === "string") {
            let stringNumber = nameNumbers.indexOf(number);
            return stringNumber === -1 ? 'undefined' : stringNumber;
        }
        return nameNumbers[number];
    }
    componentWillMount() {
        this.state = {
            digito: this.digitToString(this.props.display)
        }
    }

    stateDigitoToString() {
        return this.digitToString(this.state.digito);
    }

    onClick() {
        let numero = this.state.digito;
        this.setState({
            digito: (numero < 9 ? numero + 1 : -1)
        });
    }
    render() {
        return (
            <div onClick={this.onClick} className={"digit " + this.stateDigitoToString()}>
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

DigitComponent.defaultProps = {
    display: ""
}

export default DigitComponent;