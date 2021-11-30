import React from "react";
class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <h1>{this.props.name}</h1>
                    <img style={{width:"200px", height:"200px"}} src={this.props.src} alt="React Logo"></img>
                </header>
            </div>
        );
    }
}

export default Header;