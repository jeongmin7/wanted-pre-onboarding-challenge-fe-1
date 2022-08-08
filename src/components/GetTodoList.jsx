import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoDetail from "./TodoDetail";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Nothing from "./Nothing";
// import { useResetRecoilState } from "recoil";
// import { dataState } from "../recoil/atom";
// import { useRecoilValue } from "recoil";
// import { updateDataState } from "../recoil/selector";
const Container = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  color: #333;
`;
const Count = styled.div`
  margin-left: 1.5rem;
  display: flex;
  flex-direction: row;
`;
const Number = styled.div`
  font-weight: 700;
  padding: 0 0.5rem;
`;
const Content = styled.div`
  border-bottom: 2px solid #333;
  border-top: 2px solid #333;
  padding: 0.5rem 0;
  display: flex;
  margin: 1rem 1rem 0 1rem;
  justify-content: space-between;
  color: #bfbfbf;
  font-size: 1.1rem;
  font-weight: 700;
`;
const Num = styled.div`
  padding: 2rem;
`;
const Title = styled.div`
  padding-left: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
`;
const Btn = styled.button`
  margin: 1rem;
  width: 2rem;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #333;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;
const Map = styled.div`
  justify-content: center;
`;
const ContentContainer = styled.div`
  background-color: #f4f4f4;
  border-bottom: 1px solid #333;
  display: flex;
  margin: 0 1rem;
  padding: 0 1rem;
  justify-content: space-between;
`;
const NumTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GetTodoList = () => {
  const [data, setData] = useState();
  // const newData = useRecoilValue(updateDataState);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [doneId, setDoneId] = useState("");
  const [done, setDone] = useState(false);

  const openDetail = (key) => {
    setSelectedId(key);
    setOpen(!open);
  };
  const handleDone = (key) => {
    setDoneId(key);
    setDone(!done);
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
      <Count>
        총<Number>{data?.length}</Number>
        개의 글이 있습니다.
      </Count>
      <Content>
        <Num>No</Num>
        <Num>제목</Num>
        <Num>더보기</Num>
      </Content>
      {data?.length !== 0 ? (
        data?.map((el, key) => (
          <Map key={key}>
            <ContentContainer>
              <NumTitle>
                <Num>{key + 1}</Num>
                <Title>{el.title}</Title>
              </NumTitle>
              {/* <label>
                달성하셨나요?
                <input
                  type="checkbox"
                  onChange={(e) => {
                    // e.preventDefault();
                    handleDone(key);
                  }}
                  checked={done && key === doneId}
                />
              </label> */}
              {!open ? (
                <div>
                  <Btn
                    id="close"
                    onClick={(e) => {
                      e.preventDefault();
                      openDetail(key + 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Btn>
                </div>
              ) : (
                <div>
                  <Btn onClick={openDetail}>
                    <FontAwesomeIcon icon={faCaretUp} />
                  </Btn>
                </div>
              )}
            </ContentContainer>
            {open && key + 1 === selectedId ? (
              <TodoDetail el={el} done={done} />
            ) : (
              ""
            )}
          </Map>
        ))
      ) : (
        <Nothing />
      )}
    </Container>
  );
};

export default GetTodoList;
