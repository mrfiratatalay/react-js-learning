import { useTheme } from './context/ThemeContext';

function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  console.log('ThemedButton render oldu. Gelen tema:', theme);

  const style = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
    padding: '10px 20px',
    border: '1px solid',
  };

  return (
    <button style={style} onClick={toggleTheme}>
      Ben temali bir butonum.
    </button>
  );
}

export default ThemedButton;
