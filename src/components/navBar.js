import { Link } from "react-router-dom"
import React, { useState } from "react"
import "./css/navBar.css"

export const NavBar = (props) => {
    const tempFunc = () => {
        props.setOpen(true);
        props.setLoginStatus(true)
    }

    return (
        <nav>
            
            <div id="navBar">
                <li id="navBarList">
                    <div id="navContent">
                        <Link to="/home">
                            <button>
                                LOGO
                            </button>
                        </Link>
                        <Link to="/events">
                            <button>
                                EVENTS
                            </button>
                        </Link>
                        <Link to="/dates">
                            <button>
                                DATES
                            </button>
                        </Link>
                        <Link to="/locations">
                            <button>
                                LOCATIONS
                            </button>
                        </Link>
                    </div>
                    <button onClick={() => tempFunc()}>
                        {props.loginStatus === true ?
                        "true": props.loginStatus === false ? "false" :
                        "empty"}
                    </button>
                </li>
            </div>
        </nav>
    )
}