import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Navbar from "./Navbar.jsx"
import TImeLine from "./components/TImeLine.jsx"
const App = () => {
  return (
    <>
       <Router>
          <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/timeline' element={<TImeLine/>}></Route>
        </Routes>

       </Router>

    </>
  );
};

export default App;
