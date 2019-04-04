import React from "react";
import { connect } from "react-redux";
import { AppContext } from "./Context";

const TesteButton = ({ dispatch, ...props }) => {
  function onClick(e) {
    e.preventDefault();
    const randomNumber = Math.random() * 100;
    dispatch({
      type: "CHANGE_NUMBER_ASYNC",
      payload: { number: randomNumber }
    });
  }

  return <button {...props} onClick={onClick} />;
};

const Button = connect(
  null,
  null,
  null,
  { context: AppContext }
)(TesteButton);

export default Button;
