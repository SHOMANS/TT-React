import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  margin-top: 10px;
}

body {
  transition: all 0.5s;
  background-color: ${(props) => props.theme.pallet.page};
  color: ${(props) => props.theme.pallet.main};
}


.spinner {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #123456;
  animation: spinner 1s infinite linear;
}

@keyframes spinner {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
`;
