import React, { useEffect, useState } from "react";
import AddToDo from "../components/AddToDo";
import GetTodoList from "../components/GetTodoList";

const Todo = () => {
  return (
    <div>
      Todo
      <GetTodoList />
      <AddToDo />
    </div>
  );
};

export default Todo;
