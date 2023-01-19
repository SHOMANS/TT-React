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
`;
