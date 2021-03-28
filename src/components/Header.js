import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title }) {
  const onClick = () => {
    console.log("onClick");
  };

  return (
    <header className="header">
      <h1 style={headerTextStyle}>{title}</h1>
      <Button bgColor="green" text="ADD" onClick={onClick} />
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
