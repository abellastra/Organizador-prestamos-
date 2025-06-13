import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handLeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
    } else {
      const errorData = await response.json();
       console.log(errorData)
      console.error("Error registering user:", errorData);
      alert(errorData.error || "Error registering user");
    }
  }
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handLeSubmit}>
        <div>
          <label htmlFor="username">enter username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">enter passwor</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">enter</button>
      </form>
    </div>
  );
}
export default Login;
