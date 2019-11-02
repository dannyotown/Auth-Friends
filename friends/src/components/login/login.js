import React, { useState } from "react";
import api from "../../utils/api";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/api/login", data)
      .then(result => {
        localStorage.setItem("item", result.data.payload);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </>
  );
}

export default Login;
