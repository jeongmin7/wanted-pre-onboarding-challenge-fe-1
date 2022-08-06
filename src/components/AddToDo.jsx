import React, { useEffect, useState } from "react";
import axios from "axios";
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
      <input type="text" placeholder="제목" onChange={handleTitle} />
      <textarea
        cols="30"
        rows="10"
        onChange={handleContent}
        placeholder="내용"
      ></textarea>
      <button onClick={AddTodo}>추가하기</button>
    </div>
  );
};

export default AddToDo;
