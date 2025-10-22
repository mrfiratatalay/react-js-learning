import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const AddTodoForm = () => {
  const [text, setText] = useState('');

  const { dispatch } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({ type: 'ADD_TODO', payload: text });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Ekle</button>
    </form>
  );
};
export default AddTodoForm;
