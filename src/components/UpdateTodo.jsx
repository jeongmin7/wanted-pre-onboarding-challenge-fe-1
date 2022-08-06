import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateTodo = ({ el }) => {
  const [data, setData] = useState(el);
  console.log(el);
  const navigate = useNavigate();
  const click = (e) => {
    e.stopPropagation();
  };
  const handleInput = (key) => (event) => {
    event.stopPropagation();
    setData({ ...data, [key]: event.target.value });
  };
  const token = localStorage.getItem("token");
  const updateTodo = async (e) => {
    await axios
      .put(
        `http://localhost:8080/todos/${el.id}`,
        { title: data.title, content: data.content },
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
    <div>
      <input
        type="text"
        className="title"
        placeholder="제목"
        onChange={handleInput("title")}
        onClick={click}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="내용"
        onChange={handleInput("content")}
        onClick={click}
      ></textarea>
      <button onClick={updateTodo}>수정하기</button>
    </div>
  );
};

export default UpdateTodo;
