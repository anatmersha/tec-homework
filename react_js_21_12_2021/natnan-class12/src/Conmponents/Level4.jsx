import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Level4 = () => {
    const user = useContext(UserContext);

    return(
        <div>
            <h2 style={{border:"solid blue 2px"}}>Level4</h2>
            <p>Hello {user.name}</p>
        </div>
    )
}

export default Level4;