import React from "react";
import "../HW-components/Register.css";

class Register extends React.Component {

    state = {firstName: "", lastName: "",email: "" ,password: "", verifiedPassword: "",checkbox: ""};

    changeHandlerFirstName = (e) => this.setState({firstName: e.target.value})
    changeHandlerLastName = (e) => this.setState({lastName: e.target.value});
    changeHandlerEmail = (e) => this.setState({email: e.target.value});
    changeHandlerPassword = (e) => this.setState({password: e.target.value});
    changeHandlerVerifiedPassword = (e) => this.setState({verifiedPassword: e.target.value});
    clickHandleCheckbox = (e) => {this.setState({checkbox: e.target.value})}

    submitForm = (e) => { 
        e.preventDefault(); 
        if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.password !== "" && this.state.verifiedPassword !== "" && this.state.checkbox !== ""){
            if(this.state.password === this.state.verifiedPassword){
                console.log(this.state);
            }
        }else{
            console.log("Sorry, you need to fill all fields properly!");
        }
   }
  
    render() {
        return(
            <div className="formSection">
                <form id="form" onSubmit={this.submitForm}>
                <h1>Register</h1>
                <p>Create your account.It`s free and only takes a minute</p>
                    <input id="firstName" onChange={this.changeHandlerFirstName} type="text" placeholder="Insert first name"/>
                    <input id="lastName" onChange={this.changeHandlerLastName} type="text" placeholder="Insert last name"/><br/>
                    <input id="email" onChange={this.changeHandlerEmail} type="email" placeholder="Insert email"/><br/>
                    <input id="password" onChange={this.changeHandlerPassword} type="password" placeholder="Insert password"/><br/>
                    <input id="verifiedPassword" onChange={this.changeHandlerVerifiedPassword}  type="password" placeholder="Verify password"/><br/>
                    <input onChange={this.clickHandleCheckbox} type="checkbox" value="false" name="CheckBox"/>
                    <label for="CheckBox">I accept the <span>Terms of use & Privacy Policy</span></label><br/>
                    <button id="btn" type="submit">Register Now</button>
                </form>
            </div>
        );
    }
}

export default Register;