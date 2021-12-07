import React from "react";

class LogInWithValidation extends React.Component{
state = {name: "", password: ""};

changeHandlerName = (e) => this.setState({name: e.target.value});
changeHandlerPassword = (e) => this.setState({password: e.target.value});
login = () => console.log(this.state);


isValidationOk = () => this.state.password.length > 5;

render() {
        const passwordColor= {color: this.state.password.length <= 5 ? "red" : "black"}
        const nameStyle = {color: this.state.name.length <= 3 ? "red" : "black"}
        const isBtnDisabled = !this.isValidationOk();
        return (
            <div>
                <input style={nameStyle} onChange={this.changeHandlerName} type="text" placeholder="insert user name"/>
                <input style={passwordColor} onChange={this.changeHandlerPassword} type="text" placeholder="insert password"/>
                <button disabled={isBtnDisabled} onClick={this.login}>Login</button>
            </div>
        );
    }
}


// const LogIn = () => {
//     let name;
//     let password;
//     const changeHandlerName = (e) => name = e.target.value;
//     const changeHandlerPassword = (e) => password = e.target.value;
//     const login = (e) => console.log(name, password);

//     return(
//         <div>
//             <input onChange={changeHandlerName} type="text" placeholder="insert user name"/>
//             <input onChange={changeHandlerPassword} type="text" placeholder="insert password"/>
//             <button onClick={login}>Login</button>
//         </div>
//     )
// }

// export default LogInWithValidation;