import { configureStore } from '@reduxjs/toolkit';

// reducers
import counterReducer from './counter';
import todosReducer from './todos';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
