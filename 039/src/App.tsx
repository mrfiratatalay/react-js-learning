// src/App.tsx
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    // 1. TodoProvider ile tüm uygulamayı sarıyoruz.
    // Artık bunun içindeki her component, 'useTodos' hook'u ile state'e erişebilir.
    <TodoProvider>
      <div style={{ padding: '20px' }}>
        <h1>Todo List</h1>
        {/* 2. Form component'imiz */}
        <AddTodoForm />
        {/* 3. Liste component'imiz */}
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
