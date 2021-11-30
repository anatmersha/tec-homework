import React from "react";


class Todos extends React.Component{
     state={todos: [
         {id:1, title: "task1", isComleted: false},
         {id: 2, title: "task2", isComleted: false},
         {id: 3, title: "task3", isComleted: false}
     ], todoInput: ""}

     newTodo = (e) => {this.setState({todoInput: e.target.value})}

     addNewTodo = (e) => {
         e.preventDefault();
 
         const newTodo = {
             id: this.state.todos[this.state.todos.length-1].id+1,
             title: this.state.todoInput,
             completed: false
         };

         const temp = this.state.todos;
         temp.push(newTodo);
         this.setState({todos: temp})
         console.log(this.state.todos);
    }

    deletedTodo = (i) => {
        const temp = this.state.todos;
        temp.splice(i, 1);
        this.setState({todos: temp});
    }

    updateTodo = (i) => {
        const temp = this.state.todos[i];
        temp.isComleted = true;
        this.setState({todos: [...this.state.todos.concat(temp)]})
    }

    render(){
         return(
            <div style={{display:"inline-flex",backgroundColor:"beige",justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "200px"}}>
                <h1 style={{fontSize: "62px", marginBottom: "80px", fontFamily: "fangsong",letterSpacing: "6px"}}>My Todos<i class="fa fa-check-square-o"></i></h1>
                <form onSubmit={this.addNewTodo}>
                    <input style={{width: "600px",height: "40px", fontSize: "17px"}} onChange={this.newTodo} placeholder="Add a new todo"/>
                    <button style={{height: "46px", width: "100px", fontSize: "17px",fontWeight: "bold"}} type="submit">ADD</button>
                </form>

                {this.state.todos.map((todo, i) => {
                    return(
                    !todo.isComleted ?
                    <div key={i} style={{display:"flex", width:"713px", backgroundColor: "aliceblue", marginBottom: "12px", marginTop: "80px", borderRadius: "30px"}}>
                    <p style={{width: "594px", height: "40px",textAlign: "left", fontSize:"22px", marginLeft: "22px"}}>{todo.title}</p> 
                    <button style={{height: "40px", width: "56px", marginTop:"20px", backgroundColor:"transparent", border:"transparent"}} onClick={() => { this.deletedTodo(i)}}><i style={{fontSize: "30px", marginRight: "5px"}} class="fa fa-trash-o"></i></button>
                    <button style={{height: "40px", width: "56px", marginTop:"20px", backgroundColor:"transparent", border:"transparent"}} onClick={() => { this.updateTodo(i)}}><i style={{fontSize: "30px", marginRight: "5px"}} class="fa fa-edit"></i></button>
                    </div> 
                    :         
                    "" 
                    )
                })}
            </div>
         );
     }
}

export default Todos;