import React from "react";
import Car from "./Car";

class Cars extends React.Component{
    state={
        cars:[
            {Brand: "Toyota", Price: 60000, Img: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg"},
            {Brand: "Mazda", Price: 30000, Img: "https://cdn.pixabay.com/photo/2016/03/30/20/20/auto-1291492__340.jpg"},
            {Brand: "Porche", Price: 150000, Img: "https://cdn.pixabay.com/photo/2014/07/03/15/53/porsche-382987__340.jpg"}
        ]}
    render(){
        return(
            <div>
                {this.state.cars.map((cars, i) =>
                      <Car key={i} carObj={cars}/>
                )}
            </div>
        );
    }
}

export default Cars;