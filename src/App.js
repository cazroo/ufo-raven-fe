import React from "react";
import { Home } from "./pages/home";
import { Events } from "./pages/events";
import { Dates } from "./pages/dates";
import { Locations } from "./pages/locations";
import { NavBar } from "./components/navBar";
import { LoginModal } from "./components/modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Report from "./components/report";

function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <NavBar open={open} setOpen={setOpen} />
        <LoginModal
          open={open}
          setOpen={setOpen}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/events" element={<Events />} />
          <Route path="/report" element={<Report user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
