import { useState } from "react";
import React from "react";

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = `${process.env.REACT_APP_BASE_URL}user/registeruser`;

  const handleUserChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);



  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: user,
      password: password,
    });

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(await res.json());
  };

  const message = () =>{
      if (password || user === true) {
          alert("Registered")
  }}

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
            required= {true}
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
            required= {true}
            placeholder=""
          ></input>
          </div>
          <input
            type="submit"
            value="Submit"
            className="submitbtn"
            onClick={message}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Register;