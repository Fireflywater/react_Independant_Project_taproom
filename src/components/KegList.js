import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg
          whenKegSelect={props.onKegSelection}
          whenKegDelete={props.onKegDelete}
          whenKegDelta={props.onKegDelta}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onKegDelete: PropTypes.func,
  onKegDelta: PropTypes.func
};

export default KegList;
