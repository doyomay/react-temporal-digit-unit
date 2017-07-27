import React, { Component } from 'react';
import './App.css';

import DigitComponent from './DigitComponent';
import moment from 'moment';

class TemporalDigitUnit extends Component {
  render() { return (<section className="tablero"> {this.props.children} </section>) };
}

class TableroSeparetorComponent extends Component {
  render() { 
    return (
    <section className="tablero--separator"> 
      <aside className="tablero--wrap">
        <TableroDigitContainerComponent name="MONTH" longitud="3"/>
        <TableroDigitContainerComponent name="DAY" longitud="2"/>
        <TableroDigitContainerComponent name="YEAR" longitud="4"/>
        <TableroDigitContainerComponent name="HOUR" longitud="2"/>
        <TableroDigitContainerComponent name="MIN" longitud="2"/>
      </aside>
      <aside className="tablero--wrap">
        <h2 className="tablero--separator__name">{this.props.name} </h2>
      </aside>
    </section>
    )};
}

class TableroDigitContainerComponent extends Component {
  render() {
    const indents = [];
    for (var i = 0; i < this.props.longitud; i++) {
      indents.push(<DigitComponent display="" key={i} />);
    }
   return (
     <aside className="tablero--digit-container">
      <h3>{this.props.name}</h3>
      <aside className="tablero--digit-container__wrap"> 
        {indents}
      </aside>
     </aside>
     ); 
  }
}

class App extends Component {
  render() {
    return (
      <TemporalDigitUnit>
        <TableroSeparetorComponent name="DESTINATION TIME"/>
        <TableroSeparetorComponent name="PRESENT TIME"/>
        <TableroSeparetorComponent name="LAST TIME DEPARTED"/>
      </TemporalDigitUnit>
    );
  }
}

export default App;
