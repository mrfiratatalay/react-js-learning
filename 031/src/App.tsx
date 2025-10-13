import AndroidIcon from '@mui/icons-material/Android';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

type ButtonColor = 'primary' | 'secondary';

export default function App() {
  console.log('🚀 App component rendered');

  const [color, setColor] = useState<ButtonColor>('secondary');
  console.log('📌 Current color state:', color);

  const updateColor = () => {
    const newColor = color === 'secondary' ? 'primary' : 'secondary';
    console.log('🔄 Color changing from', color, 'to', newColor);
    setColor(newColor);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        color={color}
        onClick={() => {
          console.log('✅ Contained button clicked');
          updateColor();
        }}
      >
        Contained
      </Button>

      <Button
        color={color}
        onClick={() => {
          console.log('✅ Text button clicked');
          updateColor();
        }}
      >
        Text
      </Button>

      <Button
        variant="outlined"
        color={color}
        onClick={() => {
          console.log('✅ Outlined button clicked');
          updateColor();
        }}
      >
        Outlined
      </Button>

      <IconButton
        color={color}
        onClick={() => {
          console.log('✅ Icon button clicked');
          updateColor();
        }}
      >
        <AndroidIcon />
      </IconButton>
    </Stack>
  );
}
