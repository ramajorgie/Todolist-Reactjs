import React from "react";
import Buttons from "./Buttons";
import propsTypes from 'prop-types'

const TodoItem = ({todoname, del }) => {

  const delbyid = (id) =>{
    del(id)
  }
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
      <div style={{marginTop:10}}>
        <h2>{todoname.acara}</h2>
      </div>
      <div style={{ display: "flex" }}>
        <Buttons text="edit" fungsi="edit" />
        <Buttons
          text="delete"
          fungsi="delete"
          action={() => delbyid(todoname.id)}
        />
      </div>
    </div>
  );
};

TodoItem.propsTypes = {
  todoname: propsTypes.object.isRequired,
  delete: propsTypes.func.isRequired,
};

export default TodoItem;
