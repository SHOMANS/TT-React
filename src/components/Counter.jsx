const Counter = ({ counter, onDecrement, onIncrement }) => {
  return (
    <div>
      <button onClick={onDecrement} disabled={!counter}>
        decrement
      </button>
      {counter}
      <button onClick={onIncrement}>increment</button>
    </div>
  );
};

export default Counter;
