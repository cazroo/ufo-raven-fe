import React from 'react'
import "../App.css";

import "../components/css/buttons.css"


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
