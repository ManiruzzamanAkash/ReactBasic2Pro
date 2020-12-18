import React, { useState } from 'react'

const CounterFunctional = () => {
    const [counter, setCounter] = useState(0);
    return ( 
        <>
            <button className="counter-button" onClick={() => setCounter(counter + 1)}>
                +
            </button>
            <span className="counter">
                {counter}
            </span>
            <button className="counter-button" onClick={() => setCounter(counter - 1)}>
            -
            </button>
        </>
     );
}
 
export default CounterFunctional;