import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./components/Layout/layout";
import Navbar from "./components/Navbar/navbar";
import Bottombar from "./components/Bottombar/bottombar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route index element={<Bottombar />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
