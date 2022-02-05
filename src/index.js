import React from "react";
import "./index.css";
import Register from "./components/register";
import Login from "./components/login";
import Report from "./components/report";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

function Test() {
  const [user, setUser] = useState(null);
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}




render(
  <Test />,
  rootElement
);

export default Test;