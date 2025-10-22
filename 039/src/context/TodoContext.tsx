// src/context/TodoContext.tsx

// Önce React'ten ihtiyacımız olan araçları import edelim.
import React, { createContext, useReducer, useContext } from 'react';

// --- TİPLERİ TANIMLAYALIM (TypeScript'in gücü!) ---

// 1. Tek bir "Todo" objesi nasıl görünmeli?
// Her görevin bir kimliği (id), bir metni (text) ve
// tamamlanıp tamamlanmadığını belirten bir durumu (completed) olmalı.
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// 2. Uygulamamızın genel state'i (AppState) nasıl görünmeli?
// Şimdilik sadece "todos" adında, Todo objelerinden oluşan bir dizi tutacak.
type AppState = {
  todos: Todo[];
};

// 3. State'i değiştirmek için göndereceğimiz emirler (AppAction) nasıl olmalı?
// Bu en önemli kısım. "Discriminated Union" deniyor buna.
// Emir ya 'ADD_TODO' olabilir ve yanında metin taşır.
// Ya 'TOGGLE_TODO' olabilir ve yanında id taşır.
// Ya da 'DELETE_TODO' olabilir ve yanında id taşır.
type AppAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

// --- STATE MANTIĞI: REDUCER ---

// Başlangıçta hiç görevimiz olmasın.
const initialState: AppState = {
  todos: [],
};

// İşte bizim "Aşçı"mız. Gelen emire (action) ve mevcut duruma (state) göre
// yeni bir state oluşturup döndürecek.
const todoReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    // 'ADD_TODO' emri gelirse...
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Date.now(), // Şimdilik basitçe anlık zamanı ID olarak kullanalım.
        text: action.payload, // Emirle gelen metni al.
        completed: false, // Yeni görev başlangıçta tamamlanmamıştır.
      };
      // ÖNEMLİ: Mevcut state'i asla değiştirmiyoruz!
      // Onun bir kopyasını alıp (...state.todos) yeni elemanı ekleyerek YENİ BİR DİZİ oluşturuyoruz.
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    // 'TOGGLE_TODO' emri gelirse...
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          // Dizideki her bir todo'yu gez. Eğer ID'si emirle gelen ID ile eşleşiyorsa...
          todo.id === action.payload
            ? // ...o todo'nun bir kopyasını al, ama 'completed' değerini tersine çevir.
              { ...todo, completed: !todo.completed }
            : // Eşleşmiyorsa, o todo'ya dokunma, olduğu gibi bırak.
              todo,
        ),
      };

    // 'DELETE_TODO' emri gelirse...
    case 'DELETE_TODO':
      return {
        ...state,
        // Diziyi filtrele. Sadece ID'si emirle gelen ID'ye eşit OLMAYANLARI tut.
        // Böylece silmek istediğimiz todo dışarıda kalmış olur.
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    // Tanımsız bir emir gelirse, hiçbir şey yapma, mevcut state'i geri döndür.
    default:
      return state;
  }
};

// --- CONTEXT VE PROVIDER KURULUMU ---

// Context'in içinde ne tür bir veri olacağını tanımlıyoruz.
type TodoContextType = {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
};

// Context'i oluşturuyoruz.
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider component'ini oluşturuyoruz. Bu, tüm uygulamamızı saracak.
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  // useReducer'ı çağırıyoruz. Bize state ve dispatch'i veriyor.
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Bu state ve dispatch'i Provider aracılığıyla yayınlıyoruz.
  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

// Bu custom hook, diğer component'lerin context'e kolayca erişmesini sağlayacak.
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};
