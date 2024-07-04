import "./App.css";
import React from "react";
import Home from "./home/Home";
import Courses from "./course/Courses";
import { Route, Routes } from "react-router-dom";
import Contacts from "./contacts/Contacts";
import Portfolio from "./portfolio/Portfolio";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      {/* <Home/>
      <Course/> */}
    </>
  );
}

export default App;
