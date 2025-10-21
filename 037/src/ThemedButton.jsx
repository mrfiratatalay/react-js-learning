import { useTheme } from './context/ThemeContext';

function ThemedButton() {
  const theme = useTheme();

  console.log('ThemedButton render oldu. Gelen tema:', theme);

  const style = {
    background: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    padding: '10px 20px',
    border: '1px solid',
  };

  return <button style={style}>Ben temali bir butonum!</button>;
}

export default ThemedButton;
