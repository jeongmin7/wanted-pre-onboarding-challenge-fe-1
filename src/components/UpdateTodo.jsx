import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const Input = styled.input`
  width: 50rem;
  padding: 0.5rem;
  border-radius: 6px;
  margin-bottom: 2rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 6px;
  margin-bottom: 2rem;
`;

const Btn = styled.button`
  width: 6rem;
  padding: 0.5rem;
`;

const UpdateTodo = ({ el, done }) => {
  const [data, setData] = useState(el);
  const navigate = useNavigate();
  const click = (e) => {
    e.stopPropagation();
  };
  const handleInput = (key) => (event) => {
    event.stopPropagation();
    setData({ ...data, [key]: event.target.value });
  };

  const handleDone = (e) => {
    e.preventDefault();
    setData({ ...data, [done]: done });
  };
  console.log(data);
  const token = localStorage.getItem("token");
  const updateTodo = async (e) => {
    await axios
      .put(
        `http://localhost:8080/todos/${el.id}`,
        { title: data.title, content: data.content, done: data.done },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setData(res.data.data))
      .then(() => window.location.reload())
      .then(() => navigate("/todos"))
      .catch((err) => console.log(err.response.data["detail"]));
  };

  return (
    <Container>
      <Input
        type="text"
        className="title"
        placeholder="제목"
        onChange={handleInput("title")}
        onClick={click}
      />
      <Textarea
        cols="30"
        rows="10"
        placeholder="내용"
        onChange={handleInput("content")}
        onClick={click}
      ></Textarea>
      <Btn onClick={updateTodo}>수정하기</Btn>
    </Container>
  );
};

export default UpdateTodo;
