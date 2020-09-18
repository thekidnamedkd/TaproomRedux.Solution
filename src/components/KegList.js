import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) => (
        <Keg
          whenKegClicked = {props.onKegSelection}
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          kegPrice={keg.kegPrice}
          kegABV={keg.kegABV}
          kegAmt={keg.kegAmt}
          kegId={keg.kegId}
          key={keg.kegId}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onPintSale: PropTypes.func
};

export default KegList;