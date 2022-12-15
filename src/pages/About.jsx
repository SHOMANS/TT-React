import React from 'react';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';

class AboutPage extends React.Component {
  state = {
    subscribersNum: 0,
  };

  increment = () => {
    // this.setState({ subscribersNum: 1 }); // to update the state to a new value doesn't depend on the prev one
    this.setState((prevState) => ({ subscribersNum: prevState.subscribersNum + 2 }));
    // this.state.subscribersNum = 2; // DO NOT USE THIS NEVER EVER
  };

  render() {
    return (
      <div>
        <Header myPage='about' />
        <Container>
          <h2>About Page</h2>
          <button onClick={this.increment}>subscribe</button>
          <span>subscribers: {this.state.subscribersNum}</span>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
