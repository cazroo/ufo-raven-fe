import React from "react";
import "./index.css";
import Register from "./components/register";
import Login from "./components/login";
import { Home } from "./pages/home";
import { Events } from "./pages/events";
import { Dates } from "./pages/dates";
import { Locations } from "./pages/locations";
import { NavBar } from "./components/navBar"
import { LoginModal } from "./components/modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

function Test() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <div>
    <BrowserRouter>
      <NavBar open={open} setOpen={setOpen}/>
      <LoginModal open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/dates" element={<Dates/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/register" element={<Register/>}/>

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