import { render } from "@testing-library/react";
import React from "react";
import Buttons from "./Buttons";

const TodoItem = () => {
  return (
    <div
      style={{
        background: "#00A19D",
        width: 550,
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        padding: 10,
        borderRadius: 6,
      }}
    >
      <h2>List Item</h2>
      <div style={{ display: "flex" }}>
        <Buttons text="edit" fungsi="edit"/>
        <Buttons text="delete" fungsi="delete"/>
      </div>
    </div>
  );
};

export default TodoItem;
