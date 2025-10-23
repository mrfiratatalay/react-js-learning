const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').thunk;
const fetch = require('node-fetch');

console.log('--- Redux Async (Thunk) Calismasi Basaldi ---');

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FECTH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case FECTH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, user: null, error: action.payload };
    default:
      return state;
  }
}

const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
const fetchUserSuccess = (user) => ({ type: FECTH_USER_SUCCESS, payload: user });
const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });

const fetchUserData = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const store = createStore(userReducer, applyMiddleware(thunkMiddleware));

console.log('Baslangic State:', store.getState());

store.subscribe(() => {
  console.log('>>> State degisti! YENI DURUM:', store.getState());
});

console.log('\nDispatch: fetchUserData (Thunk)');
store.dispatch(fetchUserData());

console.log('\nÇalışma Bitti (Ama API isteği devam ediyor...)');
