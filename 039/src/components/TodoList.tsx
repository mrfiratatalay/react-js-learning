import { useTodos } from '../context/TodoContext';

const TodoList = () => {
  const { state, dispatch } = useTodos();

  return (
    <ul>
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
