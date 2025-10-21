import ThemeContext from './context/ThemeContext';
import Toolbar from './Toolbar';

function App() {
  const theme = 'light';

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>Context API Denemesi</h1>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
