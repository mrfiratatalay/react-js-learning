import { useAppContext } from './context/AppContext';

function MyComponent() {
  const { state, dispatch } = useAppContext();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: { name: 'Son sinif ogrencisi' } });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const appStyle = {
    backgroundColor: state.theme === 'dark' ? '#282c34' : '#ffffff',
    color: state.theme === 'dark' ? 'white' : 'black',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyle}>
      <h1>useReducer + Context Denemesi</h1>
      <hr />
      <h2>Kullanici Durumu</h2>
      {state.user ? (
        <div>
          <p>Hos geldin, {state.user.name}!</p>
          <button onClick={handleLogout}>Cikis Yap</button>
        </div>
      ) : (
        <div>
          <p>Lutfen giris yapin.</p>
          <button onClick={handleLogin}>Giris Yap</button>
        </div>
      )}
      <hr />

      <h2>Tema</h2>
      <p>Mevcut Tema: {state.theme}</p>
      <button onClick={handleToggleTheme}>Temayi Degistir</button>
    </div>
  );
}

export default MyComponent;
