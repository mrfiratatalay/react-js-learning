import { useState } from 'react';

function BatchingUpdates() {
  let [value, setValue] = useState('loading...');

  function onStart() {
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        setValue(`value ${i + 1}`);
      }
    }, 1);
  }

  return (
    <div>
      <p>
        Value: <em>{value}</em>
      </p>
      <button onClick={onStart}>Start</button>
    </div>
  );
}
export default BatchingUpdates;
