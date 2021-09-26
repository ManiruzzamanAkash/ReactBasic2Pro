
import React, { useState } from "react";
import "./assets/App.css";
import Value from "./components/Value";
import Context from "./context/Context";

const App = () => {
  const [data, setData] = useState({
    value: 10,
    tasks: [
      'Caculation Task 1',
      'Caculation Task 2',
      'Caculation Task 3',
    ],
    auth: false,
  });

  return (
    <Context.Provider value={{ state: data, setData }}>
      <div className="app">
        <h2>React Context API Example</h2>
        <hr />
        <Value />
      </div>
    </Context.Provider>
  )
}

export default App;