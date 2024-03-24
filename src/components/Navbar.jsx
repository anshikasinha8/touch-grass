import {Link} from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" className="title"> HOME </Link>
            <Link to="/map" className="title"> MAP </Link>
        </div>
    );
};