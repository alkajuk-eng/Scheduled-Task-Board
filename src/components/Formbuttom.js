import React from "react";

import "./Formbuttom.css";

export const Formbuttom = (props) => {
  const addCSSButton = {
    ReadEmails: { backgroundColor: "orange" },
    SendEmails: { backgroundColor: "yellow" },
    WebParsing: { backgroundColor: "blue" },
    default: { backgroundColor: "white" },
  };
  return (
    <div>
      <button
        type="button"
        style={
          props.selected ? addCSSButton[props.value] : addCSSButton.default
        }
        className="tag"
        onClick={() => props.selectCategory(props.value)}
      >
        {props.value}
      </button>
    </div>
  );
};
