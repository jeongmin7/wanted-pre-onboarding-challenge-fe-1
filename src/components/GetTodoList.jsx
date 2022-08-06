import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoDetail from "../pages/TodoDetail";

const GetTodoList = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const openDetail = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };
  console.log("리스트디테일", open);
  const token = localStorage.getItem("token");

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => setData(res.data.data));
  };
  useEffect(getTodos, []);

  return (
    <div>
      {data &&
        data.map((el, key) => (
          <div key={key}>
            <div>{key}</div>
            <div>{el.title}</div>
            {!open ? (
              <button onClick={openDetail}>더보기 </button>
            ) : (
              <button onClick={openDetail}>닫기</button>
            )}
            {open ? <TodoDetail el={el} /> : ""}
          </div>
        ))}
    </div>
  );
};

export default GetTodoList;
