import { useState } from 'react';
import Container from '../components/Container';

export default function HomePage({ title, ...rest }) {
  // const { title } = props;
  const [state, setState] = useState('Ahmed');
  const [counter, setCounter] = useState(0);

  const handleChangeState = () => {
    setState('Nabil');
  };

  const handleIncrement = () => {
    // setCounter(counter + 1);
    setCounter((counter) => counter + 1);
    if (true) {
      // setCounter(counter + 1);
      setCounter((counter) => counter + 1);
    }
    // setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <Container className='my-container'>
        {state}
        {counter}
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleChangeState}>click</button>
      </Container>
    </div>
  );
}
