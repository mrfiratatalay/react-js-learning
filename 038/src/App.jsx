import { AppProvider } from './context/AppContext';
import MyComponent from './MyComponent';

function App() {
  return (
    <AppProvider>
      <MyComponent />
    </AppProvider>
  );
}

export default App;
