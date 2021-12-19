import './App.css';
import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import Events from './Components/Events';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Mentoring from './Components/Mentoring';
import NavBar from './Components/NavBar';
import Testimonials from './Components/Testimonials';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>

      <div className="App">
      <NavBar/>        
      <hr />
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Mentoring" element={<Mentoring/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Testimonials" element={<Testimonials/>}/>

        </Routes>
      <Footer/>
      </div>

      </BrowserRouter>
  );
}

export default App;
