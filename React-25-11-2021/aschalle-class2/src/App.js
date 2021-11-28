import logo from './logo.svg';
import './App.css';
// import Products from "./components/Products"
// import Cars from "./components/Cars/Cars"
// import Movies from "./components/Movies/Movies";
// import Posts from "./components/HW-components/Posts";
import AllTodos from "./components/HW-components/TodosApp/AllTodos";
import Gallary from "./components/HW-components/Gallary/Gallary";

function App() {
  return (
    <div className="App">
      {/* <Posts/> */}
      <AllTodos/>
      <Gallary/>
    </div>
  );
}

export default App;
