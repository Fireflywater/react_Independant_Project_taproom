import React from "react";
import PropTypes from "prop-types";

function KegForm(props) {
  /*let workingKeg = {
    name: "Name",
    brand: "Brand",
    price: 0,
    alcoholContent: 0
  }
  if (props.keg != null) {
    workingKeg = props.keg;
  }*/
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          //value={workingKeg.name}
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          //value={workingKeg.brand}
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          //value={workingKeg.price}
          placeholder='Price' />
        <input
          type='number'
          name='alcoholContent'
          //value={workingKeg.alcoholContent}
          placeholder='Alcohol Content' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

KegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  keg: PropTypes.object
};

export default KegForm;
