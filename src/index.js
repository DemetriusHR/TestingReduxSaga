import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NumberContent from "./Number";
import TextContent from "./Text";
import Button from "./Button";

const TestComp = () => {
  console.log("Testcomponent rerendered");
  return <div>Test</div>;
};

const Data = () => (
  <div>
    <h1>Testing Redux Saga</h1>
    <NumberContent />
    <TextContent />
    <TestComp />
    <Button>Change Number</Button>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App>
    <Data />
  </App>,
  rootElement
);
