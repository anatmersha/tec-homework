import axios from "axios";
import React from "react";

class GetFromJsonPlaceholder extends React.Component{
    state={url: "", data: []};
    urlHandler = (e) => this.setState({url: e.target.value});
    getLength = () => {
        axios
        .get(this.state.url)
        .then((response) => this.setState({data: response.data}))
        .catch((error) => console.log(error))
    }
    
    render(){
        return(
            <div>
                <input style={{width:"200px", height:"22px"}} onChange={this.urlHandler} placeholder="Insert url"/><br/>
                <button style={{width:"70px", height:"22px"}} onClick={this.getLength}>GET</button>
                <p>{this.state.data.length}</p>
            </div>
        );
    }
}

export default GetFromJsonPlaceholder;