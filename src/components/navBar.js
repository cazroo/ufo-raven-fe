import { Link } from "react-router-dom"
import "./css/navBar.css"

export const NavBar = () => {
    // const history = useHistory()

    // const handleClick=() => {
    //     this.props.router.replace('login')
    // }

    return (
        <nav>
            
            <div id="navBar">
                <li id="navBarList">
                    <div id="navContent">
                        <Link to="/home">HOME</Link>
                        <Link to="/events">EVENTS</Link>
                        <Link to="/locations">LOCATIONS</Link>#
                        <Link to="/dates">DATES</Link>
                    </div>
                    <button>LOGIN</button>
                </li>
            </div>
        </nav>
    )
}