import React from 'react';
import Container from '../components/Container';

class InfoPage extends React.Component {
  state = {
    isMounted: true,
  };
  render() {
    return (
      <div>
        <Container className='my-container'>
          <h2>Info Page</h2>
        </Container>
      </div>
    );
  }
}

export default InfoPage;
