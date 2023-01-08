import Form from './pages/Form';
import Home from './pages/Home';
import { useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const router = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/form', element: <Form /> },
    { path: '*', element: <h1>page not found 404</h1> },
  ]);

  return (
    <div className='App'>
      <Header myPage='home' />
      {router}

      <Footer />
    </div>
  );
}

export default App;
