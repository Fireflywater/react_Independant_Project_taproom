import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegDetails(props){

  return (
    <React.Fragment>
      <Keg
        whenKegSelect={props.onKegSelection}
        whenKegDelete={props.onKegDelete}
        whenKegDelta={props.onKegDelta}
        name={props.keg.name}
        brand={props.keg.brand}
        price={props.keg.price}
        alcoholContent={props.keg.alcoholContent}
        pints={props.keg.pints}
        id={props.keg.id}
        key={props.keg.id}/>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onKegSelection: PropTypes.func,
  onKegDelete: PropTypes.func,
  onKegDelta: PropTypes.func
};

export default KegDetails;
