import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, showAddTask, toggleAddTask }) {
  let location = useLocation();

  return (
    <header className="header">
      <h1 style={headerTextStyle}>{title}</h1>
      {location.pathname !== "/about" && (
        <Button
          bgColor={showAddTask ? "red" : "green"}
          text={showAddTask ? "CLOSE" : "ADD"}
          onClick={toggleAddTask}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS is JS
const headerTextStyle = {};

export default Header;
