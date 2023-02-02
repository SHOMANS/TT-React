import { lazy } from 'react';
// pages
// import Home from '../pages/Home';
// import Todo from '../pages/Todo';
// import Slider from '../pages/Slider';
// import Posts from '../pages/Posts';
// import Counters from '../pages/Counters';
// import Todos from '../pages/Todos';
// import Gifs from '../pages/Gifs';

const Home = lazy(() => import('../pages/Home'));
const Todo = lazy(() => import('../pages/Todo'));
const Slider = lazy(() => import('../pages/Slider'));
const Posts = lazy(() => import('../pages/Posts'));
const Counters = lazy(() => import('../pages/Counters'));
const Todos = lazy(() => import('../pages/Todos'));
const Gifs = lazy(() => import('../pages/Gifs'));

export const router = [
  { index: true, element: <Home title={'Home Page'} /> },
  { path: 'todo', element: <Todo /> },
  { path: 'gifs', element: <Gifs /> },
  { path: 'todos', element: <Todos /> },
  { path: 'posts', element: <Posts /> },
  { path: 'slider', element: <Slider /> },
  { path: 'counters', element: <Counters /> },

  { path: '*', element: <h1>page not found 404</h1> },
];
