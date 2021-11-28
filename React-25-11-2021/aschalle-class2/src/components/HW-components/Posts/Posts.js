import React from "react";
import Post from "./Posts/Post";

class Posts extends React.Component{
    state = {posts: []};

    getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <button style={{width:"80px", height:"25px"}} onClick={this.getPosts}>GET</button>
            <div>
                {this.state.posts.map((post, i) => 
                    <Post key={i} postObj={post}/>
                )}
            </div>
            </div>
        );
    }
}

export default Posts;