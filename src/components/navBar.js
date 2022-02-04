import { Link } from "react-router-dom"
import {Route} from 'react-router-dom'
import "./css/navBar.css"

export const NavBar = () => {
    // const history = useHistory()

    const handleClick=() => {
        this.props.router.replace('login')
    }

    return (
        <nav>
            
            <div id="navBar">
                <li id="navBarList">
                    <div id="navContent">
                        <button>
                            <Link to="/home">HOME</Link>
                            </button>
                        <button>REPORTS</button>
                        <button>LOCATIONS</button>
                        <button>DATES</button>
                    </div>
                    <button>LOGIN</button>
                </li>
            </div>
        </nav>
    )
}