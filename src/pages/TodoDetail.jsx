import React, { useState } from "react";
import DeleteTodo from "../components/DeleteTodo";
import UpdateTodo from "../components/UpdateTodo";

const TodoDetail = ({ el }) => {
  const [revise, setRevise] = useState(false);
  const revision = (event) => {
    event.stopPropagation();
    setRevise(!revise);
  };
  console.log("수정하기", revise);

  return (
    <div>
      <div>{el?.title}</div>
      <div>{el?.content}</div>
      <button onClick={revision}>수정하기</button>
      {revise === true ? <UpdateTodo el={el} input={revise} /> : ""}
      <DeleteTodo selectedData={el} />
    </div>
  );
};

export default TodoDetail;
