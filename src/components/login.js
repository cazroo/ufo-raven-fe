import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigation=useNavigate()


  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: userName,
      password: password,
    });
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });
      const data = await res.json();
      props.setUser({ 
        username: data.user.name, 
        id: data.user.id, 
        jwt: data.token
      });
      props.setOpen(false)
      alert("Logged in!");
      navigation('/report')
    } catch (error) {
      alert("Wrong username or password!");
    }

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
          />       

        </form>
      </div>
    </div>
  );
}

export default Login;