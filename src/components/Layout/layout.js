import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Navbar from "../Navbar/navbar";
import Bottombar from "../Bottombar/bottombar";
const Layout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Bottombar />
    </div>
  );
};

export default Layout;
