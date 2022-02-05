import React from "react";
import "./index.css";
import Register from "./components/register";
import Login from "./components/login";
import { Home } from "./pages/home";
import { NavBar } from "./components/navBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

function Test() {
  const [user, setUser] = useState(null);
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="/home" element={<Home/>}/>
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