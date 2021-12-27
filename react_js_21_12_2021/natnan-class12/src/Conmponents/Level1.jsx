import React from "react";
import Level2 from "./Level2";
import UserContext from "../Context/UserContext";

const Level1 = () => {
    const user = {name: "Anat Mersha", email: "anatmersha@gmail.com", adress: "Hagefen 18"};

    return(
        <div>
            <UserContext.Provider value={user}>
            <h2 style={{border:"solid blue 2px"}}>Level1</h2>
            <Level2/>
            </UserContext.Provider>
        </div>
    )
}

export default Level1;