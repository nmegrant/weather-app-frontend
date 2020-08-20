import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signUpThunkCreator } from "../store/user/actions";

export default function SignUp() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitSignup(event) {
    event.preventDefault();
    dispatch(signUpThunkCreator({ name, location, email, password }));
    setName("");
    setEmail("");
    setLocation("");
    setPassword("");
  }

  return (
    <div>
      <h1>Sign up!</h1>
      <form>
        <label>Name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <label>Location</label>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={submitSignup}>Sign up</button>
      </form>
      <p>
        Already a member? <Link to="/login">Log in here!</Link>
      </p>
    </div>
  );
}
