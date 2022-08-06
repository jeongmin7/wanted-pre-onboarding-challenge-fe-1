import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 50rem;
  height: 3rem;
  margin: 1rem;
`;
const Textarea = styled.textarea`
  width: 50rem;
  height: 20rem;
  margin: 2rem;
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
const AddToDo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const token = localStorage.getItem("token");
  const AddTodo = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/todos",
        { title: title, content: content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => window.location.reload())
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Container>
        <Input type="text" placeholder="제목" onChange={handleTitle} />
        <Textarea onChange={handleContent} placeholder="내용"></Textarea>
        <Btn onClick={AddTodo}>추가하기</Btn>
      </Container>
    </div>
  );
};

export default AddToDo;
