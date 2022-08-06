import React, { useState } from "react";
import DeleteTodo from "../components/DeleteTodo";
import UpdateTodo from "../components/UpdateTodo";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const Content = styled.div`
  width: 80%;
`;
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
const TodoDetail = ({ el, selected }) => {
  const [revise, setRevise] = useState(false);
  const revision = (event) => {
    event.preventDefault();
    setRevise(!revise);
  };
  // console.log(el);

  // console.log("수정하기", revise);
  return (
    <Container>
      <Content>
        <div>제목: {el?.title}</div>
        <div>내용: {el?.content}</div>
      </Content>
      <div>
        <Btn onClick={revision}>수정하기</Btn>

        <DeleteTodo selectedData={el} />
        {revise === true ? <UpdateTodo el={el} input={revise} /> : ""}
      </div>
    </Container>
  );
};

export default TodoDetail;
