import React from 'react'

const CounterNew = (props) => {
    const counter = props.counter;
    const setCounter = props.setCounter;

    return ( 
        <>
            <button className="counter-button" onClick={() => setCounter(counter + 1)}>
                +
            </button>
            <span className="counter">
                {counter}
            </span>
            <button className={"counter-button"} onClick={() => setCounter(counter - 1)}>
                -
            </button>
        </>
     );
}
 
export default CounterNew;