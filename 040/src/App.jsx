import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleAddFive = () => {
    dispatch({ type: 'ADD_BY_AMOUNT', payload: 5 });
  };
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontSize: '24px' }}>
      <h1>React Redux Counter</h1>
      <div>Count: {count}</div>
      <hr />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={handleAddFive}>ADD 5</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default App;
