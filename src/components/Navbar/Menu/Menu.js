import "./menu.scss";
import MenuButton from "./MenuButton/menuButton";
import MenuContent from "./MenuButtonContent/menuButtonContent";

const Menu = ({ content }) => {
  return (
    <div>
      <div className="button">
        {" "}
        <MenuButton />{" "}
      </div>
      <MenuContent>{content}</MenuContent>
    </div>
  );
};

export default Menu;
