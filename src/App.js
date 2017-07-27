import React, { Component } from 'react';
import './App.css';

import DigitComponent from './DigitComponent';

class TemporalDigitUnit extends Component {
  render() { return (<section className="tablero"> {this.props.children} </section>) };
}

class TableroComponent extends Component {
  render() { return (<section className="tablero"> {this.props.children} </section>) };
}

class App extends Component {
  render() {
    return (
      <TemporalDigitUnit>
        <DigitComponent onClick={this.onClick} display=""/>
        <DigitComponent display="zero"/>
        <DigitComponent display="one"/>
        <DigitComponent display="two"/>
        <DigitComponent display="three"/>
        <DigitComponent display="fourth"/>
        <DigitComponent display="five"/>
        <DigitComponent display="six"/>
        <DigitComponent display="seven"/>
        <DigitComponent display="eight"/>
        <DigitComponent display="nine"/>
      </TemporalDigitUnit>
    );
  }
}

export default App;
