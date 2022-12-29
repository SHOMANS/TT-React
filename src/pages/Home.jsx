import React from 'react';
import Container from '../components/Container';

class HomePage extends React.Component {
  state = {
    isMounted: true,
  };
  render() {
    return (
      <div>
        <Container className='my-container'>
          <h2>Home Page</h2>
        </Container>
      </div>
    );
  }
}

export default HomePage;
