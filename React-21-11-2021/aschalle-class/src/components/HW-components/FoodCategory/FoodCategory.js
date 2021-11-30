import React from "react";
import "../HW-components/FoodCategories.css";
class FoodCategory extends React.Component{
render(){
    return(
        <div className="categoryCard">
            <h1>{this.props.Category.name}</h1>
            <p>{this.props.Category.description}</p>
            <img className="categoryImg" src={this.props.Category.img} alt=""></img>
        </div>
    );
}
}

export default FoodCategory;