import React from "react";
import "../front-Styles/Button.css";
import propTypes from "prop-types";
const Buttons = ({ fungsi, text, action }) => {
  return (
    <div>
      <button className={`btn btn-${fungsi}`} onClick={action}>
        {text}
      </button>
    </div>
  );
};

Buttons.propTypes = {
  fungsi: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  action: propTypes.func,
};
export default Buttons;
