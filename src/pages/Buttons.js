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
                  <div class="btn close-btn"></div>
                  <div class="btn delete-btn"></div>
                  <div class="btn dlteX-btn"></div>
                  <div class="btn add-btn"></div>
                  <div><button class="btn edit-btn">EDIT</button></div>
                  <div> <button class="btn add-button">ADD</button></div>
                  <div><button class="btn delete-button">DELETE</button></div>
                  <div><button class="btn return-button">RETURN</button></div>
                  <div class="btn minus-btn"></div>
                  

                  </div>
               
                

                </div>

                </div>
        

            </div>
        </div>
    )
}

export default Events



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