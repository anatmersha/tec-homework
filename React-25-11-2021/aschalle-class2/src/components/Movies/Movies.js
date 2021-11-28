import React from "react";
import Movie from "./Movie";

class Movies extends React.Component{
    state = {
        movies:[
            {Name:"Bad boys", Img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JIXib0DczLjgx83T-hJe2QHaLH%26pid%3DApi&f=1", LeadActor: "Will smith and Martin lorenz"},
            {Name:"Friday", Img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.PA34AdMxyyDYzIUfZlO--AHaKj%26pid%3DApi&f=1", LeadActor: "Ice cube and Chris tucker"},
            {Name:"Coming to Americs", Img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AgXtsK-XMYazTNMXr2EcfgHaKj%26pid%3DApi&f=1", LeadActor: "Eddie murphy"}
        ]};
    render(){
        return(
            <div>
                {this.state.movies.map((movie, i) => 
                <Movie key={i} movieObj={movie}/>
                )}
            </div>
        );
    }
}

export default Movies;