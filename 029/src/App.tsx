import FormGroup from '@mui/material/FormGroup';
import MySelect from './components/MySelect';
import MyTextInput from './components/MyTextInput';

function App() {
  return (
    <FormGroup style={{ width: 200, margin: 10 }}>
      <MyTextInput />
      <MySelect />
    </FormGroup>
  );
}

export default App;
