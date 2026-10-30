import React, { useState } from "react";
import "./multiuseState.css";

function MultiuseState() {
  const [name, setName] = useState("vipin");
  const [email, setEmail] = useState("vipin@gmail.com");
  const [password, setPassword] = useState("12345");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <form action="" className="form-container" onSubmit={handleSubmit}>
        <h2>Using Multiple useState form control</h2>
        <hr />

        <label htmlFor="name">Username</label>
        <input
          type="text"
          name=""
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MultiuseState;
