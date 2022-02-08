import React, { useState, useEffect } from "react";
import "../App.css";
// import "./cssPages/events.css"
//button:
import "../components/css/buttons.css"
// import Navbar from '../components/navBar'
import PaginationTable from "../components/PaginationTable";


export function Events() {
  const [cells, setCells] = useState([]);


  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/report`, {
      node: "cors",
      method: "GET",
    });
    const data = await res.json();
    const finalData = await data.data;
    setCells(finalData);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Description",
        accessor: "description", // accessor is the "key" in the data
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);

  const data = React.useMemo(() => cells, [cells]);

  console.log(cells);
  console.log(data);
    return (
        <div className="wrapper">
          <div className="pageTitle">
            <h1 className="pageTitle">EVENTS</h1>
            <div className="tablebox">
                <div className="ufoReportsHeader">
                  <h2>U.F.O REPORT</h2>
                  <div className="table">
                  <div className="btn close-btn"/>
                  <div className="btn delete-btn"/>
                  <div className="btn dlteX-btn"/>
                  <div className="btn add-btn"/>
                  <div><button className="btn edit-btn">EDIT</button></div>
                  <div> <button className="btn add-button">ADD</button></div>
                  <div><button className="btn delete-button">DELETE</button></div>
                  <div><button className="btn return-button">RETURN</button></div>
                  <div className="btn minus-btn"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}





/*
<table>
        <thead>
          <tr>
            <th>Description </th>
            <th> Date </th>
            <th> Location </th>
          </tr>
        </thead>
        <tbody>
          <tr> 
            <td>target.id.description </td>
            <td>target.id.date </td>
            <td>target.id.location </td>
          </tr>
        </tbody>
      </table>
*/