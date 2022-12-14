import React, { useState, useEffect } from "react";
import axios from "axios";
const SignUp = () => {
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

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/users/create", {
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
          onClick={handleSignUp}
          value="로그인"
          disabled={error}
        ></input>
      </form>
    </div>
  );
};

export default SignUp;
