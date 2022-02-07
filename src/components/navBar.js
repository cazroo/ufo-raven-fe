import { Link } from "react-router-dom"
import React from "react"
import "./css/navBar.css"

export const NavBar = (
    {open, 
    setOpen}
    ) => {

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
                    <button onClick={() => setOpen(true)}>LOGIN</button>
                </li>
            </div>
        </nav>
    )
}