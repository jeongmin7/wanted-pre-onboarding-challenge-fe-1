import React, { useState } from "react";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Btn = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 10px;
  color: #333;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
  }
`;
const ContentTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1rem;
`;

const ContentContent = styled.div`
  font-size: 1rem;
  margin: 1rem;
`;
const TodoDetail = ({ el, done }) => {
  const [revise, setRevise] = useState(false);
  console.log(done);
  const revision = (event) => {
    event.preventDefault();
    setRevise(!revise);
  };
  return (
    <Container>
      <Content>
        <div>
          <ContentTitle> {el?.title}</ContentTitle>
          <ContentContent>{el?.content}</ContentContent>
        </div>
        <div>
          <Btn onClick={revision}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Btn>
          <DeleteTodo selectedData={el} />
        </div>
      </Content>

      {revise === true ? <UpdateTodo el={el} input={revise} done={done} /> : ""}
    </Container>
  );
};

export default TodoDetail;
