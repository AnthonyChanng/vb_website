import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./components/Layout/layout";
import Boys from "./components/Teams/boys";
import Girls from "./components/Teams/girls";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Boys" element={<Boys />} />
            <Route path="/Girls" element={<Girls />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
