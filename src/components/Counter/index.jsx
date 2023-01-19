import React, { useState, Fragment } from 'react';
import { AnimatedDiv, StyledButton, StyledInput, StyledRedButton, StyledWrapper } from './style';

const Counter = ({ counter, onDecrement, onIncrement }) => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <StyledWrapper counter={!counter}>
        <StyledButton onClick={onDecrement} disabled={!counter} counter={!counter} fontSize='20'>
          decrement
        </StyledButton>
        <StyledRedButton>{counter}</StyledRedButton>
        <StyledButton onClick={onIncrement}>increment</StyledButton>
        <StyledInput type='text' value={'0'} name='' />
        <StyledInput type='number' value={count} name='' onChange={() => setCount((prevState) => prevState + 1)} />
        <StyledInput className='custom-input' type='number' value={count} name='' onChange={(e) => setCount(e.target.value)} />
      </StyledWrapper>
      <AnimatedDiv />
    </Fragment>
  );
};

export default Counter;
