import React from "react";
// react_styling_0.7
class ShowHide extends React.Component{
    constructor(props){
        super(props);
        this.state= {display: "flex"};
        this.textDesapear=this.textDesapear.bind(this);
    }

    textDesapear(){
        this.setState({display: this.state.display === "flex" ? "none":"flex"})
    }

    render(){
        return(
            <div>
                <button onClick={this.textDesapear}>CLICK</button>
                <p style={{display:this.state.display}}>{this.props.text}</p>
            </div>
        );
    }
}

export default ShowHide;