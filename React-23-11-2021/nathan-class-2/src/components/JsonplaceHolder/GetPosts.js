import axios from "axios";

const GetPosts = () => {
    const getPosts = () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        axios
        .get(url)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    }
    return(
        <div>
            <button onClick={getPosts}>GET</button>
        </div>
    );
}

export default GetPosts;