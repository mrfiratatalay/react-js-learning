import { useDispatch, useSelector } from 'react-redux';

import { addByAmount, decrement, increment, reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontSize: '24px' }}>
      <h1>React Redux Toolkit (RTK) Counter</h1>
      <div>Count: {count}</div>
      <hr />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(addByAmount(5))}>Add 5</button>
    </div>
  );
}
export default App;
