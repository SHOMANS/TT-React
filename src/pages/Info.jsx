import React from 'react';
import Container from '../components/Container';

class InfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myState: false, counter: 0 };
    console.log('from constructor');
  }

  componentDidMount() {
    console.log('from did mount');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('from get derived');
    return { myState: props.state };
  }

  shouldComponentUpdate() {
    console.log('from should component update');
    if (this.state.counter > 5 && this.state.counter < 10) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('from get snapshot');
    // console.log(prevState.counter);
    return null;
  }

  componentDidUpdate() {
    console.log('from did update');
  }

  componentWillUnmount() {
    console.log('from will unmount');
  }

  render() {
    console.log('from render');
    // console.log(this.state.counter);

    return (
      <div>
        <Container className='my-container'>
          <h2>Info Page</h2>
          <h3>counter: {this.state.counter}</h3>
          <button onClick={() => this.setState((prevState) => ({ counter: prevState.counter + 1 }))}>click</button>
        </Container>
      </div>
    );
  }
}

export default InfoPage;
