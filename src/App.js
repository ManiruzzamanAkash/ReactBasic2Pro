
import React, { useState } from "react";

const App = () => {
  
  const [name, setName] = useState('Akash');
  const [level, setLevel] = useState('Intemediate');
  const [age, setAge] = useState(26);
  const [address, setAddress] = useState({
    house: '87/ka',
    city: 'Dhaka'
  });
  const [prorgammings, setProgrammings] = useState(['Java', 'JavaScript', 'PHP']);

  const changeLevel = () =>{
    if(level === 'Intemediate')
      setLevel('Advanced');
    else
      setLevel('Intemediate');
  }

  return (
    <>
      <h2>Class 10</h2>
        <hr/>
        <h3 onClick={() => setName('New Name')}>Name: {name}</h3>
        <h3>Level: <mark>{level}</mark></h3>
        <h5>Age: {age}</h5>
        <h5>Address:</h5>
        <address>
          House: {address.house} <br />
          City: {address.city} <br />
        </address>
        <h5>Favorite Programmings: </h5>
        {
          prorgammings.map((programming, index) => (
            <li key={index}>{programming}</li>
          ))
        }
        <button onClick={changeLevel}>
          Change Level
        </button>
    </>
  )
}

export default App;