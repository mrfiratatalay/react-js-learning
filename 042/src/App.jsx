// src/App.jsx

import React from 'react';
// 1. 'mobx-react' kütüphanesinden 'observer'ı import et.
import { observer } from 'mobx-react';

// 2. 'Provider' falan YOK. Direkt store'umuzu import ediyoruz.
// O bir 'singleton' (tekil örnek). Herkes aynı 'counterStore'u kullanacak.
import counterStore from './counterStore';

// 3. Component'imizi 'observer' fonksiyonu ile sarıyoruz.
// Bu, 'App' component'ine şunu der: "Sen artık bir gözlemcisin.
// Render ederken kullandığın 'observable' veriler değişirse,
// kendini OTOMATİK olarak yeniden render et."
const App = observer(() => {
  // 4. useSelector/useDispatch YOK. Direkt store'u kullan.
  // 'counterStore.count'u okuduğu an, 'App' component'i
  // 'counterStore.count'a "abone" olmuş olur.

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontSize: '24px' }}>
      <h1>MobX Counter</h1>

      {/* State'i (observable) oku */}
      <div>Count: {counterStore.count}</div>

      {/* Hesaplanmış veriyi (computed) oku */}
      <div>Double: {counterStore.doubleCount}</div>

      <hr />

      {/* Eylemleri (actions) çağır */}
      <button onClick={() => counterStore.increment()}>+</button>
      <button onClick={() => counterStore.decrement()}>-</button>

      <hr />

      {/* Async eylemi çağır */}
      <button onClick={() => counterStore.fetchCountFromServer()} disabled={counterStore.loading}>
        {counterStore.loading ? 'Sunucudan Getiriliyor...' : 'Sunucudan Count Getir (ID 1)'}
      </button>
    </div>
  );
});

export default App;
