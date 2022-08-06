import React, { useState, useEffect } from "react";
import axios from "axios";
const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailValidity, setEmailValidity] = useState(false);
  const [pwValidity, setPwValidity] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/gm;
  let emailResult = emailRegex.test(userEmail);

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handleEmailError = () => {
    setEmailError("이메일에는 @, .이 필요합니다. ");
    setEmailValidity(true);
  };
  const handlePwError = () => {
    setPwError("비밀번호는 8자 이상이어야 합니다.  ");
    setPwValidity(true);
  };

  useEffect(() => {
    !emailRegex.test(userEmail) ? handleEmailError() : setEmailError("");
  }, [userEmail]);
  useEffect(() => {
    userPassword.length >= 8 ? setPwError("") : handlePwError();
  }, [userPassword]);

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/users/create", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          value={userEmail}
          onChange={handleEmail}
        />
        {userEmail && emailValidity ? emailError : ""}
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={userPassword}
          onChange={handlePassword}
        />
        {userPassword && pwValidity ? pwError : ""}
        <button onClick={handleSignUp} disabled={(emailValidity, pwValidity)}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
