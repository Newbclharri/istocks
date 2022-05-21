import { Link } from "react-router-dom";

export default function Header(){
    return(
        <nav className="nav">
            <Link to="/">HOME</Link>
            <Link to="/stocks">STOCKS</Link>
            <Link to="/about">ABOUT</Link>
        </nav>
    )
}