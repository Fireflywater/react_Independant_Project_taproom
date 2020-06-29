import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){

  return (
    <React.Fragment>
      <hr/> testtest
      {props.kegList.map((ticket) =>
        <Keg
          name={ticket.name}
          brand={ticket.brand}
          price={ticket.price}
          alcoholContent={ticket.alcoholContent}
          id={ticket.id}
          key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
