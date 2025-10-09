import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';

function App() {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState('First');

  return (
    <div>
      <FormControlLabel
        label={`Checkbox ${checkbox ? '(checked)' : ''}`}
        control={<Checkbox checked={checkbox} onChange={() => setCheckbox(!checkbox)} />}
      />

      <FormControl component="fieldset">
        <FormLabel component="legend">{radio}</FormLabel>
        <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
          <FormControlLabel value="First" label="First" control={<Radio />} />
          <FormControlLabel value="Second" label="Second" control={<Radio />} />
          <FormControlLabel value="Third" label="Third" control={<Radio />} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default App;
