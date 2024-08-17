import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Bottombar from "../Bottombar/bottombar";
const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Bottombar />
    </div>
  );
};

export default Layout;
