import React from "react";
import "../front-Styles/Button.css"
const Buttons = (props) => {
  return (
    <div>
      <button className={'btn-${props.fungsi}'}>{props.text}</button>
    </div>
  );
};

export default Buttons;
