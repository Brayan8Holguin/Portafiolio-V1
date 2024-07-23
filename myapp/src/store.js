// src/store.js
import { createStore } from 'redux';

// Estado inicial
const initialState = {
  count: 0
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    // Agrega más casos de acción según sea necesario
    default:
      return state;
  }
}

// Crear el store de Redux con soporte para Redux DevTools
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;