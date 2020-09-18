import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
    1: {
      kegName: "Kevin's Ale",
      kegBrand: "Double Davis Mountain",
      kegPrice: 7,
      kegABV: 7.5,
      kegAmt: 124,
      kegId: 1 
    },
    2: {
      kegName: "Kevin's Lager",
      kegBrand: "Fort Davis",
      kegPrice: 6,
      kegABV: 5.2,
      kegAmt: 124,
      kegId: 2
    }
  };

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

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      kegId: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        kegName: "Kevin's Lager",
        kegBrand: "Fort Davis",
        kegPrice: 6,
        kegABV: 5.2,
        kegAmt: 124,
        kegId: 2
      }
    });
  });
});