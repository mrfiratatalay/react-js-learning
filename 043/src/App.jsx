import { useCounterStore } from './useCounterStore';

function App() {
  //  STORE DAN STATE LARI CEKMEK
  const count = useCounterStore((state) => state.count);
  const loading = useCounterStore((state) => state.loading);

  //STORE DAN ACTION LARI CEKMEK.
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
  const fetchCount = useCounterStore((state) => state.fetchCount);

  return (
    <div>
      <h1>Zustand Counter</h1>
      <div>Count: {count}</div>
      <hr />

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <button onClick={fetchCount} disabled={loading}>
        {loading ? 'Sunucudan Getirliyor...' : 'Sunucudan Count Getir (ID 1)'}
      </button>
    </div>
  );
}

export default App;
