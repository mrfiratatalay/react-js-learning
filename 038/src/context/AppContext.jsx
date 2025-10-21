import { createContext } from 'react';
import { useContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  user: null,
};

function appReducer(state, action) {
  console.log('Reducer calisti, emir geldi:', action);

  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  return useContext(AppContext);
};
