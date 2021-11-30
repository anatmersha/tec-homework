import React from "react";

class GetJsonplaceHolder extends React.Component{
    state={posts:[], id: ""}

    componentDidMount(){
        this.getPosts();
    }

    getPosts = () =>{
        const id = this.state.id;
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {this.setState({posts: data})})
        .catch(err => console.log(err))
    }

    componentDidUpdate(prev){
        if(prev.ID !== this.props.ID){
            this.getUpdatedPosts()
        }
    }

    getUpdatedPosts = () =>{
        const id = this.props.ID;
        if(id !== ""){
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data});
            console.log(data)})
        .catch(err => console.log(err))}
    }

    render(){
        return(
            <div style={{display: "flex", justifyContent: "center"}}>
                <p>User id: {this.state.posts.userId}</p>
                <p>id: {this.state.posts.id}</p>
                <p>Title: {this.state.posts.title}</p>
            </div>
        )
    }
}

export default GetJsonplaceHolder;