import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('')
  async function handLeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.users);
      navigate("/login");
      setError('')
    } else {
      const errorData = await response.json();
       setError(errorData.error)
    }
  }
  return (
    <div>
      <h1>Register</h1>
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
        { error &&(
          <p>{error}</p>
        )}
        <button type="submit">save user</button>
      </form>
    </div>
  );
}
export default Register;
