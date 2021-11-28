import React from "react";

class Movie extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.movieObj.Name}</h1>
                <img src={this.props.movieObj.Img} alt=""></img>
            </div>
        );
    }
}

export default Movie;