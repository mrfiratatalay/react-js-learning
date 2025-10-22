// src/components/AddTodoForm.tsx
import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext'; // Kendi hook'umuzu import ediyoruz.

export const AddTodoForm = () => {
  // Bu state, sadece bu input alanını kontrol etmek için var. Lokal bir state.
  const [text, setText] = useState('');
  // Context'ten sadece 'dispatch' fonksiyonuna ihtiyacımız var. State'i burada okumuyoruz.
  const { dispatch } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle.
    if (!text.trim()) return; // Boş görev eklenmesini engelle.

    // İşte garsonu çağırıyoruz!
    // 'ADD_TODO' tipinde bir emir ve 'payload' olarak da input'taki metni yolluyoruz.
    dispatch({ type: 'ADD_TODO', payload: text });

    setText(''); // İşlem bitince input'u temizle.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yeni bir görev ekle..."
      />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddTodoForm;
