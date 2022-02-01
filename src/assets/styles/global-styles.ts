import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle = createGlobalStyle<{ theme: any }>`
   * {
       box-sizing: border-box;
   }

   html, body {
        font-family: Roboto;
        height: 100%;
    }

}
`;
