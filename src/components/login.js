import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const prof = user ? window.location.href = "http://google.com" : undefined;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: userName,
      password: password,
    });

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    
    setUser({ username: data.user.name, id: data.user.id, jwt: data.token });

  };

  return (
    <div className="App">
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="user" className="form">
              Username: {" "}
            </label>
            <input
              type="text"
              name="user"
              value={userName}
              onChange={handleUserName}
              required= {true}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="form">
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              required= {true}
              placeholder=""
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="submitbtn"
            onClick={prof}
          />       
        </form>
      </div>
    </div>
  );
}

export default Login;