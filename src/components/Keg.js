import React from "react";
import PropTypes from "prop-types";
import './Keg.css';

function Keg(props){
  return (
    <React.Fragment>
      <hr/>
      <div className="kegDiv">
        <div className="row">
          <div className="col-md-12">
            Name: <h4>{props.name}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            Brand: <h4>{props.brand}</h4>
          </div>
          <div className="col-md-3">
            ABV: <h4>{props.alcoholContent.toFixed(2)}%</h4>
          </div>
          <div className="col-md-3">
            Price/Pint: <h4>${props.price.toFixed(2)}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            Pints Remaining: <h4>{props.pints}</h4>
          </div>
          <div className="col-md-2">
            <button onClick={() => props.whenKegDelta(props.id, -1)}>{(props.pints <= 0) ? "Out" : "Sell 1 Pint"}</button>
          </div>
          <div className="col-md-2">
            <button onClick={() => props.whenKegSelect(props.id)}>E</button>
            <button onClick={() => props.whenKegDelete(props.id)}>D</button>
          </div>
          <div className="col-md-4">
            Notice: <h4>
              {(props.pints <= 0) ? "Out of stock" : ""}
              {(props.pints > 0) && (props.pints <= 10) ? "Almost Empty!" : ""}
            </h4>
          </div>
        </div>
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
