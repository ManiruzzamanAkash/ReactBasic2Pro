import React from "react";
import ReactDOM from "react-dom";

const title = React.createElement(
  "h1",
  {},
  "Welcome to React Basic to Pro - Day 7"
);

const paragraph = React.createElement(
  "p",
  {},
  "Welcome to React Basic to Pro Description Paragraph"
);

const container = React.createElement("div", {}, [title, paragraph]);

ReactDOM.render(container, document.getElementById("root"));
