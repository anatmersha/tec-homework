import React from "react";
// react_state_3
class SmarterCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={count1: 0,count2: 0};
        this.counter1=this.counter1.bind(this);
        this.counter2=this.counter2.bind(this);
    }
    counter1(){
        this.setState({count1: this.state.count1 + 1})
    } 
    counter2(){
        this.setState({count2: this.state.count2 + 1})
    }
    render(){
        return(
            <div>
                <button style={{width:"100px", height:"20px"}} onClick={this.counter1}>CLICK</button>
                <p>Count1 is: {this.state.count1}</p>
                <button style={{width:"100px", height:"20px"}} onClick={this.counter2}>CLICK</button>
                <p>Count2 is: {this.state.count2}</p>
            </div>
        );
    }
}
export default SmarterCounter;