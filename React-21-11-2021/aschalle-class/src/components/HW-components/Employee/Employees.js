import React from "react";
import Employee from "../HW-components/Employee";

class Employees extends React.Component{
    
    render(){
        const employee1={name:"Adrian Scold",jobTitle:"Financial Directi=or",img:"https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568762__340.jpg"};
        const employee2={name:"Katty Nelson",jobTitle:"Advertizing Manager",img:"https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454__340.jpg"};
        const employee3={name:"Jennie Clarke",jobTitle:"Secretary",img:"https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909__340.jpg"};
        return(
            <div style={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                <Employee employee={employee1}/>
                <Employee employee={employee2}/>
                <Employee employee={employee3}/>
            </div>
        )
    }
}

export default Employees;