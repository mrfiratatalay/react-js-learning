import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function LambaControl() {
  const [lambaAcikMi, setLambaAcikMi] = useState(false);

  const handleSwitchChange = (event: any) => {
    setLambaAcikMi(event.target.checked);
  };

  const handleButtonClick = () => {
    setLambaAcikMi((oncekiDurum) => !oncekiDurum);
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h6">{lambaAcikMi ? 'Lamba Acik' : 'Lamba Kapali'}</Typography>
      <Switch checked={lambaAcikMi} onChange={handleSwitchChange} color="warning" />

      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={handleButtonClick}>
          Durumu Ters Cevir
        </Button>
      </Box>

      <FormControlLabel
        control={<Switch checked={lambaAcikMi} onChange={handleSwitchChange} />}
        label={lambaAcikMi ? 'Lamba Acik' : 'Lamba Kapali'}
      />
    </Box>
  );
}
export default LambaControl;
