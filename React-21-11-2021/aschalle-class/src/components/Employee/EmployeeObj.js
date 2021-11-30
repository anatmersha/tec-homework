import React from "react";

class EmployeeObj extends React.Component{
    render(){
        return(
            <div style={{width:"33%"}}>
                <h1 style={{fontSize:"50px"}}>{this.props.Employee.name}</h1>
                <p style={{color:"rosybrown"}}>{this.props.Employee.jobTitle}</p>
                <p style={{fontStyle:"italic"}}>{this.props.Employee.age}</p>
                <img style={{width:"200px", height:"200px"}} src={this.props.Employee.image}></img>
            </div>
        )
    }
}


export default EmployeeObj;