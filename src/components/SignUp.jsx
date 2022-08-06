import React, { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+/gm;
  let emailResult = emailRegex.test(userEmail);

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (userEmail === "" || userPassword === "") {
      alert("이메일 혹은 비밀번호를 입력해주세요");
      return;
    } else if (!emailResult) {
      alert("이메일 형식을 맞춰주세요");
    } else if (emailResult && userPassword.length <= 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
    } else {
      axios
        .post("http://localhost:8080/users/create", {
          email: userEmail,
          password: userPassword,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
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
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={userPassword}
          onChange={handlePassword}
        />
        <button onClick={handleSignUp}>회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
