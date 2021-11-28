import React from "react";

class Post extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.postObj.title}</h1>
                <p>{this.props.postObj.id}</p>
                <p>{this.props.postObj.body}</p>
            </div>
        );
    }
}

export default Post;