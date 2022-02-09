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
            <div className="navbar">
                <Link to="/">
                    {/* <image src={requestAnimationFrame('../../Images/logo.svg')} /> */}
                </Link>
                <li className="nav-links">
                    <Link to="/events">
                        <button className="events"> EVENTS </button>
                    </Link>
                    <Link to="/dates">
                        <button className="dates"> DATES </button>
                    </Link>
                    <Link to="/locations">                            
                        <button className="locations"> LOCATIONS </button>
                    </Link>
                        <div id="navContent">
                        {props.user ? 
                        console.log(props.user.username) : null}
                        {props.user ?
                            <div id="navContent">
                                <Link to="/report">
                                    <button className="report"> REPORT MANAGEMENT </button>
                                </Link>
                            <button className="navButton" onClick={() => logout()}>LOGOUT</button>
                        </div>
                        :
                        <button className="login" onClick={() => props.setOpen(true)}>
                            Login or Register
                        </button>
                    }
                    </div>
                </li>
            </div>
        </nav>
    )
}

