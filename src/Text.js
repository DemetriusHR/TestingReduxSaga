import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AppContext } from "./Context";
import { getTextColor } from "./RandomColors";

const Text = ({ colorText, text, dispatch }) => {
  useEffect(() => {
    dispatch({ type: "CHANGE_TEXT_ASYNC" });
  }, [text]);

  return (
    <div
      style={{
        color: getTextColor(colorText),
        backgroundColor: `${colorText}`
      }}
    >
      {text} <br />
    </div>
  );
};

const TextContent = connect(
  ({ text, colorText }) => ({ text, colorText }),
  null,
  null,
  { context: AppContext }
)(Text);

export default TextContent;
