import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, showAddTask, toggleAddTask }) {
  return (
    <header className="header">
      <h1 style={headerTextStyle}>{title}</h1>
      <Button
        bgColor={showAddTask ? "red" : "green"}
        text={showAddTask ? "CLOSE" : "ADD"}
        onClick={toggleAddTask}
      />
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
