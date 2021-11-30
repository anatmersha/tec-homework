import React from "react";

class ToCounted extends React.Component{
constructor(props){
    super(props);
    this.state = {count1: 0, count2: 0};
    this.incrementFirst = this.incrementFirst.bind(this);
    this.incrementSecond = this.incrementSecond.bind(this);
}
incrementFirst() {
this.setState({count1: this.state.count1 + 1});
}
incrementSecond(){
    this.setState({count2: this.state.count2 + 1});
}
    render(){
        return(
            <div>
                <button style={{width:"100px", height:"20px"}} onClick={this.incrementFirst}>increment1</button>
                <p>Count 1: {this.state.count1}</p>
                <button style={{width:"100px", height:"20px"}} onClick={this.incrementSecond}>increment2</button>
                <p>Count 2: {this.state.count2}</p>
            </div>
        );
    }
}

export default ToCounted;