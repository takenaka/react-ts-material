import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from 'theme';
import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';

const Styles: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </StylesProvider>
  );
};

export default Styles;
