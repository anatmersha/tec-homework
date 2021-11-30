import React from "react";

class Exapmple extends React.Component{

// !component is been intalized
    state = {num: 5}
    timeInterval;

// !When component is ready
    componentDidMount(){
        console.log("mounted");
        // this.timeInterval = setInterval(()=>{
        //     console.log("interval");
        // }, 1000)
    }

// !When component been updated - setState
    componentDidUpdate(){
        console.log("updated");
    }

// !When component is finished
    componentWillUnmount() {
        console.log("unmounted");
    }

    render(){
        return(
            <div>
                <h1>{this.state.num}</h1> 
                <button onClick={() => this.setState({num: this.state.num + 1})}>increment</button>
            </div>
        )
    }
}

// export default Exapmple;