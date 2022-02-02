import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response)
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="App">
      <p>{users.message}</p>
    </div>
  );
}

export default App;
