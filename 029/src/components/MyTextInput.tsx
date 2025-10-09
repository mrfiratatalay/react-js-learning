import TextField from '@mui/material/TextField';
import { useState } from 'react';

function MyTextInput() {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      margin="normal"
    />
  );
}

export default MyTextInput;
