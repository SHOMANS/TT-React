import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    isLoading: false,
    todos: [],
    singleTodo: {},
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      const { payload = false } = action;
      state.isLoading = payload;
    },

    getAllTodos: (state, action) => {
      state.todos = action.payload;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    createTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, getAllTodos, deleteTodo, createTodo, setError } = todosSlice.actions;

export const getAllData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    if (data) {
      dispatch(getAllTodos(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};

// won't work without middleware (redux-thunk for example)
// export const getAllData = (dispatch) => async () => {
//   dispatch(setLoading(true));
//   try {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
//     if (data) {
//       dispatch(getAllTodos(data));
//     }
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading());
//   }
// };

export default todosSlice.reducer;
