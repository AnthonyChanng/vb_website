import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
