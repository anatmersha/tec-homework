import React from "react";
import "../HW-components/RestEmployee.css";

class RestEmployee extends React.Component{
    render(){
        return(
            <div className="EmployeeCard">
                <img className="EmployeeImg" src={this.props.Employee.img} alt=""></img><br></br>
                <h3>{this.props.Employee.name}</h3>
                <p>{this.props.Employee.workTitle}</p>
            </div>
        );
    }
}

export default RestEmployee;