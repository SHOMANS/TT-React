// redux
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';

const App = () => {
  const { value } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>inc 10</button>
    </>
  );
};

export default App;
