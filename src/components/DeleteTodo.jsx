import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteTodo = ({ selectedData }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const deleteTodo = () => {
    axios
      .delete(`http://localhost:8080/todos/${selectedData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => alert("삭제가 완료되었습니다."))
      .then(() => navigate("/todos"))
      .catch((err) => {
        console.log(err.response.data["detail"]);
      });
  };
  return (
    <div>
      <button onClick={deleteTodo}>삭제하기</button>
    </div>
  );
};

export default DeleteTodo;
