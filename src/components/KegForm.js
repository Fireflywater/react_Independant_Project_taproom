import React from "react";
import PropTypes from "prop-types";

function KegForm(props) {
  let workingKeg = {
    name: null,
    brand: null,
    price: null,
    alcoholContent: null
  }
  if (props.keg != null) {
    workingKeg = props.keg;
  }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          defaultValue={workingKeg.name}
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          defaultValue={workingKeg.brand}
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          min={0}
          step={0.01}
          precision={3}
          defaultValue={workingKeg.price}
          placeholder='Price' />
        <input
          type='number'
          name='alcoholContent'
          min={0}
          max={100}
          step={0.01}
          precision={3}
          defaultValue={workingKeg.alcoholContent}
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
