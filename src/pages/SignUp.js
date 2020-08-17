import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpThunkCreator } from "../store/user/actions";
import { selectUser } from "../store/user/selector";

export default function SignUp() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  function submitSignup(event) {
    event.preventDefault();
    dispatch(signUpThunkCreator({ name, location, email, password }));
    setName("");
    setEmail("");
    setLocation("");
    setPassword("");
  }
  console.log(user);

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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={submitSignup}>Sign up</button>
      </form>
    </div>
  );
}
