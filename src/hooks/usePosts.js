import { useReducer } from 'react';
import { POSTS_ACTIONS } from '../constants/postsActions';
import { posts } from '../mock/posts';

const reducer = (state, action) => {
  switch (action.type) {
    case POSTS_ACTIONS.START_LOADING:
      return { ...state, isLoading: true };

    case POSTS_ACTIONS.END_LOADING:
      return { ...state, isLoading: false };

    case POSTS_ACTIONS.READ: // Get All Posts
      return { ...state, posts: action.payload };

    case POSTS_ACTIONS.SELECT: // Get Single Post
      return { ...state, post: state.posts.find((item) => item.id === action.payload) };

    case POSTS_ACTIONS.CREATE: // Create New Post
      return { ...state, posts: [...state.posts, { ...action.payload, id: Math.round(Math.random() * 100) }] };

    case POSTS_ACTIONS.UPDATE: // Update Existed Post
      return { ...state, posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post)) };

    case POSTS_ACTIONS.DELETE: // Delete Existed post
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };

    case POSTS_ACTIONS.FAILED:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};

const usePosts = () => {
  const [state, dispatch] = useReducer(reducer, { isLoading: false, post: {}, posts: [], errors: {} });

  const getAll = () => dispatch({ type: POSTS_ACTIONS.READ, payload: posts });

  const getOne = (id) => dispatch({ type: POSTS_ACTIONS.SELECT, payload: id });

  const startLoading = () => dispatch({ type: POSTS_ACTIONS.START_LOADING });

  const endLoading = () => dispatch({ type: POSTS_ACTIONS.END_LOADING });

  const deleteOne = (id) => dispatch({ type: POSTS_ACTIONS.DELETE, payload: id });

  const createPost = (body) => dispatch({ type: POSTS_ACTIONS.CREATE, payload: body });

  const updatePost = (body) => dispatch({ type: POSTS_ACTIONS.UPDATE, payload: body });

  return { state, getAll, getOne, startLoading, endLoading, deleteOne, createPost, updatePost };
};

export default usePosts;
