import React from "react";
import "./index.css";
import Register from "./components/register";
import Login from "./components/login";
import Events from './pages/Events';
import Report from "./components/report";
import { NavBar } from "./components/navBar"
import Dates from './pages/Dates'
import { Home } from "./pages/home";
import Locations from './pages/Locations'
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