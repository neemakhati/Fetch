// store.js

// store.js

import { createStore } from 'redux';

const initialState = {
  favorites: [],
};

// Reducer function
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORKSHOP':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(favoritesReducer);

export default store;
