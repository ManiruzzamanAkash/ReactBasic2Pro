import React, { useState } from 'react'

const CounterFunctional = () => {
    const [counter, setCounter] = useState(0);

    const printDisabledDecrement = () => {
        return (
            <button className={"counter-button-disabled"}>
                -
            </button>
        )
    }

    const printEnableDecrement = () => {
        return (
            <button className={"counter-button"} onClick={() => setCounter(counter - 1)}>
                -
            </button>
        )
    }

    return ( 
        <>
            <button className="counter-button" onClick={() => setCounter(counter + 1)}>
                +
            </button>
            <span className="counter">
                {counter}
            </span>
            
            {/* <button 
                className={counter !== 0 ? "counter-button" : "counter-button-disabled" }
                onClick={() => counter !== 0 ? setCounter(counter - 1) : ''}
            >
            -
            </button> */}

            {counter !== 0 &&  printEnableDecrement()}
            {counter === 0 &&  printDisabledDecrement()}

            <p>
                {
                    counter === 0 ? "Zero" : "Not Zero"
                }
            </p>
            <p>
                {
                    counter === 0 ? "Zero" : (counter > 0 ? "Greater Zero" : "Less than Zero")
                }
            </p>
            <p>
                {
                    counter === 0 && <div>
                        Hello, it's Zero, Please change your data
                    </div>
                }
            </p>
        </>
     );
}
 
export default CounterFunctional;