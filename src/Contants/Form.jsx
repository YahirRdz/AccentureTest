import React, { useState } from "react"; // eslint-disable-line
import { useQuery } from "@tanstack/react-query"; // eslint-disable-line
import { useMutation } from "react-query";
import axios from "axios";
import "./App.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(""); // eslint-disable-line
  const [message, setMessage] = useState("");

  const { isLoading, isError, error, mutate } = useMutation(createtitle);

  async function createtitle() {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setMessage(response.data);
  }

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const Create = () => {
    mutate({ id: Date.now(), title });
  };

  return (
    <>
      <div classtitle="">
        <h1>Post</h1>
        <label>Lista de Posts</label>
        <input type="text" value={title} onChange={onChange} />
        <button onClick={Create}>Crear</button>
        <p> {message && message.title}</p>

        <div classtitle="">
          {isLoading ? "updating..." : ""}
          {isError ? error.message : ""}
        </div>
      </div>
    </>
  );
};

export default Form;
