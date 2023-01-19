import styled from 'styled-components';
import { rotateAnimation } from '../../global/animations';

export const StyledWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 2px #ccc;
  align-items: center;
  background-color: ${(props) => props.theme.pallet.secondary};

  // bad practice
  /* & button {
    padding: 0.5rem;
    border: none;
    background-color: ${(props) => (!props.counter ? 'antiquewhite; cursor: pointer' : '#333; cursor: not-allowed')};
    transition: all 0.3s;
  } */
`;

export const StyledButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: ${(props) => (!props.counter ? 'antiquewhite; cursor: pointer' : '#333; cursor: not-allowed')};
  transition: all 0.3s;

  /* ${(props) => (!props.counter ? `font-size: 2px;color: red;` : '#333')}; */
  /* cursor: pointer; */
  /* font-size: ${({ fontSize }) => fontSize || '16'}px; */
  /* font-size: ${({ fontSize = 16 }) => fontSize}px; */
  /* ${({ fontSize }) => fontSize && 'font-size: ' + fontSize + 'px'}; */

  &:hover {
    ${(props) => (!props.counter ? 'transform: scale(1.1);' : '')};
  }
  &::after {
  }
`;

export const StyledRedButton = styled(StyledButton)`
  background-color: red;
  cursor: text;
  font-size: ${(props) => props.theme.fontSizes.h6}rem;
  &:hover {
    transform: scale(1);
  }
`;

export const StyledInput = styled('input')`
  ${({ type }) => (type === 'number' ? 'width: 60px' : '')};
  ${({ value }) => (value > 10 ? 'visibility:hidden' : '')}

  &.custom-input {
    padding: 10px;
  }
`;

export const AnimatedDiv = styled('div')`
  @keyframes scaleInside {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }

  width: 100px;
  height: 100px;
  background-color: aqua;
  animation: ${rotateAnimation} 2s infinite linear;
`;
