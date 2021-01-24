
import React, { useState } from "react";
import CounterClass from "./components/CounterClass";
import CounterFunctional from "./components/CounterFunctional";
import CounterNew from "./components/CounterNew";
import TaskList from "./components/TaskList";
import Test from "./components/Test";

const App = () => {
  const name = "Maniruzzaman Akash";

  const [address, setAddress] = useState({
    village: 'Mohakhali 87/ka',
    city: 'Dhaka',
    country: 'Bangladesh'
  });

  const [programmingLanguages, setProgrammingLanguages] = useState([
    'Java',
    'PHP',
    'C#',
  ]);

  const changeCityFromParent = () => {
    setAddress({
      village: 'Mohakhali 87/ka',
      city: address.city === 'Dhaka' ? 'Another City' : 'Dhaka',
      country: 'Bangladesh'
    })
  }

  const changeCityFromParentDynamic = (value) => {
    setAddress({
      village: 'Mohakhali 87/ka',
      city: address.city === 'Dhaka' ? value : 'Dhaka',
      country: 'Bangladesh'
    })
  }



  
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>Tutorial 14.2 - Component Communication</h2>
      <Test
        name={name}
        myAddress={address}
        pl={programmingLanguages}
        changeCityFromParent={changeCityFromParent}
        changeCityFromParentDynamic={changeCityFromParentDynamic}
        setProgrammingLanguages={setProgrammingLanguages}
      />

      <button onClick={changeCityFromParent}>
        Change City
      </button>
      <TaskList />
       <TaskList />
      <CounterNew counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default App;