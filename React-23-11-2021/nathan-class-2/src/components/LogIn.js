// import React from "react";

// class LogIn extends React.Component{
// constructor(props){
//     super(props);
//     this.state={value: ''};
//     this.login=this.login.bind(this);
// }
// login(e){
//     this.setState({value: e.target.value});
// }
//     render(){
//         return(
//             <div>
//                 <form>
//                     <input onChange={getInput} value={userName} type="text" placeholder="Insert user name"></input>
//                     <input  value={userPassword} type="password" placeholder="Insert user name"></input>
//                     <button type="submit" onSubmit={this.login}>LOGIN</button>
//                 </form>
//             </div>
//         );
//     }
// }


// Function component:

const LogIn = () => {
    let name;
    let password;
    const changeHandlerName = (e) => name = e.target.value;
    const changeHandlerPassword = (e) => password = e.target.value;
    const login = (e) => console.log(name, password);
    return(
        <div>
            <input onChange={changeHandlerName} type="text" placeholder="insert user name"/>
            <input onChange={changeHandlerPassword} type="text" placeholder="insert password"/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LogIn;