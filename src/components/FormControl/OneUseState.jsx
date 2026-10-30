import React, { useState } from "react";
import "./multiuseState.css";

const OneUseState = () => {
  const [formData, setFormData] = useState({
    username: "vipin",
    email: "vipin@gmail.com",
    password: "12345",
  });

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <form onSubmit={submitHandler} className="form-container">
        <h2>Using one useState for form control</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={changeHandler}
          required
        />

        <label htmlFor="em">Email</label>
        <input
          type="email"
          name="email"
          id="em"
          value={formData.email}
          onChange={changeHandler}
          required
        />

        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="password"
          id="pass"
          value={formData.password}
          onChange={changeHandler}
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default OneUseState;
