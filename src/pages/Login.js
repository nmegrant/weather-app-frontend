import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Log in!</h1>
      <form>
        <input />
        <input />
      </form>
    </div>
  );
}
