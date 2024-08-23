import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./components/Layout/layout";
import Boys from "./components/Boys/boys";
import Girls from "./components/Girls/girls";
import Coaches from "./components/Coaches/coaches";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Boys" element={<Boys />} />
            <Route path="/Girls" element={<Girls />} />
            <Route path="/Coaches" element={<Coaches />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
