import React, { useContext } from 'react'
import Context from '../context/Context';
import Calculation from './Calculation'

const Value = () => {
    const {state, setData} = useContext(Context);

    return (
        <div>
            Value - {state.value}
            <br />
            <input type="text" onChange={e => setData({ ...state, value: e.target.value })} />
            <br />
            <button onClick={() => setData({ ...state, value: 200 })}>Update</button>
            <br />

            <Calculation />
        </div>
     );
}

export default Value;