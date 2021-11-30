import React from "react";

class Main extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.description}</p>
                <img style={{width:"200px", height:"200px",backgroundColor:"red"}} src={this.props.img} alt=""></img><br></br>
                <video style={{width:"200px", height:"200px"}} controls><source src={this.props.video}></source></video>
            </div>
        );
    }
}

export default Main;