import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  margin-top: 4rem;
`;
const Input = styled.input`
  width: 50rem;
  border: none;
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Textarea = styled.textarea`
  width: 50rem;
  height: 10rem;
  border: none;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Btn = styled.button`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  color: #333;
  width: 5rem;
  &:hover {
    cursor: pointer;
    background-color: #edb447;
    color: #fff;
    font-weight: 700;
    transform: translateY(-2px);
    transition: all 0.1s ease-in-out;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;
  border-bottom: 1px solid #333;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
const Name = styled.div`
  display: flex;
  width: 3rem;
  justify-content: center;
  align-items: center;
`;
const New = styled.div`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: wavy overline lime; ;
`;
const BtnContainer = styled.div`
  width: 50rem;
  display: flex;
`;
const AddToDo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);

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
        { title: title, content: content, done: done },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res.data.data))
      .then(() => window.location.reload())
      .catch((error) => alert(error.response.data.details));
  };

  return (
    <Container>
      <New>새 글 작성</New>
      <Title>
        <Name>제목</Name>
        <Input
          type="text"
          placeholder="오늘은 무엇을...?"
          onChange={handleTitle}
        />
      </Title>
      <Content>
        <Name>내용</Name>
        <Textarea
          onChange={handleContent}
          placeholder="자세히 말해주세요"
        ></Textarea>
      </Content>
      <BtnContainer>
        <Btn onClick={AddTodo}>추가하기</Btn>
      </BtnContainer>
    </Container>
  );
};

export default AddToDo;
