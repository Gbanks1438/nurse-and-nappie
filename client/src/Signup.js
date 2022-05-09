import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    email: ""
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
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setFormData({
            username: "",
            password: "",
            password_confirmation: "",
            first_name: "",
            last_name: "",
            email: ""
        });
      });
  }

  return (
    <div className="auth-div" >
      <div className="form-background">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password Confirmation:</label>
        <input
          id="password-confirmation-signup-input"
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="first_name">First Name:</label>
        <input
          id="first_name-signup-input"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last_name">Last Name:</label>
        <input
          id="last_name-signup-input"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email Address:</label>
        <input
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" className="button">Create Account</button>
      </form>
      <br />
      <Link className="link" to="/" replace>
        Log In
      </Link>
      </div>
      <br />
    </div>
  );
};

export default Signup;