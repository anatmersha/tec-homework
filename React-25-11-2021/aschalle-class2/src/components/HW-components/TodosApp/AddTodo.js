import React from "react";

class AddTodo extends React.Component{
    state = {todoInput: ""};

    newTodoInput = (e) => this.setState({todoInput: e.target.value})
    // addNewTodo = (e) => this.setState({ })

    render(){
        return(
            <div>
                <input onChange={this.newTodoInput} placeholder="Add a new todo"/>
                <button onClick={this.addNewTodo} type="submit"></button>
            </div>
        );
    }
}

export default AddTodo;