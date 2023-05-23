import PropTypes from "prop-types";
import "./topBar.css";

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <h1>Memory Game</h1>
      <p>Current score: {props.currentScore}</p>
      <p>Best score: {props.bestScore}</p>
      <div onClick={props.toggleHardMode}>
        {props.hardMode ? (
          <p className="p-active">
            Hard mode activated
          </p>
        ) : (
          <p>Hard Mode off</p>
        )}
      </div>
    </div>
  );
};

export default TopBar;

TopBar.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  toggleHardMode: PropTypes.func.isRequired,
  hardMode: PropTypes.bool.isRequired,
};
