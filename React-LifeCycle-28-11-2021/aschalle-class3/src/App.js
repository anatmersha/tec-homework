import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Exapmple from "./Components/Exapmple";
import GetJsonplaceHolder from "./Components/GetJsonplaceHolder";
import Todos from "./Components/HW-Components/Todos/Todos";

class App extends React.Component{
  
  render(){
    return(
    <div className="App">
      {/* <GetJsonplaceHolder/> */}
      <Todos/>
    </div>      
    );
  }
}

export default App;












// class App extends React.Component{
//   // state = (show: false)
  
//   render(){
//     return(
//     <div className="App">
//     {this.state.show ? 
//       <Exapmple/>: 
//       ""
//     }
//     <button onClick={()=> this.setState({show: !this.state.show})}></button>
//     </div>      
//     );
//   }
// }

// export default App;
