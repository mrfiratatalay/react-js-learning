import { create } from 'zustand';

export const useCounterStore = create((set, get) => ({
  //STATE
  count: 0,
  loading: false,

  //ACTIONS
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },

  reset: () => {
    set({ count: 0 });
  },

  //ASYNC FUNCTION
  fetchCountFromServer: async () => {
    set({ loading: true });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();

      set({ count: data.id, loading: false });
    } catch (error) {
      set({ loading: false });
      console.log('API Hatasi:', error);
    }
  },
}));
