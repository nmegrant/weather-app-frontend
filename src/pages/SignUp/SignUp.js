import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signUpThunkCreator } from "../../store/user/actions";
import "./SignUp.css";

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
      <form className="form">
        <div className="input-group">
          <label className="label">Name</label>
          <input
            className="input-field"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Location</label>
          <input
            className="input-field"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Email</label>
          <input
            className="input-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Password</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="signup-button" onClick={submitSignup}>
          Sign up
        </button>
      </form>
      <p>
        Already a member? <Link to="/login">Log in here!</Link>
      </p>
    </div>
  );
}
