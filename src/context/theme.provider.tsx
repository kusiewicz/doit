import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { ResetStyles } from '../styles/resetStyles';

import { theme } from '../styles/theme-config';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
