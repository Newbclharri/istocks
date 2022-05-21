import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <Link to="/">
                <div className="header">HOME</div>
            </Link>
            <Link to="/about">
                <div className="header">ABOUT</div>
            </Link>
        </div>
    )
}