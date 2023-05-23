/* eslint-disable */
import "./card.css";

// add support for hardmode later
// {!hardMode && <p>{props.name}</p>}

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.handleClick(props.name)}>
      <img className="image-card" src={props.source} alt="" />
      {!props.hardMode && <p>{props.name}</p>}
    </div>
  );
};

export default Card;
