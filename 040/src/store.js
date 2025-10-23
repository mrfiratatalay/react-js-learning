import { createStore } from 'redux';

const initialState = {
  count: 0,
};

//Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'ADD_BY_AMOUNT':
      return { ...state, count: state.count + (action.payload || 0) };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);
export default store;
