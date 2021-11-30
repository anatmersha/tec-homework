import React from "react";
// react_state_2
class CounterProps extends React.Component{
    constructor(props){
        super(props);
        this.state={count: this.props.number};
        this.increment=this.increment.bind(this);
    }
    increment(){
        this.setState({count: this.state.count + 1})
    }
render(){
    return(
        <div>
            <button style={{width:"100px", height:"25px", fontSize:"20px", fontWeight:"bold"}} onClick={this.increment}>+</button>
            <p>Count is: {this.state.count}</p>
        </div>
    );
}
}
export default CounterProps;