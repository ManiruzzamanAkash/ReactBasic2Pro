
import React from "react";
import CounterClass from "./components/CounterClass";
import CounterFunctional from "./components/CounterFunctional";

const App = () => {
  
  return (
    <>
      <h2>Counter App</h2>
      <hr/>
      <p>Ex: Functional Component</p>
      <CounterFunctional />

      <p>Ex: Class Component</p>
      <CounterClass />
    </>
  )
}

export default App;