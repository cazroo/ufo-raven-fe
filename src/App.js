
import './App.css';
import { useState, useEffect } from "react";
// import registerFetch from './utils/index';
import Register from './utils/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   registerFetch();
  // },[])

  // const fetchData = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
  //     mode: "cors",
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });
  //   console.log(response)
  //   const data = await response.json();
  //   console.log(data);
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
