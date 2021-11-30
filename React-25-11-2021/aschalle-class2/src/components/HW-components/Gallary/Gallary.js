import React from "react";

class Gallary extends React.Component{
    state = {images:[
        "https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798__340.jpg",
        "https://cdn.pixabay.com/photo/2018/04/28/10/55/architecture-3357028__340.jpg",
        "https://cdn.pixabay.com/photo/2021/11/13/19/27/architecture-6792169__340.jpg",
        "https://cdn.pixabay.com/photo/2015/07/10/15/13/architecture-839362__340.jpg"
    ], index: 0 }

    render(){
        return (
     <section>
        <article onClick={this.changeImg} className="mainImage">
            <img style={{width: "800px", height: "400px"}} src={this.state.images[this.state.index]} alt=""></img>
        </article>
        <article className="imageGallary">{this.state.images.map((img, i) => { 
             return (
             <img key={i} src={img} alt="" onClick={() => {this.setState({index: i})}}></img>
             )})}
        </article>
     </section>
        );
    }
}

export default Gallary;