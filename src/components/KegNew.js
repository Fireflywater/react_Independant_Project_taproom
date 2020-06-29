import React from "react";
import KegForm from "./KegForm";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function KegNew(props){

  function handleKegNew(event) {
    event.preventDefault();
    props.onKegNew({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <KegForm
        formSubmissionHandler={handleKegNew}
        buttonText="New" />
    </React.Fragment>
  );
}

KegNew.propTypes = {
  onKegNew: PropTypes.func
};

export default KegNew;
