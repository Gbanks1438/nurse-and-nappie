import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({setUser}) => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        setUser(user)
        setFormData({
          username: "",
          password: ""
        });
      });
  }

  return (
    <div className="auth-div">
      <h1>Please Log In</h1>
      <form className="form-div" onSubmit={handleSubmit}>
        <label className="form-div" htmlFor="username">Username: </label>
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label className="form-div" htmlFor="password">Password: </label>
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" className="button">Submit</button>
      </form>
      <br />
      <br />
      <br />
        <div>
      <Link  className="link" to="/signup" replace>
        Sign Up
      </Link>
      </div>
      <br />
    </div>
  );
};

export default Login;