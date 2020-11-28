import React from "react";
import UserAvatar from "./components/UserAvatar";

const App2 = () => {
  const name = "Akash3";
  const userName = "akash";
  const loginHitCount = 0;

  return (
    <>
      <h1>Welcome to React Basic to Pro - Day 7</h1>
      <p>Welcome to React Basic to Pro Description Paragraph 2</p>
      <p>{`Welcome ${name}`}</p>
      <UserAvatar />
    </>
  );
};

export default App2;
