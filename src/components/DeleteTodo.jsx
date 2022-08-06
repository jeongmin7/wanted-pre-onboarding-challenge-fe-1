import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #fff;
  border: 2px solid #3ce;
  border-radius: 8px;
  padding: 10px;
  height: 100%;
  color: #333;
  &:hover {
    cursor: pointer;
    background-color: #3ce;
    transform: translateY(-2px);
    transition: all 0.5s ease-in-out;
  }
`;
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
      <Btn onClick={deleteTodo}>삭제하기</Btn>
    </div>
  );
};

export default DeleteTodo;
