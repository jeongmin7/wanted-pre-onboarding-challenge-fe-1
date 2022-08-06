import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [pwError, setPwError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const handleInput = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    emailRegex.test(email) && password.length >= 8
      ? setError(false)
      : setError(true);
  }, [email, password]);

  useEffect(() => {
    !emailRegex.test(email)
      ? setErrorMsg("이메일에는 @, .가 있어야합니다. ")
      : setErrorMsg(" ");
  }, [email]);

  useEffect(() => {
    password.length <= 8
      ? setPwError("비밀번호는 8자 이상이어야 합니다.  ")
      : setPwError(" ");
  }, [password]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    token && navigate("/");
  }, [token, navigate]);

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
        .then(() => {
          navigate("/");
        })
        .catch(() => alert("로그인할 수 없습니다."));
    }
  };

  return (
    <div>
      <form>
        <input
          className="emailInput"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleInput}
        />
        {email && errorMsg}
        <input
          className="pwInput"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handleInput}
        />
        {password && pwError}
        <input
          type="submit"
          className="submitBtn"
          onClick={handleLogin}
          value="로그인"
          disabled={error}
        ></input>
        <Link to="/signup">
          <button>회원가입하기</button>
        </Link>
      </form>
    </div>
  );
};

export default Auth;
