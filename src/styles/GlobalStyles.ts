import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
  }

  .text-field {
    margin: 30px 0;
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
 }

 li {
   margin: 20px 0;
 }
`;
