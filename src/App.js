import React, { Component } from 'react';
import 'normalize.css';
import './App.css';

import DigitComponent from './DigitComponent';
import moment from 'moment';

class TemporalDigitUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                present: moment().format('MMM-DD-YYYY-hh-mm'),
                destination: '',
                last_time: ['oct-21-2015-07-28']
            }
        }
    }

    componentDidMount() {
        console.log(this.state.dates)
    }

    render() {
        return (
            <section className="tablero"> {this.props.children} </section>
        );
    };
}

const TableroSeparetorComponent = (props) => {
    const { name, onHandler } = props;
    return (
        <section className="tablero--separator">
            <aside className="tablero--wrap">
                <TableroDigitContainerComponent name="MONTH" longitud={3} />
                <TableroDigitContainerComponent name="DAY" longitud={2} />
                <TableroDigitContainerComponent name="YEAR" longitud={4} />
                <TableroDigitContainerComponent name="HOUR" longitud={2} />
                <TableroDigitContainerComponent name="MIN" longitud={2} />
            </aside>
            <aside className="tablero--wrap">
                <h2 className="tablero--separator__name" onClick={() => onHandler()}>{name}</h2>
            </aside>
        </section>
    )
}

const TableroDigitContainerComponent = (props) => {
    const { name, longitud } = props;
    const indents = Array.from(Array(longitud), () => <DigitComponent display="" key={Math.floor(10 * Math.random())}/>);
    return (
        <aside className="tablero--digit-container">
            <h3>{name}</h3>
            <aside className="tablero--digit-container__wrap">
                {indents}
            </aside>
        </aside>
    );
};

class App extends Component {
  render() {
    return (
      <TemporalDigitUnit>
        <TableroSeparetorComponent name="DESTINATION TIME" onHandler={() => console.log('DESTINATION TIME')} />
        <TableroSeparetorComponent name="PRESENT TIME" onHandler={() => console.log('PRESENT TIME')}/>
        <TableroSeparetorComponent name="LAST TIME DEPARTED" onHandler={() => console.log('LAST TIME DEPARTED')}/>
      </TemporalDigitUnit>
    );
  }
}

export default App;
