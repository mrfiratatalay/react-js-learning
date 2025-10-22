import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div style={{ padding: '20px' }}>
        <h1>Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
export default App;
