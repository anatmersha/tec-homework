import React from "react";
import * as styles from "../HW-components/Car.module.css";

class Car extends React.Component {

    render(){
        return(
             <div className={styles.card}> 
                <h1>Car model is: {this.props.carObj.model}</h1><br/>
                <p>Car price: {this.props.carObj.price}</p><br/>
                <img src={this.props.carObj.img} alt=""></img>
            </div>
        );
    }
}

export default Car;