const { createStore } = require('redux');

console.log('--- Redux core calismasi basladi ---');

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  console.log('Reducer tetiklendi. Action:', action.type);

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log('>>> State degisti! Yeni Durum:', store.getState());
});

console.log('Baslangic State:', store.getState());

console.log('\nDispatch: INCREMENT');
store.dispatch({ type: 'INCREMENT' });

console.log('\nDispatch: INCREMENT');
store.dispatch({ type: 'INCREMENT' });

console.log('\nDispatch: DECREMENT');
store.dispatch({ type: 'DECREMENT' });

console.log('\nDispatch: UNKNOWN_ACTION');
store.dispatch({ type: 'UNKNOWN_ACTION' });

console.log('\nCalisma Bitti. Son Durum:', store.getState());
