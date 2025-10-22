// src/components/TodoList.tsx
import { useTodos } from '../context/TodoContext'; // Yine kendi hook'umuz.

export const TodoList = () => {
  // Bu sefer hem 'state'e hem de 'dispatch'e ihtiyacımız var.
  const { state, dispatch } = useTodos();

  return (
    <ul>
      {/* state içindeki todos dizisini map'liyoruz ve her bir todo için bir <li> oluşturuyoruz */}
      {state.todos.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            style={{
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
            style={{ marginLeft: '10px' }}
          >
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
