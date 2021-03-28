import PropTypes from "prop-types";

function Button({ text, bgColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  bgColor: "lightgrey",
};

Button.propsTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
