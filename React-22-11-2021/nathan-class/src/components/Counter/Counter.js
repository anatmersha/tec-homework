import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        // state - start position
        this.state ={count: this.props.number};
        // bind - attaching to the function
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    
    increment(){
        this.setState({count: this.state.count + 1});
    }
    decrement(){
        this.setState({count: this.state.count - 1});
    }
        render(){
            return(
                <div>
                <button style={{width:"100px", height:"20px"}} onClick={this.increment}>increment</button><br></br>
                <button style={{width:"100px", height:"20px"}} onClick={this.decrement}>decrement</button>
                <p>Count: {this.state.count}</p>
            </div>
        );    
    }
}


export default Counter;