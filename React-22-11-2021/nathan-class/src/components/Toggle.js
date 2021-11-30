import React from "react";

class Toggle extends React.Component{
    constructor(props){
    super(props);
    this.state={textShown: this.props.text, color: "red"};
    this.changeColor=this.changeColor.bind(this);

    }

    changeColor = () => {
        let a=Math.floor(Math.random()*256), b=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256);
        console.log(`rgb(${a},${b},${c})`);
        // 
        let Color = this.state.color === "red" ? "blue":"red"
        this.setState({color: Color});
        // if(this.state.color === "red"){
        //     this.setState({color: "blue"})
        // }else{
        //     this.setState({color: "red"});
        // }
    }

    render(){
        return(
            <div>
                <p style={{color:this.state.color, fontSize:"50px"}} onClick={this.changeColor}>{this.state.textShown}</p>
            </div>
        )
    }
}

export default Toggle;


// 



// 