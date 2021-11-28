import React from "react";

class Product extends React.Component{
render(){
    return(
<div>
    <h1>{this.props.productObj.Name}</h1>
    <img style={{width:"600px", height:"400px"}} src={this.props.productObj.Img} alt=""></img>
</div>
    );
}
}

export default Product;