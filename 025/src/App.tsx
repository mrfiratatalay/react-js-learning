import { Stack, styled } from '@mui/material';
import Grid from '@mui/material/Grid'; // Bu artık yeni Grid (v2)
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const headerFooterStyle = {
  textAlign: 'center',
  height: 50,
};

const mainStyle = {
  textAlign: 'center',
  padding: '8px 16px',
};

const Item = styled(Paper)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function App() {
  return (
    // item prop'larına gerek YOK.
    <Grid container spacing={2} sx={{ backgroundColor: '#F3F6F9' }}>
      {/* HEADER - xs={12} yerine size={12} */}
      <Grid size={12}>
        <Item sx={headerFooterStyle}>
          <Typography sx={mainStyle}>Header</Typography>
        </Item>
      </Grid>

      {/* NAV - xs="auto" yerine size="auto" */}
      <Grid size="auto">
        <Item>
          <Stack spacing={1}>
            <Typography sx={mainStyle}>Nav Item 1</Typography>
            <Typography sx={mainStyle}>Nav Item 2</Typography>
            <Typography sx={mainStyle}>Nav Item 3</Typography>
            <Typography sx={mainStyle}>Nav Item 4</Typography>
          </Stack>
        </Item>
      </Grid>

      {/* MAIN CONTENT - xs yerine size="grow" */}
      <Grid size="grow">
        <Item>
          <Typography sx={mainStyle}>Main Content</Typography>
        </Item>
      </Grid>

      {/* FOOTER - xs={12} yerine size={12} */}
      <Grid size={12}>
        <Item sx={headerFooterStyle}>
          <Typography sx={mainStyle}>Footer</Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

export default App;
