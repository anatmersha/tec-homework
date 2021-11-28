import React from "react";
import Product from "./Product";

class Products extends React.Component{
    state={
        products: [
        {Name: "nike", Img: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"},
        {Name: "vans", Img: "https://cdn.pixabay.com/photo/2017/10/15/06/03/sneakers-2852607__340.jpg"},
        {Name: "converse", Img: "https://cdn.pixabay.com/photo/2017/06/09/18/19/sneakers-2387874__340.jpg"},
        {Name: "adidas", Img: "https://cdn.pixabay.com/photo/2018/12/01/20/28/shoes-3850175__340.jpg"}
    ]}


    render(){
        return(
            <div>
                {this.state.products.map((product, i) => 
                    <Product  key={i} productObj={product}/>
                )}
            </div>
        );
    }
}

export default Products;