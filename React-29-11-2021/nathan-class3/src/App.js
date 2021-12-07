import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Posts from "./Component/HW-Components/Posts";
import Person2 from "./Component/Person2";
class App extends React.Component{

  render(){
    return(
    <div className="App">
      {/* <Posts/> */}
      <Person2/>
    </div>      
    )
  }
}


export default App;













































// import logo from './logo.svg';
// import './App.css';
// // import Person2 from "./Component/Person2";
// import GetJsonplaceHolder from "./Component/GetJsonplaceHolder";
// import React from 'react';


// class App extends React.Component{
//   state = {idInput:""};

//   render(){
//     return(
//   <div className="App">
  
//     {!this.state.idInput !== "" ?
//   <input onChange={(e) => {
//   this.setState({idInput: e.target.value})
// }}/>      
// : ""}
    
//   <GetJsonplaceHolder ID={this.state.idInput}/>
//   </div>      
//     )
//   }
// }


// export default App;
