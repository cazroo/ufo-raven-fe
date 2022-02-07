import React from 'react'
import "../index.css";
import "./cssPages/events.css"
//button:
import "../components/css/buttons.css"
import BasicTable from '../components/BasicTable';
import Navbar from '../components/navBar'

function Buttons() {
    return (
        <div className="wrapper">
            <div className="pageTitle">
            <h1>Buttons Preview</h1>
            <div className="tablebox">
                <div className="ufoReportsHeader">
                  <h2>U.F.O REPORT</h2>
                  <div className="table">
                  <div className="btn close-btn"></div>
                  <div className="btn delete-btn"></div>
                  <div className="btn dlteX-btn"></div>
                  <div className="btn add-btn"></div>
                  <div><button className="btn edit-btn">EDIT</button></div>
                  <div> <button className="btn add-button">ADD</button></div>
                  <div><button className="btn delete-button">DELETE</button></div>
                  <div><button className="btn return-button">RETURN</button></div>
                  <div className="btn minus-btn"></div>
                  

                  </div>
               
                

                </div>

                </div>
        

            </div>
        </div>
    )
}

export default Buttons



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