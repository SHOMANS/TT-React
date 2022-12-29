import Form from './pages/Form';
import Home from './pages/Home';
import Counters from './pages/Counters';
import TodoList from './pages/TodoList';
import Post from './pages/Post';
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { posts } from './mock/posts';

function App() {
  const router = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/form', element: <Form /> },
    { path: '/counters', element: <Counters /> },
    { path: '/todo', element: <TodoList /> },
    { path: '/new', element: <h1>New Page</h1> },
    {
      path: '/posts',
      element: (
        <ul>
          {posts.map((item) => (
            <li>
              <Link to={`/posts/${item.id}`}>Post {item.id}</Link>
            </li>
          ))}
        </ul>
      ),
    },
    {
      path: '/posts/:id',
      element: <Post />,
    },
    { path: '*', element: <h1>page not found 404</h1> },
  ]);

  return (
    <div className='App'>
      <Header myPage='home' />
      {router}

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/counters' element={<Counters />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='/new' element={<h1>New Page</h1>} />

        <Route
          path='/posts'
          element={
            <ul>
              {posts.map((item) => (
                <li>
                  <Link to={`/posts/${item.id}`}>Post {item.id}</Link>
                </li>
              ))}
            </ul>
          }
        />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='*' element={<h1>page not found 404</h1>} />
      </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
