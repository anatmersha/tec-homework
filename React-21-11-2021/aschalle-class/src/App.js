import './App.css';
import React from "react";
// import BakedGoods from "./components/HW-components/BakedGoods";
// import RestEmployees from "./components/HW-components/RestEmployees";
// import FoodCategories from "./components/HW-components/FoodCategories";
// import Employees from "./components/HW-components/Employees";
// import State from "./components/HW-components/State"
import Car from "./components/HW-components/Car/Car"
import Movie from './components/HW-components/Movie/Movie';

class App extends React.Component {

  render() {
    const car = { model:"g5", price:"12000", img:"https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png"};
    const movie = {name: "Bad boys", year: "2002", actor: "Will Smith and Martin Lorense", img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JIXib0DczLjgx83T-hJe2QHaLH%26pid%3DApi&f=1"}
    return (
      <section>
        {/* <BakedGoods/>
        <RestEmployees/>
        <FoodCategories/>
        <Employees/>
        <State/> */}
        <Car carObj={car}/>
        <Movie movieObj={movie}/>
      </section>
    );
  }
}

export default App;











// import './App.css';
// ייבוא הספרייה
// import React from "react";
// import Media from "./components/Media";
// import Employee from "./components/Employee";
// import Division from "./components/Division";
// import Headline from "./components/Headline";
// import Employees from "./components/Employees";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";

// מאפשר לנו להשתמש בCLASS 
// קומפוננטה של קלאס - מחייב רנדר משלו!
// class App extends React.Component {


//   // render() {
//   //   return (
//   //     <section className="sec" style={{backgroundColor:"white"}}>
//         {/* <Media/>
//         <Employee name="Anat" image="https://cdn.pixabay.com/photo/2021/11/05/20/41/woman-6771981__340.jpg"/>
//         <Employee name="Shmuel" image="https://cdn.pixabay.com/photo/2021/09/22/15/54/cat-6647197__340.jpg"/>
//         <Employee name="Shy" image="https://cdn.pixabay.com/photo/2021/11/11/05/04/woman-6785370__340.jpg"/>
//         <Division/>
//         <Headline/>
//         <Employees/>
//         <Header name="Anat Mersha" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Freact-1-logo-png-transparent.png&f=1&nofb=1"/>
//         <Footer/>
//         <Main description="A worker" img="https://cdn.pixabay.com/photo/2021/11/12/18/13/greenfinch-6789772__340.jpg" video="https://player.vimeo.com/external/641767570.sd.mp4?s=34c854dc941c4f1e0b852dca91a686e519b25700&profile_id=165&oauth_token_id=1027659655"/> */}
//       {/* </section>
//     );
//   }
// }


// export default App; */}
