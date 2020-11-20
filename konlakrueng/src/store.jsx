import React from 'react';

const initialState = {
  data: {
    provinces: [],
    categories: [],
    priceRange: [],
    merchants: [],
  },
  province: 'all',
  category: '',
  subCategories: [],
  selectedSubCategory: '',
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
    case 'UPDATE_SELECTED_SUB_CATEGORY':
      return {
        ...state,
        selectedSubCategory: action.payload,
      };
    case 'UPDATE_PRICE':
      return {
        ...state,
        priceRange: action.payload,
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
