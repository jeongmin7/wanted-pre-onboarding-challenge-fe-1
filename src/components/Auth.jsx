import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  const token = localStorage.getItem("token");
  const handleLogin = (e) => {
    e.preventDefault();

    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      axios
        .post("http://localhost:8080/users/login", {
          email: email,
          password: password,
        })
        .then((res) => localStorage.setItem(`token`, res.data.token))
        .catch(() => alert("로그인할 수 없습니다."))
        .then(() => {
          navigate("/");
        });
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlepassword}
        />
        <button onClick={handleLogin}>로그인하기 </button>
        <Link to="/signup">
          <button>회원가입하기</button>
        </Link>
      </form>
    </div>
  );
};

export default Auth;
