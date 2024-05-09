import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Navbar from "./Navbar.jsx"
import TimeLine from "./components/Timeline/TimeLine.jsx";
import Accordion from "./components/Accordion/Accordion.jsx";
import Carousel from "./components/carousel/carousel.jsx";
import DecisionMaker from "./components/decisionmaker/decisionmaker.jsx";
const App = () => {
  return (
    <>
       <Router>
          <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/timeline' element={<TimeLine/>}></Route>
        <Route path='/accordion' element={<Accordion/>}></Route>
        <Route path='/carousel' element={<Carousel/>}></Route>
        <Route path='/decisionmaker' element={<DecisionMaker/>}></Route>
        </Routes>

       </Router>

    </>
  );
};

export default App;
