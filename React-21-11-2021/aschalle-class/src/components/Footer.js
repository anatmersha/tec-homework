import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer>
                <form>
                    <input type="text" placeholder="Insert name">{this.props.name}</input><br></br>
                    <input type="email" placeholder="Insert email">{this.props.email}</input><br></br>
                    <textarea type="text" placeholder="Insert message">{this.props.message}</textarea>
                </form>
                </footer>
            </div>
        )
    }
}

export default Footer;