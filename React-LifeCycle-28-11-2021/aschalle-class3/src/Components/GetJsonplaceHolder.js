import React from "react";

class GetJsonplaceHolder extends React.Component{
    state = {posts: [], shownPosts: [], }
    index = 0

    componentDidMount(){
        this.getPosts();
    }
    
    getPosts = () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return this.setState({posts: data, shownPosts: data.splice(0,10)})
        })
        .catch((error) => console.log(error))
    }

    next = () => {
        if(this.index < this.state.posts.length - 10){
        this.index +=10
        this.setState({shownPosts: this.state.posts.slice(this.index, this.index + 10)})       
        }
    }

    pre = () => {
        if(this.index > 9){
            this.index -=10
        this.setState({shownPosts: this.state.posts.slice(this.index, this.index + 10)})
        }
    }

    render(){
        return(
            <div> 
                 {this.state.shownPosts.map((post, i) => {
                    return (
                    <p key={i}>{post.title}</p>
                    )
                })}
                <button onClick={this.next}>next10</button>
                <button onClick={this.pre}>pre10</button>
            </div>
        )
    }
}

export default GetJsonplaceHolder;