import { configureStore } from '@reduxjs/toolkit';

// reducers
import counterReducer from './counter';
import todosReducer from './todos';
import postsReducer from './posts';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    posts: postsReducer,
  },
});
