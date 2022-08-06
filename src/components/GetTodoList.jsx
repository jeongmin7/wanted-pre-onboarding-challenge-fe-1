import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoDetail from "../pages/TodoDetail";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  border-bottom: 1px solid #333;
  display: flex;
  margin: 1rem;
  justify-content: space-between;
`;
const Num = styled.div`
  padding: 1rem;
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
const GetTodoList = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const openDetail = (key) => {
    setSelectedId(key);
    setOpen(!open);
  };
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
    <Container>
      <Content>
        <Num>글번호</Num>
        <Num>제목</Num>
        <Num>더보기</Num>
      </Content>
      {data &&
        data.map((el, key) => (
          <div key={key}>
            <Content>
              <Num>{key + 1}</Num>
              <Num>{el.title}</Num>
              {!open ? (
                <Btn
                  id="close"
                  onClick={(e) => {
                    e.preventDefault();
                    openDetail(key + 1);
                  }}
                >
                  더보기
                </Btn>
              ) : (
                <Btn onClick={openDetail}>닫기</Btn>
              )}
            </Content>
            {open && key + 1 === selectedId ? <TodoDetail el={el} /> : ""}
          </div>
        ))}
    </Container>
  );
};

export default GetTodoList;
