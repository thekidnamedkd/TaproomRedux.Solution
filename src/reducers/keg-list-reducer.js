export default (state = {}, action) => {
  const { kegName, kegBrand, kegPrice, kegABV, kegAmt, kegId } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [kegId]: {
          kegName: kegName,
          kegBrand: kegBrand,
          kegPrice: kegPrice,
          kegABV: kegABV,
          kegAmt: kegAmt,
          kegId: kegId
        }
      });
  default:
    return state;
  }
};