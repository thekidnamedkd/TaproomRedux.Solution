import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    kegName: "Kevin's Ale",
    kegBrand: "Double Davis Mountain",
    kegPrice: 7,
    kegABV: 7.5,
    kegAmt: 124,
    kegId: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to keg list', () => {
    const { kegName, kegBrand, kegPrice, kegABV, kegAmt, kegId } = kegData;
    action = {
      type: 'ADD_KEG',
      kegName: kegName,
      kegBrand: kegBrand,
      kegPrice: kegPrice,
      kegABV: kegABV,
      kegAmt: kegAmt,
      kegId: kegId
    };

  expect(kegListReducer({}, action)).toEqual({
    [kegId]: {
      kegName: kegName,
      kegBrand: kegBrand,
      kegPrice: kegPrice,
      kegABV: kegABV,
      kegAmt: kegAmt,
      kegId: kegId
    }
  });
  });

});
