import React, { useState } from "react";
import AddToDo from "../components/AddToDo";
import GetTodoList from "../components/GetTodoList";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Btn = styled.div`
  background-color: transparent;
  font-size: 1.2rem;
  margin: 0.4rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
const Todo = () => {
  const [open, setOpen] = useState(false);
  const handleNew = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Title>Todo- List</Title>
      <GetTodoList />

      {!open ? (
        <Btn onClick={handleNew}>
          <FontAwesomeIcon icon={faPlus} />
          일정 추가하기
        </Btn>
      ) : (
        <Btn onClick={handleNew}>닫기</Btn>
      )}
      {open ? <AddToDo /> : ""}
    </Container>
  );
};

export default Todo;
