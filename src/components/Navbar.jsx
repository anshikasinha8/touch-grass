import {Link} from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" className="title"> Home </Link>
            <Link to="/map" className="title"> Map </Link>
        </div>
    );
};