import { Link } from "react-router-dom";
import "./menu.scss";
import icon from "../../../assets/images/menuicon.png";

export default function Menu() {
  return (
    <div>
      <label className="dropdown-menu">
        <input type="button" className="dropdown" />
      </label>
      <aside className="links-container">
        <nav className="links">
          <Link to="/">
            <h1>Home </h1>
          </Link>
          <Link to="/Boys">
            <h1>Boys </h1>
          </Link>
          <Link to="/Girls">
            <h1>Girls </h1>
          </Link>
          <Link to="/Coaches">
            <h1>Coaches </h1>
          </Link>
        </nav>
      </aside>
    </div>
  );
}
