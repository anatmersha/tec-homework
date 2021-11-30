import React from "react";

class State extends React.Component{
    state={name: ""};
    showName = (e) => this.setState({name: e.target.value});
    
    render(){
        return(
            <div style={{display: "flex",justifyContent: "center", marginTop: "20px", flexDirection: "column", alignItems: "center"}}>
                <input style={{height: "30px", width: "220px"}} onChange={this.showName}/><br/>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default State;