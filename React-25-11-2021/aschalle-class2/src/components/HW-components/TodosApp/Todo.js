import React from "react";

class Todo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.todoObj}</p>
            </div>
        );
    }
}

export default Todo;