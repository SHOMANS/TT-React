import Home from './pages/Home';
import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';
import Todo from './pages/Todo';
import Slider from './pages/Slider';
import Posts from './pages/Posts';
import Counters from './pages/Counters';
import Todos from './pages/Todos';
import Gifs from './pages/Gifs';

const App = () => {
  const router = useRoutes([
    { index: true, element: <Home title={'Home Page'} /> },
    { path: 'todo', element: <Todo /> },
    { path: 'gifs', element: <Gifs /> },
    { path: 'todos', element: <Todos /> },
    { path: 'posts', element: <Posts /> },
    { path: 'slider', element: <Slider /> },
    { path: 'counters', element: <Counters /> },

    { path: '*', element: <h1>page not found 404</h1> },
  ]); // in functional component

  return (
    <div className='App'>
      <Header />
      {router}
      <Footer />
    </div>
  );
};

export default App;
