import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost:5000/user/registeruser";

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

  return (
    <div className="App">
      <div className="reglog">
        <h1 className="text">Register</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="user" className="form">
            Username:{" "}
          </label>
          <input
            type="text"
            name="user"
            value={user}
            onChange={handleUserChange}
          ></input>

          <label htmlFor="password" className="form">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
          <input
          style={{marginBottom:"4rem"}}
            type="submit"
            value="Submit"
            className="submitbtn"
            onClick={event =>  window.location.href='https://localhost:5000/'}
          ></input>
          <Link style={{
              border: "solid 1px wheat",
              borderRadius: "30px",
              paddingTop: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }} className="linkBut" to="/">Back to home</Link> |{" "}
        </form>
      </div>
    </div>
  );
}

// onClick={event =>  window.location.href="./cards.js"}

export default Register;


// const registerFetch = async (name, password) => {
//     try {
//         const response = await fetch(`${process.env.REACT_APP_BASE_URL}user`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name,
//                 password
//             })
//         });
//         const data = await response.json();
//         console.log(data);
//         return response.ok
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }

// export default registerFetch;