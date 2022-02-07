import React from 'react'
import "../App.css";
// import "./cssPages/events.css"
//button:
import "../components/css/buttons.css"
// import Navbar from '../components/navBar'

export function Events() {
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