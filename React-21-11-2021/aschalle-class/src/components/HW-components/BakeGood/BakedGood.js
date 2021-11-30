import React from "react";
import "./BakedGood.css";

class BakedGood extends React.Component{
    render(){
        return(
            <div className="BakedCard">
                <img src={this.props.Baked.img} alt=""></img><br></br>
                <h1>{this.props.Baked.name}</h1><br></br>
                <p>{this.props.Baked.description}</p><br></br>
            </div>
        );
    }
}

export default BakedGood;