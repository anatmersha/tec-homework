import React from "react";
import "./Employee.css" ;

class Employee extends React.Component {
    render() {
      return (
        <section>
          <h1>{this.props.name}</h1>
          <img className="image" src={this.props.image} alt=""></img>
        </section>
      );
    }
  }


export default Employee;