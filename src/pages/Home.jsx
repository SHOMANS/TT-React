// import {Component} from 'react';

// class HomePage extends Component {
//   render() {
//     return <div></div>;
//   }
// }

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <h2>Home Page</h2>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
