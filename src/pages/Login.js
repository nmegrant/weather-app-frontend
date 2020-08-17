import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logInThunkCreator } from "../store/user/actions";
import { selectUser } from "../store/user/selector";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  function submitLogin(event) {
    event.preventDefault();
    dispatch(logInThunkCreator(email, password));
    setEmail("");
    setPassword("");
  }

  console.log(user);

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
