import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { ResetStyles } from '../assets/styles/resetStyles';
import { theme } from '../assets/styles/theme-config';
import 'normalize.css';
import 'antd/dist/antd.css';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
