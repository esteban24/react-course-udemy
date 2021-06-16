import React, { useState } from 'react'
import PropTypes from 'prop-types';
import App from '../App';


const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value ); // return [value1, value2]

    const handleAdd = (e) => {
        setCounter( counter + 1 );
        // setCounter((counter) => counter + 1);
    }

    const handleSubstract = (e) => {
        setCounter( counter - 1 );
        // setCounter((counter) => counter - 1);
    }

    const handleReset = (e) => {
        // setCounter( counter + 1 );
        setCounter(value);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+</button>
            <button onClick={ handleSubstract }>-</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

App.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

