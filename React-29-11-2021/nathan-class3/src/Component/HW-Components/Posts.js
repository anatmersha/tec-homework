import React  from "react";

class Posts extends React.Component{
    state = {posts: [], updatedPost: {id: "",userId: "",title: ""}, inputUserId: "", inputTitle: ""};

    componentDidMount(){
        this.getTodos()
    }

    // componentDidUpdate(prev){
    //     if(prev.posts !== this.state.posts){
    //         this.getTodos()
    //         console.log("hiiiiii");
    //     }
    // }

    getTodos = () =>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data});
            console.log(data);
        })
        .catch(err => console.log(err))
    }

    render(){
        const {posts} = this.state;
        return(
            <div style={{display: "inline-flex", width: "1100px", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "130px",backgroundColor:"cornsilk"}}>
                <h1 style={{marginBottom:"55px",fontSize: "50px"}}>Update your tasks</h1>
                <input style={{width: "270px", height: "27px", marginBottom: "10px"}} onChange={(e)=> this.setState({inputUserId: e.target.value})} defaultValue={this.state.updatedPost.userId}/>
                <input style={{width: "270px", height: "27px", marginBottom: "5px"}} onChange={(e)=> this.setState({inputTitle: e.target.value})} defaultValue={this.state.updatedPost.title}/>
                <button onClick={()=>{
                        let post = posts.find(it=>it.id === this.state.updatedPost.id)
                        post.userId = this.state.inputUserId;
                        post.title = this.state.inputTitle;
                        this.setState({post})
                    }}  style={{width: "279px", height: "30px", marginBottom: "5px"}}>UPDATE</button>
            <h1 style={{marginBottom:"30px",fontSize: "50px"}}>My Todos</h1>
            <table style={{border: "black solid 1px", width: "1030px"}}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>USER-ID</th>
                    <th>TITLE</th>
                    </tr>
                </thead>
                {this.state.posts.map((post, i) => {
                    return (
                    <tbody key={i}>
                        <tr>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>

                        <td><button onClick={()=>{
                            const temp = this.state.posts;
                            temp.splice(i,1);
                            this.setState({posts: temp})
                        }} style={{width: "37px", height: "35px", backgroundColor:"transparent", border:"transparent"}}><i style={{fontSize: "30px"}} class="fa fa-trash-o"></i></button></td>

                        <td><button onClick={()=>{
                            this.setState({updatedPost: post})
                            console.log(post);
                        }} style={{width: "37px", height: "35px", backgroundColor:"transparent", border:"transparent"}}><i style={{fontSize: "30px"}} class="fa fa-edit"></i></button></td>
                        </tr>
                    </tbody>
                    )
                })}
           </table>
           </div>
        )
    }
}

export default Posts;