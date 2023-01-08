import Form from './pages/Form';
import Home from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import InfoPage from './pages/Info';
import ProtectedRoute from './components/ProtectedRoute';
import React from 'react';

export default class App extends React.Component {
  state = {
    isAuthorized: false,
  };

  // const router = useRoutes([
  //   { index: true, element: <Navigate to='/login' /> },

  //   {
  //     path: '/login',
  //     element: <>{isAuthorized ? <Navigate to='/dashboard' /> : <Form />}</>,
  //   },

  //   {
  //     path: '/dashboard',
  //     element: <ProtectedRoute isAuthorized={isAuthorized} />,
  //     children: [
  //       { index: true, element: <Home /> },
  //       { path: 'info', element: <InfoPage /> },
  //     ],
  //   },

  //   { path: '*', element: <h1>page not found 404</h1> },
  // ]); // in functional component

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) this.setState({ isAuthorized: true });
  }

  login = () => this.setState({ isAuthorized: true });

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.setState({ isAuthorized: false });
  };

  render() {
    return (
      <div className='App'>
        {/* {router} */}
        <Routes>
          <Route index element={<Navigate to='/login' />} />

          <Route path='/login' element={<>{this.state.isAuthorized ? <Navigate to='/dashboard' /> : <Form login={this.login} />}</>} />

          <Route path='/dashboard' element={<ProtectedRoute isAuthorized={this.state.isAuthorized} logout={this.logout} />}>
            <Route index element={<Home />} />
            <Route path='info' element={<InfoPage />} />
          </Route>

          <Route path='*' element={<h1>page not found 404</h1>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
