import React from "react";

class Todos extends React.Component{
     state={todos: [
         {title: "task1", isComleted: false},
         {title: "task2", isComleted: false},
         {title: "task3", isComleted: false}
     ]}

    deletedTodo = (i) => {
        const temp = this.state.todos;
        temp.splice(i, 1);
        this.setState({todos: temp});
    }

     render(){
         return(
            <div>
                {this.state.todos.map((todo, i) => {
                    {
                    !todo.isComleted ?
                    <div>
                    <p>{todo.title}</p> <button onClick={() => {
                        this.deletedTodo(i)
                    }}>DELETE</button>
                    </div>
                    : 
                    ""
                    }
                })}
            </div>
         );
     }
}

export default Todos;