import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Toolbar from './Toolbar';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>Context API Denemesi</h1>
        <Toolbar />
        <hr />
        <button onClick={toggleTheme}>Temayi Degistir</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
