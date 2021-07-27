
import React, { useState, useMemo } from "react";
import Footer from "./Footer";
const App = () => {

  const [amount, setAmount] = useState(0);
  const [data, setData] = useState(0);

  const calculationBigFormula = (amount) => {
    console.log('Enter Func');
    // Get data from api

    //set data here...
    return amount + randomNumber(1, 4);
  }

  const calculatedAmount = useMemo(() => calculationBigFormula(amount));

  const clickCalculateAmount = () => {
    setAmount(randomNumber(1, 4));
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  return (
    <div className="app">
      <h2>useMemo Hook React</h2>
      <hr />
      <p>Amount - {amount}</p>
      <button onClick={clickCalculateAmount}>Update Amount</button>
      <p>Calc Amount - {calculatedAmount}</p>

      <button onClick={() => setData(randomNumber(1, 4)) }>Update data</button>
      <Footer data={data} />
    </div>
  )
}

export default App;