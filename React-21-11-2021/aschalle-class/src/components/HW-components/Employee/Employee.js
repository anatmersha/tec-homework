import React from "react";
// import Employee from "../HW-components/Employee";

class Employee extends React.Component{
    
    render(){
        return(
            <div style={{margin:"10px"}}>
                <img style={{width:"350px", height:"350px"}} src={this.props.employee.img}></img>
                <h1>{this.props.employee.name}</h1>
                <p>{this.props.employee.jobTitle}</p>
            </div>
        );
    }
}

export default Employee;