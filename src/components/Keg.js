import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div>
        {props.name} / {props.brand} / {props.price} / {props.alcoholContent} / {props.pints}
        <button onClick={() => props.whenKegDelta(props.id, -1)}>-</button>
        <button onClick={() => props.whenKegSelect(props.id)}>E</button>
        <button onClick={() => props.whenKegDelete(props.id)}>D</button>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenKegSelect: PropTypes.func,
  whenKegDelete: PropTypes.func,
  whenKegDelta: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string
};

export default Keg;
