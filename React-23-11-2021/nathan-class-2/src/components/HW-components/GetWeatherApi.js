import axios from "axios";
import React from "react";
import "../HW-components/GetWeatherApi.css";

class GetWeatherApi extends React.Component{
    state={inputCity: "",data: ""};
    
    getCityName = (e) => this.setState({inputCity: e.target.value})
    
    getCityWather = () => {

        const apiKey = "e349d23c445383fae0196ca17e08c262";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputCity}&appid=${apiKey}`;
        axios
        .get(url)
        .then((response) => {
            this.setState({data: 
                `The temputre is ${response.data.main.temp}
                The max temputre is ${response.data.main.temp_max} 
                The min temputre is ${response.data.main.temp_min}`
            })})
        .catch((error) => this.setState({data: "This city doesn't exist"}))
    }

    render(){
        return(
            <div className="weather">
                <h1>What's The Weather ?</h1>
                <h3>Insert a city name</h3>
                <input onChange={this.getCityName}/>
                <button onClick={this.getCityWather}>GET</button>
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default GetWeatherApi;