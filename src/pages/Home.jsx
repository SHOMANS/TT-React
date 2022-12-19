import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import ToggleButton from '../components/ToggleButton';
// import Typography from '../components/Typography'; // the shape of import as default
import * as Typography from '../components/Typography'; // import all as Typography when you want to use one component you use dot notation
import { H2 } from '../components/Typography'; // imported as export const shape
import Counter from '../components/Counter';

class HomePage extends React.Component {
  state = {
    isMounted: true,
  };
  render() {
    return (
      <div>
        <Header myPage='home' />
        <Container className='my-container'>
          <h2>Home Page</h2>
        </Container>
        <section>
          <Container>
            {/* <h3>Section 1</h3> */}
            {/* <ToggleButton /> */}
            {/* <H2>my text</H2> */}
            {this.state.isMounted ? <Counter /> : ''}
          </Container>
          <button
            onClick={() => {
              this.setState({ isMounted: false });
            }}
          >
            click me
          </button>
        </section>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
