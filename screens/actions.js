// actions.js

export const addToFavorites = (workshop) => {
    return {
      type: 'ADD_TO_FAVORITES',
      payload: workshop,
    };
  };
  
  // actions.js

export const addWorkshop = (workshop) => {
    return {
      type: 'ADD_WORKSHOP',
      payload: workshop,
    };
  };
  