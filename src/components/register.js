import { useState } from "react";
import React from "react";

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: user,
      password: password,
    });
    try {
      console.log(process.env.REACT_APP_BASE_URL)
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/registeruser`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });
      console.log(await res.json());
      alert("User registered.")
    } catch (error) {
      console.log(error)
      alert("Unable to register user.");
    }
  };
  
  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="user" className="form">
              Username:{" "}
            </label>
            <input
              type="text"
              name="user"
              value={user}
              onChange={handleUserChange}
              required={true}
              placeholder=""
            ></input>
          </div>
          <div>
            <label htmlFor="password" className="form">
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required={true}
              placeholder=""
            ></input>
          </div>
          <input
            type="submit"
            value="Submit"
            className="submitbtn"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Register;
