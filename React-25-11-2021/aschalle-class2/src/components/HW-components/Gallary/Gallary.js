import React from "react";

class Gallary extends React.Component{
    state={images:[
        "https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798__340.jpg",
        "https://cdn.pixabay.com/photo/2018/04/28/10/55/architecture-3357028__340.jpg",
        "https://cdn.pixabay.com/photo/2021/11/13/19/27/architecture-6792169__340.jpg"
    ],
    mainImg: "https://cdn.pixabay.com/photo/2015/07/10/15/13/architecture-839362__340.jpg"}

    changeImg = (e) => this.setState({mainImg: this.state.mainImg});

    render(){
        return(
     <section>
         <article onClick={this.changeImg} className="imageGallary"><img style={{width: "800px", height: "400px"}} src={this.state.mainImg} alt=""></img></article>
         <article className="mainImage">{this.state.images.map((img, i) => <img key={i} src={img} alt=""></img>)}</article>
     </section>
        );
    }
}

export default Gallary;