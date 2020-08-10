import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitLogin(event) {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>Log in!</h1>
      <form>
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={submitLogin}>Log in</button>
      </form>
    </div>
  );
}
