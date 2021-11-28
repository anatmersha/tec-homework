 import React from "react";

class Todos extends React.Component{
    state={todos: [], todoInput: ""};
    
    render(){
        return(
            <div>
                {this.state.todos.map(({title, status}) =>
                
                )}
            </div>
        );
    }
}

export default Todos;