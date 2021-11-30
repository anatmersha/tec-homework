import React from "react";
import * as styles from "../HW-components/Movie.module.css"

class Movie extends React.Component{
    render(){
        return(
            <div className={styles.card}><br/>
            <h1>Movie name: {this.props.movieObj.name}</h1><br/>
            <p>Year: {this.props.movieObj.year}</p><br/>
            <p>Lead Actor: {this.props.movieObj.actor}</p>
            <img src={this.props.movieObj.img}></img>
            </div>
        );
    }
}

export default Movie;