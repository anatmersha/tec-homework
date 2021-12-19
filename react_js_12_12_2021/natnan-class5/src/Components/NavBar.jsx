import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <ul className="nav-list">
                {/* <li><img style={{width: "240px"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Fb%2Fb1%2FRick_and_Morty.svg%2Frevision%2Flatest%2Fscale-to-width-down%2F640%3Fcb%3D20180522080112&f=1&nofb=1" alt=""></img></li> */}
                <Link className="nav-link" exact to="/"><li>Home</li></Link>
                <Link className="nav-link" to="/About"><li>About</li></Link>
                <Link className="nav-link" to="/Mentoring"><li>Mentoring</li></Link>
                <Link className="nav-link" to="/Events"><li>Events</li></Link>
                <Link className="nav-link" to="/Contact"><li>Contact</li></Link>
                <Link className="nav-link" to="/Courses"><li>Courses</li></Link>
                <Link className="nav-link" to="/Testimonials"><li>Testimonials</li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;