import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Btn = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  height: 100%;
  font-size: 1.2rem;
  color: #333;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
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
      <Btn onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTrashCan} />
      </Btn>
    </div>
  );
};

export default DeleteTodo;
