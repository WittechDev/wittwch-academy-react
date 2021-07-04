import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ title, showAddTask, toggleAddTask }) {
  const count = useSelector((state) => state.counter.value);
  let location = useLocation();

  return (
    <header className="header">
      <h1 style={headerTextStyle}>
        {title}: {count}
      </h1>
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
