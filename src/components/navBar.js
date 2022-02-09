import { Link, useNavigate } from "react-router-dom"
import React from "react"
import "./css/navBar.css"

export const NavBar = (props) => {
    
    const navigate=useNavigate()

    const logout= () => {
        props.setUser(undefined);
        navigate("/")
    }

    return (
        <nav>
            <div id="navBar">
                <li id="navBarList">
                    <div id="navContent">
                        <Link to="/">
                            <button className="navButton">
                                LOGO
                            </button>
                        </Link>
                        <separator/>
                        <Link to="/events">
                            <button className="navButton">
                                EVENTS
                            </button>
                        </Link>
                        <separator/>
                        <Link to="/dates">
                            <button className="navButton">
                                DATES
                            </button>
                        </Link>
                        <separator/>
                        <Link to="/locations">
                            <button className="navButton">
                                LOCATIONS
                            </button>
                        </Link>
                    </div>
                    <div id="navContent">
                    {props.user ? 
                    console.log(props.user.username) : null}
                    {props.user ?
                        <div id="navContent">
                            <Link to="/report">
                            <button className="navButton">
                                    REPORT MANAGEMENT
                                </button>
                            </Link>
                            <separator/>
                            <button className="navButton" onClick={() => logout()}>LOGOUT</button>
                        </div>
                        :
                        <button className="navButton" onClick={() => props.setOpen(true)}>
                            LOGIN
                        </button>
                    }
                    </div>
                </li>
            </div>
        </nav>
    )
}