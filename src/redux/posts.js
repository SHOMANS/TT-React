import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    posts: [],
    singlePost: {},
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      const { payload = false } = action;
      state.isLoading = payload;
    },

    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((todo) => todo.id !== action.payload);
    },

    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },

    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => (post.id === action.payload.id ? action.payload : post));
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, getAllPosts, setError } = postsSlice.actions;

// =====================================================================================
// custom actions
// =====================================================================================
export const getAllData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if (data) {
      dispatch(getAllPosts(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};

// =====================================================================================

export const deletePost = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (res) dispatch(postsSlice.actions.deletePost(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};

// =====================================================================================

export const createPost = (values) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', values);
    if (res) dispatch(postsSlice.actions.createPost(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};

// =====================================================================================

export const updatePost = (values) => async (dispatch) => {
  const id = values.id;
  delete values.id;

  dispatch(setLoading(true));

  try {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, values);
    if (res) dispatch(postsSlice.actions.updatePost(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading());
  }
};

export default postsSlice.reducer;
