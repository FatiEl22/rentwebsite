import React from "react";
import Home from "./Home";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Login from "./Login";
import Appinfo from "./Appinfo";
import Footer from "./Footer";
import "../Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return(
      <div className="all">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appinfo/:id" element={<Appinfo/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    
);
};

export default App;
