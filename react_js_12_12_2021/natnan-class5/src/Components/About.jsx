import React from "react";
import "./About.css";

const About = () => {
    return(
        <div style={{height:"750px" ,backgroundImage:"url(https://images.pexels.com/photos/2495220/pexels-photo-2495220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"}}>
            
            <div className="card">
                <img className="card-img" style={{borderRadius: "40%"}} src="https://images.pexels.com/photos/2866078/pexels-photo-2866078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>

            <div className="card-description">
                <h1>Issa Rae</h1>
                <h2 style={{color:"white", fontSize:"45px"}}>Photographer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
                Temporibus aspernatur doloribus aperiam cum quam laudantium eum reiciendis quo,<br/> 
                autem eaque nesciunt et. Ratione ex facilis rerum dolorem maiores dolores quam?</p>
            </div>
        </div>

    </div>
    )
}

export default About;