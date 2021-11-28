import React from "react";

class AllTodos extends React.Component{
    state = {todos: [], todoInput: ""};

    newTodo = (e) => {this.setState({todoInput: e.target.value})}

    deleteTodo = (i) => {
        const todosList = this.state.todos;
        todosList.splice(i, 1);
        this.setState({todos: [todosList]})
    }

    addNewTodo = (e) => {
        e.preventDefault();

        const newTodo = {
            title: this.state.todoInput,
            completed: false
        };
        this.setState({todos: [...this.state.todos.concat(newTodo)]})
}

render(){
        return(
            <div>
                <h1>Todo-List</h1>                
            {this.state.todos.map((todo, i) => {
                return(
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={i} onClick={this.deleteTodo(i)}>
                    {todo.title}
                </div>
                );
            })}
                <form onSubmit={this.addNewTodo}>
                <input onChange={this.newTodo} placeholder="Add a new todo"/>
                <button type="submit"></button>
                </form>
            </div>
        )
    }
}

export default AllTodos;






































// import React from "react";
// import Todo from "./Todo";

// class AllTodos extends React.Component{
//     // state = {todos: [], todoInput: ""};
//     state = {todos: [{title:"wash dishes",status: "done"}], todoInput: {title:"knk", status:"jnj"}};

//     newTodoInput = (e) => {this.setState({todoInput: e.target.value}); console.log(this.state);}
//     addNewTodo = (e) => this.setState({todos: [this.state.todos, this.state.todoInput.title]})

//     render(){
//         return(
//             <div>
//                 <h1>Todo-List</h1>
//                 <ul>
//                 {this.state.todos.map(({title, status}, i) => 
//                     <Todo key={i} todoTitleObj={title} todoStatusObj={status}/>
//                 )}
//                 {/* {this.state.todos.map((task, i) => 
//                     <Todo key={i} todoObj={task}/>
//                 )} */}
//                 </ul>
//                 <input onChange={this.newTodoInput} placeholder="Add a new todo"/>
//                 <button onClick={this.addNewTodo} type="submit"></button>
//             </div>
//         );
//     }
// }

// export default AllTodos;