import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  font-size: 2rem;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const Margin = styled.div`
  display: grid;
  width: 700px;
  height: 700px;
  padding: 200px;
  margin: auto;
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 300px;
  gap: 100px;
`;
export const Content = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  padding: 20px;
  background-color: antiquewhite;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    transition: 0.5s ease-in-out;
  }
`;
const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      alert("로그인해주세요"); //FIXME:왜 두번이 뜨나??
      navigate("/auth");
    }
    return;
  }, []);
  return (
    <div>
      <NavContainer>
        <Margin>
          <Box>
            <Content to="/">Home</Content>
            <Content to="/todos">TODOLIST</Content>
            <Content to="/auth">Login</Content>
            <Content to="/signup">SignUp</Content>
          </Box>
        </Margin>
      </NavContainer>
    </div>
  );
};

export default Home;
