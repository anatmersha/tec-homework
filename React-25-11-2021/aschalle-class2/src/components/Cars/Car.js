import React from "react";

class Car extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.carObj.Brand}</h1>
                <p>{this.props.carObj.Price}</p>
                <img style={{width:"600px", height:"400px"}} src={this.props.carObj.Img} alt=""></img>
            </div>
        );
    }
}

export default Car;