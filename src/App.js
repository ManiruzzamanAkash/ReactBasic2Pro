
import React, { useState } from "react";
import CounterClass from "./components/CounterClass";
import CounterFunctional from "./components/CounterFunctional";
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

  return (
    <>
      <h2>Tutorial 14 - Component Communication</h2>
      <Test name={name} myAddress={address} pl={programmingLanguages}/>
      <TaskList />
    </>
  )
}

export default App;