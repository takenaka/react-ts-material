import React from 'react';
import clsx from 'clsx';
import { Box, Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import Index from 'components/pages/Index';
import Header from 'components/organisms/Header';
import Drawer from 'components/organisms/Drawer';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import useStyles from 'uses/styles';
import theme from 'theme';

export default function() {
  const classes = useStyles();
  const drawer = useSelector((state: RootState) => state.app.drawer);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <Drawer />

      <Container
        className={clsx(classes.content, {
          [classes.contentShift]: drawer
        })}
      >
        <Box my={2}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" children={<Index />} />
            </Switch>
          </BrowserRouter>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
