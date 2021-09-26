import React, { useContext } from 'react'
import Context from '../context/Context';

const Calculation = () => {
    const {state} = useContext(Context);
    const {value, tasks} = state;
    const multiplication = value * 10;

    return (
        <div>
            Value in Calculation - {multiplication}
            <br />
            {
                tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))
            }
        </div>
    );
}

export default Calculation;