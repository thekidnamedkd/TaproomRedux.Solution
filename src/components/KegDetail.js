import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onPintSold } = props;
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
        <h3>Beverage Name: {keg.kegName}</h3>
        <h3>Brand: {keg.kegBrand}</h3>
        <h3>Price: {keg.kegPrice}</h3>
        <h3>ABV: {keg.kegABV}</h3>
        <h3>Pints Left: {keg.kegAmt}</h3>
      <hr/>
      <button onClick = {() => onPintSold(keg.kegId)}>Pint Sold</button>
      <hr />
      <button onClick = { props.onClickingEdit }>Change Keg Info</button>
      <button onClick = {() => onClickingDelete(keg.kegId)}>Remove Keg</button>
      
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onPintSold: PropTypes.func

};

export default KegDetail;