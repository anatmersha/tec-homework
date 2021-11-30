import React from "react";
// react_state_1
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={count: 0};
        this.increment=this.increment.bind(this);
    }
    increment(){
        this.setState({count: this.state.count + 1});
    }
    render(){
        return(
            <div>
                <button onClick={this.increment}>CLICK</button>
                <p>Count is: {this.state.count}</p>
            </div>
        );
    }
}
export default Counter;