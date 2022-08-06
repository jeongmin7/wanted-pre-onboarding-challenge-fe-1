import React, { useEffect, useState } from "react";
import AddToDo from "../components/AddToDo";
import GetTodoList from "../components/GetTodoList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
const Todo = () => {
  return (
    <Container>
      <Title>Todo- List</Title>
      <GetTodoList />
      <AddToDo />
    </Container>
  );
};

export default Todo;
