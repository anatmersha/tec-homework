import React from "react";
import RestEmployee from "./RestEmployee"

class RestEmployees extends React.Component{
    render(){
        const employee1={name:"Connor Quinn",workTitle:"Executive Chef",img:"https://cdn.pixabay.com/photo/2016/10/27/08/48/chef-1773672__340.png"};
        const employee2={name:"Samuel Schick",workTitle:"Resturant Manager",img:"https://cdn.pixabay.com/photo/2016/10/27/08/42/girl-1773665__340.png"};
        const employee3={name:"Fred Morrison",workTitle:"Co-Chief",img:"https://cdn.pixabay.com/photo/2016/10/27/08/37/cook-1773658__340.png"};
        const employee4={name:"Celia Almeda",workTitle:"Co-Chief",img:"https://cdn.pixabay.com/photo/2016/10/27/08/37/cook-1773658__340.png"};
        
        return(
        <div style={{display:"flex"}}>
            <RestEmployee Employee={employee1}/>
            <RestEmployee Employee={employee2}/>
            <RestEmployee Employee={employee3}/>
            <RestEmployee Employee={employee4}/>
        </div>
        )
    }
}

export default RestEmployees;