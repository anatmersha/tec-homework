import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <ul style={{display: "flex",justifyContent: "center",listStyleType: "none"}} className="footer-list">
               <li className="footer-link"><a href="https://www.youtube.com/"  target="_blank"><i class="fa fa-youtube-square"></i></a></li>
                <li className="footer-link"><a href="https://www.linkedin.com/"  target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                <li className="footer-link"><a href="https://www.instagram.com/"  target="_blank"><i class="fa fa-instagram"></i></a></li>
            </ul>
            <p>© 2020 ANAT MERSHA. ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footer;