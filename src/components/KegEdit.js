import React from "react";
import KegForm from "./KegForm";
import PropTypes from "prop-types";

function KegEdit (props) {
  //const { keg } = props;

  function handleKegEdit(event) {
    event.preventDefault();
    props.onKegEdit({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseFloat(event.target.price.value),
      alcoholContent: parseFloat(event.target.alcoholContent.value),
      pints: props.keg.pints,
      id: props.keg.id
    });
  }

  return (
    <React.Fragment>
      <KegForm
        formSubmissionHandler={handleKegEdit}
        keg={props.keg}
        buttonText="Update" />
    </React.Fragment>
  );
}


KegEdit.propTypes = {
  keg: PropTypes.object,
  onKegEdit: PropTypes.func
};

export default KegEdit;
