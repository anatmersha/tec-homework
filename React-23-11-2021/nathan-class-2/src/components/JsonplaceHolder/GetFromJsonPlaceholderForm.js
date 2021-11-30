import axios from "axios";
import React from "react";

class GetFromJsonPlaceholderForm extends React.Component{
    state={url: "", data: []};
    urlHandler = (e) => this.setState({url: e.target.value});
    getLength = (e) => {
        e.preventDefault();
        axios
        .get(this.state.url)
        .then((response) => this.setState({data: response.data}))
        .catch((error) => console.log(error))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.getLength}>
                    <input style={{width:"200px", height:"22px"}} onChange={this.urlHandler} placeholder="Insert url"/><br/>
                    <button style={{width:"70px", height:"22px"}} type="submit">GET</button>
                </form>
                <p>{this.state.data.length}</p>
            </div>
        );
    }
}

export default GetFromJsonPlaceholderForm;