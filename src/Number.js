import React from "react";
import { connect } from "react-redux";

import { AppContext } from "./Context";
import { getTextColor } from "./RandomColors";

const Number = ({ number, colorNumber }) => {
  console.log("Rerendering Number Component");
  return (
    <div
      style={{
        color: getTextColor(colorNumber),
        backgroundColor: `${colorNumber}`
      }}
    >
      {number} <br />
    </div>
  );
};

const NumberContent = connect(
  ({ number, colorNumber }) => ({ number, colorNumber }),
  null,
  null,
  { context: AppContext }
)(Number);

export default NumberContent;
