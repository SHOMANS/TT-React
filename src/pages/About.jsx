import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class AboutPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <h2>About Page</h2>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
