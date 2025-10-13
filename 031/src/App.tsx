import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': { margin: theme.spacing(1) },
  '&.MuiButton-contained': { borderRadius: 50 },
  '&.MuiButton-sizeSmall': { fontWeight: theme.typography.fontWeightLight },
}));

function App() {
  return (
    <>
      <StyledButton>First</StyledButton>
      <StyledButton variant="contained">Second</StyledButton>
      <StyledButton size="small" variant="outlined">
        Third
      </StyledButton>
    </>
  );
}
export default App;

