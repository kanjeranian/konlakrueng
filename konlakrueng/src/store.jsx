import React from 'react';

const initialState = {
  data: {
    provinces: [],
    categories: [],
  },
  province: 'all',
  category: '',
  subCategories: [],
  priceRange: 'all',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'UPDATE_PROVINCE':
      return {
        ...state,
        province: action.payload,
      };
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        category: action.payload,
        subCategories:
          state.data.categories.find(
            (category) => category.name === action.payload
          ) ?? [],
      };
    case 'UPDATE_PRICE':
      if (action.payload === null) {
        return {
          ...state,
          priceRange: action.payload,
        };
      }
      return {
        ...state,
        priceRange: state.data.priceRange
          .map((range, index) => ({
            range: range,
            priceLevel: index + 1,
          }))
          .find((range) => range.range === action.payload),
      };
    default:
      return state;
  }
};

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
